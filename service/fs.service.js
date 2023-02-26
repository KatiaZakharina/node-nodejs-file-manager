import fs, { constants } from 'fs';
import {
  unlink,
  readFile,
  access,
  rename as fsRename,
  open,
} from 'fs/promises';
import { basename, join } from 'path';

import logService from './log.service.js';

const notExist = (error) => error.code === 'ENOENT';
const alreadyExist = (error) =>
  error.code === 'EEXIST' || error.code === 'ERR_FS_CP_EEXIST';

const isFileExist = (path) => {
  return new Promise((resolve, reject) => {
    access(path, constants.F_OK)
      .then(() => reject(new Error("File isn't exist")))
      .catch(() => resolve(path));
  });
};

const read = async (filename) => {
  try {
    const file = await readFile(filename, 'utf8');
    return file;
  } catch (error) {
    if (notExist(error)) {
      throw Error("File isn't exist");
    } else {
      throw error;
    }
  }
};

const create = async (filename) => {
  try {
    await open(filename, 'wx');
  } catch (error) {
    if (alreadyExist(error)) {
      throw Error('File is already exist');
    } else {
      throw Error(error.message);
    }
  }
};

const rename = async (oldPath, newPath) => {
  try {
    await isFileExist(newPath);
    await fsRename(oldPath, newPath);
  } catch (error) {
    if (notExist(error) || alreadyExist(error)) {
      throw Error('File system operation failed');
    }
    throw error;
  }
};

const remove = async (path) => {
  try {
    await unlink(path);
  } catch (error) {
    if (notExist(error)) {
      throw Error('File is not exist');
    } else {
      throw error;
    }
  }
};

const copy = async (source, destinationDir) => {
  const fileName = basename(source);
  const destination = join(destinationDir, fileName);

  const readableStream = fs.createReadStream(source, 'utf8', () => {});
  const writableStream = fs.createWriteStream(destination);

  readableStream.on('data', () => {
    writableStream.write(chunk);
  });

  readableStream.on('error', () => {});
  writableStream.on('error', (error) => {
    logService.printError(`Operation failed. ${error.message}`);
  });

  writableStream.end();
};

export default {
  read,
  create,
  rename,
  remove,
  copy,
};

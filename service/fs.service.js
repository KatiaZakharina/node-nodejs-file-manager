import fs, { open, constants } from 'fs';
import { unlink, readFile, writeFile, access } from 'fs/promises';
import { basename, join } from 'path';

const notExist = (error) => error.code === 'ENOENT';
const alreadyExist = (error) =>
  error.code === 'EEXIST' || error.code === 'ERR_FS_CP_EEXIST';

const isFileExist = (path) => {
  return new Promise((resolve, reject) => {
    access(path, constants.F_OK)
      .then(() => reject(new Error('FS operation failed')))
      .catch(() => resolve(path));
  });
};

const read = async (filename) => {
  try {
    const file = await readFile(filename, 'utf8');
    return file;
  } catch (error) {
    if (notExist(error)) {
      throw Error('File is not exist');
    } else {
      throw error;
    }
  }
};

const create = async (filename) => {
  try {
    open(filename, 'wx', () => {});
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
    fs.rename(oldPath, newPath, () => {});
  } catch (error) {
    if (notExist(error) || alreadyExist(error)) {
      throw Error('FS operation failed');
    }
    throw error;
  }
};

const remove = async (path) => {
  try {
    await unlink(path);
  } catch (error) {
    if (notExist(error)) {
      throw Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

const copy = async (source, destinationDir) => {
  const fileName = basename(source);
  const destination = join(destinationDir, fileName);

  const readableStream = fs.createReadStream(source, 'utf8');
  const writableStream = fs.createWriteStream(destination);

  readableStream.on('data', () => {
    writableStream.write(chunk);
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

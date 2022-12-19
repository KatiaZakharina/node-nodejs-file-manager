import logService from './log.service.js';

import  helper  from '../commands/helper.js';
import navigation from '../commands/navigation.js';
import fs from '../commands/fs.js';
import os from '../commands/os.js';
import hash from '../commands/hash.js';
import zip from '../commands/zip.js';

const COMMANDER = {
  help: helper,
  up: navigation.up,
  cd: navigation.cd,
  ls: navigation.list,
  cat: fs.readFile,
  add: fs.addFile,
  rn: fs.renameFile,
  cp: fs.copyFile,
  mv: fs.moveFile,
  rm: fs.deleteFile,
  os,
  hash: hash.calculateHash,
  compress: zip.compress,
  decompress: zip.decompress,
  default: () => logService.printError(`Invalid input!`),
};

const execute = async (commandList) => {
  try {
    const [command, ...parameters] = commandList;

    command in COMMANDER
      ? await COMMANDER[command](parameters)
      : COMMANDER.default();
  } catch (err) {
    logService.printError(`Operation failed. ${err.message}`);
  }

  const currentDir = navigation.getCurrentDir();
  logService.printSecondary(`You are currently in ${currentDir}`);
};

export default { execute };

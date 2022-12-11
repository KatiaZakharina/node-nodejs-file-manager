import logService from './log.service.js';
import { helper } from '../commands/helper.js';
import navigation from '../commands/navigation.js';

class Executor {
  commander = {
    help: helper,
    up: navigation.up,
    cd: navigation.cd,
    ls: navigation.ls,
    // cat: readFile,
    // add: addFile,
    // rn: renameFile,
    // cp: copyFile,
    // mv: moveFile,
    // rm: deleteFile,
    // os: os,
    // hash: hash,
    // compress: compress,
    // decompress: decompress,
    default: () => logService.printError(`Invalid input!`),
  };

  execute(commandList) {
    try {
      const [command, ...parameters] = commandList;

      command in this.commander
        ? this.commander[command](parameters)
        : this.commander.default();
    } catch (err) {
      logService.printError('Operation failed. ' + err.message);
    }

    const currentDir = navigation.getCurrentDir();
    logService.printSecondary(`You are currently in ${currentDir}`);
  }
}

export default new Executor();

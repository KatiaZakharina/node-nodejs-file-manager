import logService from '../service/log.service.js';

class Executor {
  commander = {
    help: help,
    up: up,
    cd: cd,
    ls: list,
    cat: readFile,
    add: addFile,
    rn: renameFile,
    cp: copyFile,
    mv: moveFile,
    rm: deleteFile,
    os: os,
    hash: hash,
    compress: compress,
    decompress: decompress,
    default: () => logService.printError(`Invalid input! Try again :)`),
  };

  execute(commandList) {
    const [command, ...parameters] = commandList;

    command in this.commander
      ? this.commander[command](parameters)
      : this.commander.default();
  }
}

export default new Executor();

import description from '../commands/description.js';
import logService from '../service/log.service.js';

class Executor {
  commander = new Map();
  constructor() {
    this.commander.set(['up', 'cd', 'ls'], () => console.log('navigation'));
    this.commander.set(['cat', 'add', 'rn', 'cp', 'mv', 'rm'], () =>
      console.log('fs')
    );
    this.commander.set(['os'], () => console.log('os'));
    this.commander.set(['hash'], () => console.log('hash'));
    this.commander.set(['compress', 'decompress'], () => console.log('zip'));
  }

  execute(commandList) {
    const [command, ...parameters] = commandList;
    console.log(command);

    if (!Object.keys(description).includes(command)) {
      logService.printError('Invalid input');
    }

    for (const [commands, executor] of this.commander) {
      if (commands.includes(command)) {
        executor(parameters);
      }
    }
  }
}

export default new Executor();

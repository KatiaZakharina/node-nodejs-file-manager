import { EOL, cpus, homedir, userInfo, arch } from 'os';

import logService from '../service/log.service.js';

export const os = async (command) => {
    if (command.length > 1) {
      throw new Error('Invalid command arguments!');
    }

    switch (command[0]) {
      case '--EOL': {
        logService.printPrimary('EOL: ' + JSON.stringify(EOL));
        break;
      }
      case '--cpus': {
        logService.printPrimary('Number of CPU cores: ' + cpus().length);
        console.table(cpus());
        break;
      }
      case '--homedir': {
        logService.printPrimary('Homedir: ' + homedir());
        break;
      }
      case '--username': {
        logService.printPrimary('Username: ' + userInfo().username);
        break;
      }
      case '--architecture': {
        logService.printPrimary('Architecture: ' + arch());
        break;
      }

      default:
        logService.printPrimary(`Invalid command arguments! Try again :)`);
    }
};

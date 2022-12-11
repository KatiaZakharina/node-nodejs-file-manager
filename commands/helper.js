import logService from '../service/log.service.js';
import description from './description.js';

const helper = (command) => {
  if (!command.length) {
    for (const command in description) {
      logService.printPrimary(`${command} ${description[command]}\n`);
    }
    return;
  }
  command in description
    ? logService.printPrimary(`${command} ${description[command]}`)
    : logService.printPrimary(
        `${command} is not a File Manager command. See 'help'.`
      );
};

export default helper;
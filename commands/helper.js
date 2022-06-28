import logService from '../service/log.service';
import description from './description.js';

export const helper = (command) => {
  command in description
    ? description[command]
    : logService.printSecondary(
        `${command} is not a File Manager command. See 'help'.`
      );
};

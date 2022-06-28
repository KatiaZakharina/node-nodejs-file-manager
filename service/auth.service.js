import logService from './log.service.js';

export const logIn = (args) => {
  if (!isAuthorized(args)) {
    throw Error(
      'You should set your name. To run this app use **npm run start -- --username=[YOUR_NAME]**'
    );
  } else {
    logService.printSuccess(`Welcome to the File Manager, ${args.username}!`);

    process.on('SIGINT', () => {
      logService.printPrimary(
        `Thank you for using File Manager, ${args.username}!`
      );
      process.exit();
    });
  }
};

const isAuthorized = (args) => {
  return 'username' in args;
};

import logService from './log.service.js';

const logIn = (args) => {
  if (!isAuthorized(args)) {
    throw Error(
      'You should set your name. To run this app use **npm run start -- --username=[YOUR_NAME]**'
    );
  } else {
    logService.printSuccess(`Welcome to the File Manager, ${args.username}!`);
  }
};

const terminateSession = (rl, username) => {
  rl.pause();
  logService.printPrimary(
    `Thank you for using File Manager, ${username}, goodbye!`
  );
  process.exit();
};

const isAuthorized = (args) => 'username' in args;

export default { logIn, terminateSession };

#!/usr/bin/env node

import { getArgs } from './helpers/getArgs.js';
import { getCurrentDir } from './helpers/getCurrentDir.js';
import logService from './service/log.service.js';

const isAuthorized = (args) => {
  return 'username' in args;
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (!isAuthorized(args)) {
    logService.printWarning(
      'You should set your name. To run this app use **npm run start -- --username=[YOUR_NAME]**'
    );
    return;
  } else {
    logService.printSuccess(`Welcome to the File Manager, ${args.username}!`);

    process.on('SIGINT', () => {
      logService.printPrimary(
        `Thank you for using File Manager, ${args.username}!`
      );
      process.exit();
    });
  }

  logService.printSecondary(
    `You are currently in ${getCurrentDir(import.meta.url)}`
  );
};

initCLI();

// npm run start -- --username=Katia

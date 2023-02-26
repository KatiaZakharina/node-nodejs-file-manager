#!/usr/bin/env node

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import { getArgs } from './helpers/getArgs.js';
import authService from './service/auth.service.js';
import logService from './service/log.service.js';
import executorService from './service/executor.service.js';

import { completer } from './commands/completer.js';
import navigation from './commands/navigation.js';

const initCLI = async () => {
  const args = getArgs(process.argv.slice(2));

  try {
    authService.logIn(args);
  } catch (error) {
    logService.printWarning(error.message);
    return;
  }

  const currentDir = navigation.setCurrentDir(navigation.getHomeDir());
  logService.printSecondary(`You are currently in ${currentDir}`);

  const rl = readline.createInterface({ input, output, completer });

  rl.on('SIGINT', () => {
    authService.terminateSession(rl, args.username);
  });

  rl.on('line', async (input) => {
    const inputArray = input.split(' ');

    if (inputArray[0] === '.exit') {
      authService.terminateSession(rl, args.username);
    }

    await executorService.execute(inputArray);
  });
};

initCLI();

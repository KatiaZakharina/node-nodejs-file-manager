#!/usr/bin/env node

import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import { getArgs } from './helpers/getArgs.js';
import { getCurrentDir } from './helpers/getCurrentDir.js';
import { logIn } from './service/auth.service.js';
import { completer } from './commands/completer.js';
import logService from './service/log.service.js';
import executorService from './helpers/executor.service.js';

const initCLI = async () => {
  const args = getArgs(process.argv.slice(2));

  try {
    logIn(args);
  } catch (error) {
    logService.printWarning(error.message);
    return;
  }

  logService.printSecondary(
    `You are currently in ${getCurrentDir(import.meta.url)}`
  );

  const rl = readline.createInterface({ input, output, completer });

  rl.on('SIGINT', () => {
    rl.pause();
    logService.printPrimary(
      `Thank you for using File Manager, ${args.username}!`
    );
    process.exit();
  });

  rl.on('line', async (input) => {
    const inputArray = input.split(' ');
    executorService.execute(inputArray);

    logService.printSecondary(
      `You are currently in ${getCurrentDir(import.meta.url)}`
    );
  });
};

initCLI();

// npm run start -- --username=Katia

const COLORS = {
  fg: {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
  },
  bg: {
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
  },
};

const printSuccess = (message) => {
  console.log(COLORS.fg.green, message);
};

const printError = (message) => {
  console.log(COLORS.fg.red, message);
};

const printWarning = (message) => {
  console.log(COLORS.fg.yellow, message);
};

const printPrimary = (message) => {
  console.log(COLORS.fg.cyan, message);
};

const printSecondary = (message) => {
  console.log(COLORS.fg.magenta, message);
};

export default {
  printSuccess,
  printError,
  printWarning,
  printPrimary,
  printSecondary
};

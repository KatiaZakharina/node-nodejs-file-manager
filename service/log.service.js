class logService {
  colors = {
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

  printSuccess(message) {
    console.log(this.colors.fg.green, message);
  }

  printError(message) {
    console.log(this.colors.fg.red, message);
  }

  printWarning(message) {
    console.log(this.colors.fg.yellow, message);
  }

  printPrimary(message) {
    console.log(this.colors.fg.cyan, message); 
  }

  printSecondary(message) {
    console.log(this.colors.fg.magenta, message); 
  }
}

export default new logService();

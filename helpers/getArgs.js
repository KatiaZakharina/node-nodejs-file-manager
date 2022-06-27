export const getArgs = (argv) => {
  const args = argv.slice(2);

  return args.reduce((acc, curr) => {
    if (curr.startsWith('--')) {
      const command = curr.slice(2);

      let key, value;

      if (command.includes('=')) {
        [key, ...value] = command.split('=');
        value = value.join('='); //in case when value contains '='
      } else {
        key = command;
        value = true;
      }

      acc[key] = value;
    }
    return acc;
  }, {});
};

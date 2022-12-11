import description from './description.js';

export const completer = (line)=> {
  const commandList = Object.keys(description);
  const hits = commandList.filter((c) => c.startsWith(line));

  return [hits.length ? hits : commandList, line];
}

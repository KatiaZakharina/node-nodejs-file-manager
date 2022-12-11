import { cwd, chdir } from 'node:process';
import os from 'os';
import { join, isAbsolute } from 'path';
import { readdir, lstat } from 'fs/promises';

const getHomeDir = () => os.homedir();

const getCurrentDir = () => cwd();

const setCurrentDir = (currentDir) => {
  chdir(currentDir);

  return getCurrentDir();
};

const up = () => {
  chdir('..');
};

const cd = ([path]) => {
  const currentDir = getCurrentDir();

  if (!path) {
    throw new Error('Invalid command arguments!');
  }

  if (isAbsolute(path)) {
    chdir(join(path));
  } else {
    chdir(join(currentDir, path));
  }
};

const list = async () => {
  const currentDir = getCurrentDir();
  let files = await readdir(currentDir);

  files = await Promise.all(
    files.map(async (file) => {
      const filepath = join(currentDir, file);
      const stat = await lstat(filepath);
      const type = stat.isFile() ? 'file' : 'directory';

      return { Name: file, Type: type };
    })
  );

  console.table(files);
};

export default {
  up,
  cd,
  list,
  getHomeDir,
  getCurrentDir,
  setCurrentDir,
};

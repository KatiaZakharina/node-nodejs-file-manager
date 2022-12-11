import fsService from '../service/fs.service.js';
import logService from '../service/log.service.js';

const readFile = async ([path]) => {
  const file = await fsService.read(path);
  logService.printPrimary(file);
};

const addFile = ([path]) => {
  fsService.create(path);
};

const renameFile = ([oldFile, newFile]) => {
  fsService.rename(oldFile, newFile);
};

const copyFile = () => {};
const moveFile = () => {};

const deleteFile = ([path]) => {
  fsService.remove(path);
};

export default {
  readFile,
  addFile,
  renameFile,
  copyFile,
  moveFile,
  deleteFile,
};

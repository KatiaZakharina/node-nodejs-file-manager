import fsService from '../service/fs.service.js';
import logService from '../service/log.service.js';

const readFile = async ([path]) => {
  const file = await fsService.read(path);
  logService.printPrimary(file);
};

const addFile = async ([path]) => {
  await fsService.create(path);
};

const renameFile = async ([oldFile, newFile]) => {
  await fsService.rename(oldFile, newFile);
};

const copyFile = async ([source, destinationDir]) => {
  await fsService.copy(source, destinationDir)
};

const moveFile = async ([source, destinationDir]) => {
  await fsService.copy(source, destinationDir)
  await fsService.remove(source);
};

const deleteFile = async ([path]) => {
  await fsService.remove(path);
};

export default {
  readFile,
  addFile,
  renameFile,
  copyFile,
  moveFile,
  deleteFile,
};

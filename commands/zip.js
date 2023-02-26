import fs from 'fs';
import zlib from 'zlib';

import logService from '../service/log.service.js';

const compress = ([filePath, archivePath]) => {
  const r = fs.createReadStream(filePath);
  const z = zlib.createGzip();
  const w = fs.createWriteStream(archivePath);

  r.on('error', (error) => {
    logService.printError(`Operation failed. ${error.message}`);
  });
  w.on('error', (error) => {
    logService.printError(`Operation failed. ${error.message}`);
  });

  r.pipe(z).pipe(w);
};

const decompress = ([archivePath, filePath]) => {
  const r = fs.createReadStream(archivePath);
  const z = zlib.createGunzip();
  const w = fs.createWriteStream(filePath);

  r.on('error', (error) => {
    logService.printError(`Operation failed. ${error.message}`);
  });
  w.on('error', (error) => {
    logService.printError(`Operation failed. ${error.message}`);
  });

  r.pipe(z).pipe(w);
};

export default {
  compress,
  decompress,
};

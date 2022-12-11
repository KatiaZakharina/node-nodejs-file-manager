import fs from 'fs';
import zlib from 'zlib';


const compress = ([filePath, archivePath]) => {
    const r = fs.createReadStream(filePath);
    const z = zlib.createGzip();
    const w = fs.createWriteStream(archivePath);
    r.pipe(z).pipe(w);
};

const decompress = ([archivePath, filePath]) => {
  const r = fs.createReadStream(archivePath);
  const z = zlib.createGunzip();
  const w = fs.createWriteStream(filePath);
  r.pipe(z).pipe(w);
};

export default {
  compress,
  decompress,
};

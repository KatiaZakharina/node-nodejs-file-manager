import crypto from 'crypto';

import fsService from '../service/fs.service.js';
import logService from '../service/log.service.js';

export const calculateHash = async ([path]) => {
  const file = await fsService.read(path);

  const hash = crypto.createHash('sha256').update(file).digest('hex');
  logService.printPrimary(hash);
};

export default { calculateHash}
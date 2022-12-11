import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getCurrentDir = (metaUrl) => {
  return dirname(fileURLToPath(metaUrl));
};

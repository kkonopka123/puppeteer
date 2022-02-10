import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { puppeteerDirname } from './compat.js';

export const rootDirname = dirname(dirname(dirname(puppeteerDirname)));
export const packageVersion = JSON.parse(
  readFileSync(join(rootDirname, 'package.json'), { encoding: 'utf8' })
).version;

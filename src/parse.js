import { readFileSync } from 'node:fs';
import { path } from 'node:path';

const parse = (file) => return JSON.parse(fs.readFileSync(path.resolve(file)));

export default parse;
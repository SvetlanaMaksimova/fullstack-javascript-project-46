import { readFileSync } from 'fs';
import path from 'path';

const parse = (file) => JSON.parse(readFileSync(path.resolve(file), 'utf-8'));

export default parse;

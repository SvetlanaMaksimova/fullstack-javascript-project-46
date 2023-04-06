import { readFileSync } from 'fs';
import path from 'path';

const parse = (filePath) => JSON.parse(readFileSync(path.resolve(filePath), 'utf-8'));

export default parse;

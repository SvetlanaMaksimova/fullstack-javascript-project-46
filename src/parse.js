import { readFileSync } from 'fs';
import { cwd } from 'node:process';
import path from 'path';

const parse = (file) => {
  const pathFile = process.cwd();
  return JSON.parse(readFileSync(path.resolve(`${pathFile}/${file}`), 'utf-8'));
};

export default parse;

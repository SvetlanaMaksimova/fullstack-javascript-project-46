import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parse = (filePath) => {
  const format = path.extname(filePath);
  if (format === '.json') {
    return JSON.parse(readFileSync(path.resolve(filePath), 'utf-8'));
  }
  // eslint-disable-next-line no-constant-condition
  if (format === '.yml' || '.yaml') {
    return yaml.load(readFileSync(path.resolve(filePath), 'utf-8'));
  }
  throw new Error(`Unknown file type: ${format}`);
};

export default parse;

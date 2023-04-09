import { readFileSync } from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

const parse = (filePath) => {
  const formatFile = path.extname(filePath);
  if (formatFile === '.json') {
    return JSON.parse(readFileSync(path.resolve(filePath), 'utf-8'));
  }
  // eslint-disable-next-line no-constant-condition
  if (formatFile === '.yml' || '.yaml') {
    return yaml.load(readFileSync(path.resolve(filePath), 'utf-8'));
  }
  throw new Error(`Unknown file type: ${formatFile}`);
};

export default parse;

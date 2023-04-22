import { readFileSync } from 'fs';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

const parse = (data, fileExtension) => {
  // const formatFile = path.extname(filePath);
  switch (fileExtension) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
      return yaml.load(data);
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown file type: ${fileExtension}`);
  }
};

export default parse;

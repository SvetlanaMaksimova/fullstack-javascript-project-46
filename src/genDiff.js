import { readFileSync } from 'fs';
import path from 'path';
import parse from './parse.js';
import getCompare from './compare.js';
import styleOfDiff from './formatter/index.js';

const getExtension = (filepath) => path.extname(filepath);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const readFilepath1 = readFileSync(path.resolve(filepath1), 'utf-8');
  const readFilepath2 = readFileSync(path.resolve(filepath2), 'utf-8');
  const obj1 = parse(readFilepath1, getExtension(filepath1));
  const obj2 = parse(readFilepath2, getExtension(filepath2));
  const compareObj = getCompare(obj1, obj2);
  return styleOfDiff(compareObj, format);
};

export default genDiff;

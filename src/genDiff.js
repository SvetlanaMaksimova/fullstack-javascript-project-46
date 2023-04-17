import parse from './parse.js';
import getCompare from './compare.js';
import styleOfDiff from './formatter/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);
  const compareObj = getCompare(obj1, obj2);
  return styleOfDiff(compareObj, format);
};

export default genDiff;

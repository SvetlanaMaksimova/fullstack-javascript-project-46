import parse from './parse.js';
import getCompare from './compare.js';
import getStingifyResult from './formatter/stylish.js';
import getPlainResult from './formatter/plain.js'

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);
  const compareObj = getCompare(obj1, obj2);
  // eslint-disable-next-line default-case
  switch (format) {
    case 'stylish':
      return getStingifyResult(compareObj);
    case 'plain':
      return getPlainResult(compareObj);
  }
};

export default genDiff;

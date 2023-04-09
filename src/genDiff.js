import parse from './parse.js';
import getCompare from './compare.js';
import getStingifyResult from './formatter.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);
  const compareObj = getCompare(obj1, obj2);
  return getStingifyResult(compareObj);
};

// const file1 = '../__fixtures__/file1.yaml';
// const file2 = '../__fixtures__/file2.yaml';
//
// console.log(genDiff(file1, file2));

export default genDiff;

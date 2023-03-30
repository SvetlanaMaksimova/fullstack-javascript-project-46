import parse from './parse.js';
import getCompare from './compare.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);

  return  compare(obj1, obj2);
};


const file1 = '../__fixtures__/file1.json';
const file2 = '../__fixtures__/file2.json';

console.log(genDiff(file1, file2));

export default genDiff;

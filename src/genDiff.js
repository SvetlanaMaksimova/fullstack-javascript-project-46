import parse from './parse.js';
//import compare  from './compare';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);

  return [obj1, obj2];
};

export default genDiff;

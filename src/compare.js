import _ from 'lodash';

const getSortedKeys = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const allKeys = _.union(keys1, keys2);
  const sortedAllKeys = _.sortBy(allKeys);

  return sortedAllKeys;
};

const getCompare = (obj1, obj2) => {
  const keys = getSortedKeys(obj1, obj2);
  const compareObj = keys.map((key) => {
    // if (_.has(obj1, key) && obj1[key] === obj2[key]) {
    //   return {
    //     key,
    //     obj1: obj1[key],
    //     obj2: obj2[key],
    //     type: 'unchanged',
    //   };
    // }
    if (!_.has(obj1, key)) {
      return {
        key,
        obj1: obj1[key],
        obj2: obj2[key],
        type: 'add',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        key,
        obj1: obj1[key],
        obj2: obj2[key],
        type: 'delete',
      };
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return {
        key,
        children: getCompare(obj1[key], obj2[key]),
        type: 'object',
      };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key,
        obj1: obj1[key],
        obj2: obj2[key],
        type: 'changed',
      };
    }
    return {
      key,
      obj1: obj1[key],
      obj2: obj2[key],
      type: 'unchanged',
    };
  });

  return compareObj;
};

export default getCompare;

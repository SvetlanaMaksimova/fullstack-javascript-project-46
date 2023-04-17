import _ from 'lodash';

const getSortedKeys = (obj1, obj2) => {
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const allKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(allKeys);
  return sortedKeys;
};

const getCompare = (obj1, obj2) => {
  const keys = getSortedKeys(obj1, obj2);
  const compareObj = keys.map((key) => {
    if (!_.has(obj1, key)) {
      return {
        type: 'add',
        key,
        value: obj2[key],
      };
    }
    if (!_.has(obj2, key)) {
      return {
        type: 'delete',
        key,
        value: obj1[key],
      };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        type: 'object',
        key,
        children: getCompare(obj1[key], obj2[key]),
      };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        type: 'changed',
        key,
        valueObj1: obj1[key],
        valueObj2: obj2[key],

      };
    }
    return {
      type: 'unchanged',
      key,
      value: obj1[key],
    };
  });

  return compareObj;
};

export default getCompare;

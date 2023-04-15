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
        key,
        value: obj2[key],
        type: 'add',
      };
    }
    if (!_.has(obj2, key)) {
      return {
        key,
        value: obj1[key],
        type: 'delete',
      };
    }
    if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
      return {
        key,
        children: getCompare(obj1[key], obj2[key]),
        type: 'object',
      };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key,
        valueObj1: obj1[key],
        valueObj2: obj2[key],
        type: 'changed',
      };
    }
    return {
      key,
      value: obj1[key],
      type: 'unchanged',
    };
  });

  return compareObj;
};

export default getCompare;

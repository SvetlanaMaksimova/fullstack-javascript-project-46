import _ from 'lodash';

const stringify = (item) => {
  if (!_.isObject(item)) {
    if (typeof item === 'string') {
      return `'${item}'`;
    }
    return item;
  }
  return '[complex value]';
};

const buildDiffPlain = (ast, pathLog = '') => {
  const result = ast.flatMap((item) => {
    const {
      key, value, type, children, valueObj1, valueObj2,
    } = item;
    switch (type) {
      case 'object':
        return buildDiffPlain(children, `${pathLog.concat(key)}.`);
      case 'add':
        return `Property '${pathLog}${key}' was added with value: ${stringify(
          value,
        )}`;
      case 'delete':
        return `Property '${pathLog}${key}' was removed`;
      case 'changed':
        return `Property '${pathLog}${key}' was updated. From ${stringify(
          valueObj1,
        )} to ${stringify(valueObj2)}`;
      default:
        return null;
    }
  });
  return result.filter((line) => line !== null).join('\n');
};

const plain = (ast) => `${buildDiffPlain(ast)}`;

export default plain;

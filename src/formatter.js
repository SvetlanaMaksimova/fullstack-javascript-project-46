const getStingifyResult = (obj) => {
  const stringify = obj.map((item) => {
    if (item.type === 'unchanged') {
      return `    ${item.key}: ${item.obj1}`;
    }
    if (item.type === 'add') {
      return `  + ${item.key}: ${item.obj2}`;
    }
    if (item.type === 'changed') {
      return `  - ${item.key}: ${item.obj1}\n  + ${item.key}: ${item.obj2}`;
    }
    if (item.type === 'delete') {
      return `  - ${item.key}: ${item.obj1}`;
    }
  });
  return `{\n${stringify.join('\n')}\n}`;
};

export default getStingifyResult;

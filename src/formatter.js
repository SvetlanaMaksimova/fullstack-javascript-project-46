const getStingifyResult = (obj) => {
  const stringify = obj.map((item) => {
    if (item.type === 'unchanged') {
      return `  ${item.key}: ${item.obj1}
  `;
    }
    if (item.type === 'add') {
      return `+ ${item.key}: ${item.obj2}
  `;
    }
    if (item.type === 'changed') {
      return `- ${item.key}: ${item.obj1}
  + ${item.key}: ${item.obj2}
  `;
    }
    if (item.type === 'delete') {
      return `- ${item.key}: ${item.obj1}
  `;
    }
  });
  return `{ 
  ${stringify.join('')}
}`;
};

export default getStingifyResult;

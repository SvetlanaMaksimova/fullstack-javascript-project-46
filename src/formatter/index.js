import stylish from './stylish.js';
import plain from './plain.js';

export default (ast, type = 'stylish') => {
  switch (type) {
    case 'stylish':
      return stylish(ast);
    case 'plain':
      return plain(ast);
    default:
      throw new Error(`Unknown format type: ${type}`);
  }
};

import genDiff from '../src/genDiff.js';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

const filepath1 = '__fixtures__/file1.json';
const filepath2 = '__fixtures__/file2.json';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultDiff = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('testing diff of two json file', () => {
  expect(genDiff(filepath1, filepath2)).toEqual(resultDiff);
});

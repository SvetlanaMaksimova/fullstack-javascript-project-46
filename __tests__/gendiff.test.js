// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import genDiff from '../src/genDiff.js';

const filepath1 = '__fixtures__/file1.json';
const filepath2 = '__fixtures__/file2.json';

const filepathAbs1 = '/Users/mac/WebstormProjects/fullstack-javascript-project-46/__fixtures__/file1.json';
const filepathAbs2 = '/Users/mac/WebstormProjects/fullstack-javascript-project-46/__fixtures__/file2.json';

const filepathYaml1 = '__fixtures__/file1.yaml';
const filepathYaml2 = '__fixtures__/file2.yaml';

const filepathAbsYaml1 = '/Users/mac/WebstormProjects/fullstack-javascript-project-46/__fixtures__/file1.yaml';
const filepathAbsYaml2 = '/Users/mac/WebstormProjects/fullstack-javascript-project-46/__fixtures__/file2.yaml';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
//
// const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
//
// const jsonFilepath1 = getFixturePath('file1.json');
// const jsonFilepath2 = getFixturePath('file2.json');
//
// const yamlFilepath1 = getFixturePath('file1.yaml');
// const yamlFilepath2 = getFixturePath('file2.yaml');

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
  expect(genDiff(filepathAbs1, filepathAbs2)).toEqual(resultDiff);
});

test('testing diff of two yaml file', () => {
  expect(genDiff(filepathYaml1, filepathYaml2)).toEqual(resultDiff);
  expect(genDiff(filepathAbsYaml1, filepathAbsYaml2)).toEqual(resultDiff);
});

// test('testing diff of two json file', () => {
//   expect(genDiff(jsonFilepath1, jsonFilepath2)).toEqual(resultDiff);
// });
//
// test('testing diff of two yaml file', () => {
//   expect(genDiff(yamlFilepath1, yamlFilepath2)).toEqual(resultDiff);
// });

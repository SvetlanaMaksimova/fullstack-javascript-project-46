// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/genDiff.js';

const jsonFilepath1 = '__fixtures__/file1.json';
const jsonFilepath2 = '__fixtures__/file2.json';

const filepathYaml1 = '__fixtures__/file1.yaml';
const filepathYaml2 = '__fixtures__/file2.yaml';

const stylishExample = fs.readFileSync('./__fixtures__/stylish', 'utf-8');

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

test('testing diff of two json file', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2)).toEqual(stylishExample);
});

test('testing diff of two yaml file', () => {
  expect(genDiff(filepathYaml1, filepathYaml2)).toEqual(stylishExample);
});

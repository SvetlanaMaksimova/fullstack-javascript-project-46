import fs from 'fs';
import genDiff from '../src/genDiff.js';

const jsonFilepath1 = '__fixtures__/file1.json';
const jsonFilepath2 = '__fixtures__/file2.json';

const filepathYaml1 = '__fixtures__/file1.yaml';
const filepathYaml2 = '__fixtures__/file2.yaml';

const stylishExample = fs.readFileSync('./__fixtures__/stylish', 'utf-8');
const plainExample = fs.readFileSync('./__fixtures__/plain', 'utf-8');
const jsonExample = fs.readFileSync('./__fixtures__/json', 'utf-8');

test('stylish testing', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2)).toEqual(stylishExample);

  expect(genDiff(filepathYaml1, filepathYaml2)).toEqual(stylishExample);

  expect(genDiff(jsonFilepath1, jsonFilepath2, 'stylish')).toEqual(stylishExample);

  expect(genDiff(filepathYaml1, filepathYaml2, 'stylish')).toEqual(stylishExample);
});

test('plain testing', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'plain')).toEqual(plainExample);

  expect(genDiff(filepathYaml1, filepathYaml2, 'plain')).toEqual(plainExample);
});

test('json testing', () => {
  expect(genDiff(jsonFilepath1, jsonFilepath2, 'json')).toEqual(jsonExample);

  expect(genDiff(filepathYaml1, filepathYaml2, 'json')).toEqual(jsonExample);
});

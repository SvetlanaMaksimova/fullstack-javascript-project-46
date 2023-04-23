import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultStylish = fs.readFileSync(getFixturePath('stylish'), 'utf-8');
const resultPlain = fs.readFileSync(getFixturePath('plain'), 'utf-8');
const resultJson = fs.readFileSync(getFixturePath('json'), 'utf-8');

const extensions = ['yml', 'json', 'yaml'];

test.each(extensions)('Checking are formats output', (ext) => {
  const fileBefore = getFixturePath(`file1.${ext}`);
  const fileAfter = getFixturePath(`file2.${ext}`);
  expect(genDiff(fileBefore, fileAfter, 'stylish')).toEqual(resultStylish);
  expect(genDiff(fileBefore, fileAfter, 'plain')).toEqual(resultPlain);
  expect(genDiff(fileBefore, fileAfter, 'json')).toEqual(resultJson);
  expect(genDiff(fileBefore, fileAfter)).toEqual(resultStylish);
});

#!/usr/bin/env node

import { program } from 'commander/esm.mjs';
import genDiff from '../src/genDiff.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, type) => console.log(genDiff(filepath1, filepath2, type)));

program.parse();

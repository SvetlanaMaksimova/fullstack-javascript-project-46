#!/usr/bin/env node

import { program } from "commander/esm.mjs";
import { readFileSync } from 'node:fs';

program
		.description('Compares two configuration files and shows a difference.')
		.version('0.1.0')
		.arguments('<filepath1> <filepath2>')
		.option('-f, --format <type>', 'output format')
		.action()

program.parse();
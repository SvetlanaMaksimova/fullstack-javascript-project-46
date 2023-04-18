### Hexlet tests and linter status:
[![Actions Status](https://github.com/SvetlanaMaksimova/fullstack-javascript-project-46/workflows/hexlet-check/badge.svg)](https://github.com/SvetlanaMaksimova/fullstack-javascript-project-46/actions)

[![ESLint](https://github.com/SvetlanaMaksimova/fullstack-javascript-project-46/actions/workflows/eslint.yml/badge.svg?event=push)](https://github.com/SvetlanaMaksimova/fullstack-javascript-project-46/actions/workflows/eslint.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/e75b6287f1bb35326a27/maintainability)](https://codeclimate.com/github/SvetlanaMaksimova/fullstack-javascript-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/e75b6287f1bb35326a27/test_coverage)](https://codeclimate.com/github/SvetlanaMaksimova/fullstack-javascript-project-46/test_coverage)

# Difference computator

## Installation
To install clone this project in a folder:
```sh
git clone git@github.com:SvetlanaMaksimova/fullstack-javascript-project-46.git
```
Install the dependencies and devDependencies.

```sh
make install

make link
```

###The utility works with three formats: json, yaml, yml.

The utility accepts an absolute or relative path to the file.

> **A relative path** is a link that points to a file location on the page where the link is located.
>
> **An absolute path** makes no assumptions about your current location in relation to the location of the file or directory it's describing.


**For example:**

```sh
file1.json - relative path

/home/username/projectname/__fixtures__/file1.json - absolute path
```

### Options

Three output formats availiable in the application.

- stylish
- plain
- json

The default format is 'stylish'.

Examples of usage

```sh
gendiff -f plain file1.json file2.json 
gendiff -f json file1.json file2.json 
```

**The output of differences is shown in three formats:**
### Stylish
[![asciicast](https://asciinema.org/a/BlSkFiP0yVlYQC8sbPK0FvnBB.svg)](https://asciinema.org/a/BlSkFiP0yVlYQC8sbPK0FvnBB)
### Plain
[![asciicast](https://asciinema.org/a/mYL9bHKYWXxBNzzFvZP7bTuSc.svg)](https://asciinema.org/a/mYL9bHKYWXxBNzzFvZP7bTuSc)
### JSON
[![asciicast](https://asciinema.org/a/HMbQPmwcQcXxgOhBMlECCrchs.svg)](https://asciinema.org/a/HMbQPmwcQcXxgOhBMlECCrchs)



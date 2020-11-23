# cura-cli

[![Build Status](https://travis-ci.com/andrewmolyuk/cura-cli.svg?branch=main)](https://travis-ci.com/andrewmolyuk/cura-cli)
[![Dependencies Status](https://badges.depfu.com/badges/6421ee5c228f096514ff4ee2caa6797b/overview.svg)](https://depfu.com/github/andrewmolyuk/cura-cli?project_id=17819)
[![Codacy Badge](https://img.shields.io/codacy/grade/bfd777cd99f24d76bcfc9be99291f1cb)](https://www.codacy.com/gh/andrewmolyuk/cura-cli/dashboard?utm_source=github.com&utm_medium=referral&utm_content=andrewmolyuk/cura-cli&utm_campaign=Badge_Grade)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/andrewmolyuk/cura-cli)](https://codeclimate.com/github/andrewmolyuk/cura-cli/maintainability)
[![NPM](https://img.shields.io/npm/v/cura-cli)](http://npm.im/cura-cli)
[![NPM downloads](https://img.shields.io/npm/dw/cura-cli)](http://npm.im/cura-cli)

Additional tools to Cura and CuraEngine.

==The project is under indie development, any suggestion and contribution greatly appreciated.==

## Requirements

- To use cura-cli you must install Node.js and the npm command line interface using either a Node Version Manager or a Node installer. Download and install apropriate installer from [Node.js website](https://nodejs.org/en/download/) or use [Node Version Manager](https://nodejs.org/en/download/package-manager/#nvm).

- Download and install the latest version of [Ultimaker Cura](https://ultimaker.com/software/ultimaker-cura).

## Installation

```sh
npm -g install cura-cli
```

## Usage

After installation the cura-cli tool will be available to you. It is the entrypoint for all the functionality mentioned bellow.

You can see the commands and options available by using the --help flag. The help command is also the best way to see the aliased or shorthand versions of common commands and options.

```sh
cura-cli --help
```

### Commands

#### cura version

Return version of Ultimate Cura application.

```sh
cura-cli cura version
```

#### cura location

Return location of Ultimate Cura application.

```sh
cura-cli cura location
```

## License

This project is licensed under the [MIT License](https://github.com/andrewmolyuk/cura-cli/blob/main/LICENSE).

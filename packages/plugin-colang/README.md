@voxable/plugin-bespoken
========================

Colang plugin for the Voxable CLI.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@voxable/plugin-bespoken.svg)](https://npmjs.org/package/@voxable/plugin-colang)
[![Downloads/week](https://img.shields.io/npm/dw/@voxable/plugin-bespoken.svg)](https://npmjs.org/package/@voxable/colang-bespoken)
[![License](https://img.shields.io/npm/l/@voxable/plugin-bespoken.svg)](https://github.com/voxable/plugin-colang/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage

Given a PROJECT ID, it will dump a colang description that can be used directly in the playground. 

<!-- usage -->
```sh-session
$ npm install -g @voxable/plugin-colang
$ voxable COMMAND
running command...
$ voxable (-v|--version|version)
@voxable/plugin-colang/0.1.5 darwin-x64 node-v15.12.0
$ voxable --help [COMMAND]
USAGE
  $ voxable COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`voxable colang:export PROJECT_ID`](#voxable-bespokentransform-project_id)

## `voxable colang:export PROJECT_ID`

export a Voxable project into Colang

```
USAGE
  $ voxable colang:export PROJECT_ID

ARGUMENTS
  PROJECT_ID  project ID

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ voxable colang:export PROJECT_ID
```

<!-- commandsstop -->

@voxable/plugin-bespoken
========================

Bespoken plugin for the Voxable CLI.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@voxable/plugin-bespoken.svg)](https://npmjs.org/package/@voxable/plugin-bespoken)
[![Downloads/week](https://img.shields.io/npm/dw/@voxable/plugin-bespoken.svg)](https://npmjs.org/package/@voxable/plugin-bespoken)
[![License](https://img.shields.io/npm/l/@voxable/plugin-bespoken.svg)](https://github.com/voxable/plugin-bespoken/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @voxable/plugin-bespoken
$ voxable COMMAND
running command...
$ voxable (-v|--version|version)
@voxable/plugin-bespoken/0.1.0 darwin-x64 node-v15.12.0
$ voxable --help [COMMAND]
USAGE
  $ voxable COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`voxable bespoken:transform PROJECT_ID`](#voxable-bespokentransform-project_id)

## `voxable bespoken:transform PROJECT_ID`

transform a Voxable project into Bespoken tests

```
USAGE
  $ voxable bespoken:transform PROJECT_ID

ARGUMENTS
  PROJECT_ID  project ID

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ voxable bespoken:transform PROJECT_ID
```

_See code: [src/commands/bespoken/transform.ts](https://github.com/voxable/cli/blob/v0.1.0/src/commands/bespoken/transform.ts)_
<!-- commandsstop -->

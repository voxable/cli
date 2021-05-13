@voxable/cli
============

A client for the Voxable conversation design platform&#39;s API.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@voxable/cli.svg)](https://npmjs.org/package/@voxable/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@voxable/cli.svg)](https://npmjs.org/package/@voxable/cli)
[![License](https://img.shields.io/npm/l/@voxable/cli.svg)](https://github.com/voxable/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @voxable/cli
$ voxable COMMAND
running command...
$ voxable (-v|--version|version)
@voxable/cli/0.0.0 darwin-x64 node-v15.12.0
$ voxable --help [COMMAND]
USAGE
  $ voxable COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`voxable hello [FILE]`](#voxable-hello-file)
* [`voxable help [COMMAND]`](#voxable-help-command)

## `voxable hello [FILE]`

describe the command here

```
USAGE
  $ voxable hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ voxable hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/voxable/cli/blob/v0.0.0/src/commands/hello.ts)_

## `voxable help [COMMAND]`

display help for voxable

```
USAGE
  $ voxable help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->

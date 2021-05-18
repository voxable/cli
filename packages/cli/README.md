@voxable/cli
============

A client for the Voxable conversation design platform&#39;s API. 🪄

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
@voxable/cli/0.1.5 darwin-x64 node-v15.12.0
$ voxable --help [COMMAND]
USAGE
  $ voxable COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`voxable plugins`](#voxable-plugins)
* [`voxable plugins:inspect PLUGIN...`](#voxable-pluginsinspect-plugin)
* [`voxable plugins:install PLUGIN...`](#voxable-pluginsinstall-plugin)
* [`voxable plugins:link PLUGIN`](#voxable-pluginslink-plugin)
* [`voxable plugins:uninstall PLUGIN...`](#voxable-pluginsuninstall-plugin)
* [`voxable plugins:update`](#voxable-pluginsupdate)
* [`voxable projects:export PROJECT_ID`](#voxable-projectsexport-project_id)
* [`voxable projects:list`](#voxable-projectslist)

## `voxable plugins`

list installed plugins

```
USAGE
  $ voxable plugins

OPTIONS
  --core  show core plugins

EXAMPLE
  $ voxable plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/index.ts)_

## `voxable plugins:inspect PLUGIN...`

displays installation properties of a plugin

```
USAGE
  $ voxable plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] plugin to inspect

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

EXAMPLE
  $ voxable plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/inspect.ts)_

## `voxable plugins:install PLUGIN...`

installs a plugin into the CLI

```
USAGE
  $ voxable plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  plugin to install

OPTIONS
  -f, --force    yarn install with force flag
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command 
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in 
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ voxable plugins:add

EXAMPLES
  $ voxable plugins:install myplugin 
  $ voxable plugins:install https://github.com/someuser/someplugin
  $ voxable plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/install.ts)_

## `voxable plugins:link PLUGIN`

links a plugin into the CLI for development

```
USAGE
  $ voxable plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

DESCRIPTION
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello' 
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLE
  $ voxable plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/link.ts)_

## `voxable plugins:uninstall PLUGIN...`

removes a plugin from the CLI

```
USAGE
  $ voxable plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

OPTIONS
  -h, --help     show CLI help
  -v, --verbose

ALIASES
  $ voxable plugins:unlink
  $ voxable plugins:remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/uninstall.ts)_

## `voxable plugins:update`

update installed plugins

```
USAGE
  $ voxable plugins:update

OPTIONS
  -h, --help     show CLI help
  -v, --verbose
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v1.10.0/src/commands/plugins/update.ts)_

## `voxable projects:export PROJECT_ID`

export a project

```
USAGE
  $ voxable projects:export PROJECT_ID

ARGUMENTS
  PROJECT_ID  project ID

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ voxable projects:export PROJECT_ID
```

_See code: [src/commands/projects/export.ts](https://github.com/voxable/cli/blob/v0.1.5/src/commands/projects/export.ts)_

## `voxable projects:list`

list all projects

```
USAGE
  $ voxable projects:list

OPTIONS
  -j, --json  Output results in JSON. When not specified, renders in human-readable format.

EXAMPLE
  $ voxable projects:list
```

_See code: [src/commands/projects/list.ts](https://github.com/voxable/cli/blob/v0.1.5/src/commands/projects/list.ts)_
<!-- commandsstop -->

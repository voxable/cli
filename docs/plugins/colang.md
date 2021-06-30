# Voxable CLI Plugin: Colang

[Colang](https://colang.ai/) is a modeling language for conversational AI. With the Voxable CLI Colang plugin, you can transform your Voxable designs into Colang implementations.

## Installing the plugin

```sh-session
voxable plugins:install colang
```

## Usage

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
## Commands
<!-- commands -->
* [`voxable colang:transform PROJECT_ID`](#voxable-colangtransform-project_id)

### `voxable colang:transform PROJECT_ID`

export and transform a Voxable project into Colang

```
USAGE
  $ voxable colang:transform PROJECT_ID

ARGUMENTS
  PROJECT_ID  project ID

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ voxable colang:transform PROJECT_ID
```

<!-- commandsstop -->




# Voxable CLI Plugin: Bespoken

[Bespoken](https://bespoken.io/) provides automated testing and monitoring tools for voice & IVR experiences. With the Voxable CLI Bespoken plugin, you can transform your Voxable designs directly into Bespoken automated tests.

::: warning
**This plugin is still under active development.** Currently, it only supports simple use cases. If you encounter any problems, please [get in touch!](../contributing/community.md)
:::

## Usage

<!-- usage -->
```sh-session
$ npm install -g @voxable/plugin-bespoken
$ voxable COMMAND
running command...
$ voxable (-v|--version|version)
@voxable/plugin-bespoken/0.1.5 darwin-x64 node-v15.12.0
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

_See code: [src/commands/bespoken/transform.ts](https://github.com/voxable/cli/blob/v0.1.5/src/commands/bespoken/transform.ts)_
<!-- commandsstop -->

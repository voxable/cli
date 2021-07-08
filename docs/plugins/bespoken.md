# Voxable CLI Plugin: Bespoken

![The Bespoken llama logo.](/images/bespoken/bespoken-logo.png)

[Bespoken](https://bespoken.io/) provides automated testing and monitoring tools for voice & IVR experiences. With the Voxable CLI Bespoken plugin, you can transform your Voxable designs directly into [Bespoken automated end-to-end tests](https://read.bespoken.io/end-to-end/getting-started/):

Here, we see a transformation of a simple Voxable project:

```sh-session
$ voxable bespoken:transform [PROJECT_ID]
📦 Exporting project...... done
---
configuration:
  locales: en-US
  voiceId: Joey

---
- test: Launch request only
- "Alexa, open Simple Project.": hello I am simple project you can say a task or cancel to quit how can I help you today

---
- test: Launch request, add task
- "Alexa, open Simple Project.": hello I am simple project you can say a task or cancel to quit how can I help you today
- "Add a task.": sorry I'm not going to do that actually goodbye

---
- test: Launch request, add task
- "Alexa, open Simple Project.": hello I am simple project you can say a task or cancel to quit how can I help you today
- "Cancel.": goodbye
```
Adding the above to a Bespoken end-to-end test would result in the following test run, if run against [the Simple Project example from the API documentation](../api/):

![An example of passing Bespoken tests.](/images/bespoken/bespoken-example.png)

::: warning
**This plugin is still under active development.** Currently, it only supports simple use cases. If you encounter any problems, please [get in touch!](../contributing/community.md)
:::

## Installing the plugin

```sh-session
voxable plugins:install bespoken
```

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
## Commands
<!-- commands -->
* [`voxable bespoken:transform PROJECT_ID`](#voxable-bespokentransform-project_id)

### `voxable bespoken:transform PROJECT_ID`

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

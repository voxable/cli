# Contributing

## Getting Started

This CLI is a monorepo managed with [Lerna](https://lerna.js.org/). Check out the main repo and bootstrap it to get started with local development:

```console
cd voxable-cli
yarn
lerna bootstrap --scope @voxable/cli
lerna bootstrap --scope @voxable/client
lerna bootstrap --scope @voxable/command
lerna bootstrap --scope @voxable/plugin-bespoken
lerna bootstrap
```

At this point, you can run the CLI from the root directory of the project with: `yarn run cli`

[In order to simplify local development](https://github.com/microsoft/TypeScript/issues/21423#issuecomment-706719739), project files are compiled into JavaScript in `lib` alongside their TypeScript sources.

## Documentation

This documentation site is built with [Vuepress](https://vuepress.org). It is housed within the `docs` directory of [the open source Voxable CLI](https://github.com/voxable).

To run the docs locally, run the following from the root directory of that project:

```console
yarn run docs:dev
```

## Developing plugins

To use a plugin with your local checkout of the CLI, link the plugin to your project, then install it:

```sh-session
$ yarn run cli plugins:link packages/plugin-bespoken
```

This will create a file `~/.local/share/@voxable/cli/package.json` with the following content:

```json
{
  "private": true,
  "oclif": {
    "schema": 1,
    "plugins": [
      {
        "type": "link",
        "name": "@voxable/cli",
        "root": "/Users/someuser/git/voxable-cli/packages/cli"
      }
    ]
  },
  "dependencies": {}
}
```

Edit the `name` and `root` of the member of the `plugins` array with a name of `@voxable/cli` to instead point at your plugin:

```json
{
  "private": true,
  "oclif": {
    "schema": 1,
    "plugins": [
      {
        "type": "link",
        "name": "@voxable/plugin-bespoken",
        "root": "/Users/someuser/git/voxable-cli/packages/plugin-bespoken"
      }
    ]
  },
  "dependencies": {}
}
```

### Creating a new plugin

1. `npx oclif plugin newplugin`
2. `cd mynewplugin`
3. `yarn add @oclif/plugin-plugins @oclif/plugin-help`
4. Copy an existing plugin's `package.json` and edit appropriately.
5. From the root directory, run `lerna bootstrap --scope @voxable/plugin-newplugin`
5. Follow the `plugin:link` steps in the section above for your new plugin.
6. Run `yarn run cli plugins` to ensure you see your new plugin listed.


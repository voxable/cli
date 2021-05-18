# Voxable CLI 🪄

This is the monorepo for the Voxable CLI and its associated libraries.

## Getting started

```console
cd voxable-cli
yarn
lerna bootstrap --scope @voxable/cli
lerna bootstrap --scope @voxable/client
lerna bootstrap --scope @voxable/command
lerna bootstrap --scope @voxable/plugin-bespoken
lerna bootstrap
```

## Creating a new plugin

1. `npx oclif plugin mynewplugin`
2. `cd mynewplugin`
3. `yarn add @oclif/plugin-plugins @oclif/plugin-help`
4. Copy `oclif.scope` and `oclif.dependencies` from an existing plugin's `package.json`.
5. From your local checkout of this repo, run `./bin/run plugins:link ../mynewplugin`
6. Run `./bin/run plugins` to ensure you see your new plugin listed.

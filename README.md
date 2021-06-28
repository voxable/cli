# Voxable CLI 🪄

This is a client for the [Voxable](https://voxable.io) conversation design platform&#39;s API. You can access your conversational AI data and transform it into useful formats.

## Getting Started

```sh-session
$ npm install -g @voxable/cli
$ voxable --help
```

See [our API documentation](http://help.voxable.io/en/articles/5231902-using-the-voxable-api) for more information on setting up the CLI.

## Contributing

This CLI is a monorepo managed with Lerna. Check out the main repo and bootstrap it to get started with local development:

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

### Creating a new plugin

1. `npx oclif plugin mynewplugin`
2. `cd mynewplugin`
3. `yarn add @oclif/plugin-plugins @oclif/plugin-help`
4. Copy `oclif.scope` and `oclif.dependencies` from an existing plugin's `package.json`.
5. From your local checkout of this repo, run `./bin/run plugins:link ../mynewplugin`
6. Run `./bin/run plugins` to ensure you see your new plugin listed.

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


# Releasing
This is the process for releasing updates to versions of the packages in this repository.

## Updating `CHANGELOG`
To update the `CHANGELOG` (be sure to replace `t0k3n` with your actual GitHub token):

```sh-session
$ export GITHUB_AUTH="t0k3n" && yarn run lerna-changelog
```

Commit the change to the `CHANGELOG`.

## Publishing new versions

```sh-session
$ lerna publish
```

This will walk you through the process of choosing new versions, then publishing them to `npm`.

## Create new releases on GitHub
Create new entries for each released package version in the `CHANGELOG`. The easiest way to do this is by choosing a tag without a release and clicking the "Edit tag" button to add a release title and description. Copy the appropriate `CHANGELOG` entries for each package to its release description.

# :gear: Available Plugins

Voxable CLI plugins extend the functionality of the command-line interface.

* The [Bespoken](./bespoken.md) plugin transforms your Voxable designs into automated tests.
* The [Colang](./colang.md) plugin transforms Voxable designs into a Colang specification ready for use in the Colang playground.

To install the Bespoken plugin, run the following command:
                
```sh-session
$ voxable plugins:install bespoken
```

This will allow you to export a Voxable project's data and transform it into [Bespoken tests](https://read.bespoken.io/end-to-end/getting-started/). 

## Creating plugins

You can [read about adding new Voxable CLI plugins](../contributing/README.md#creating-a-new-plugin)

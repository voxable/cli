# :gear: Available Plugins

Voxable CLI plugins extend the functionality of the command-line interface.

* The [Bespoken](./bespoken.md) plugin transforms your Voxable designs into automated tests.
* The [Colang](./colang.md) plugin transforms Voxable designs into a Colang specification ready for use in the Colang playground.

To install the Bespoken plugin, run the following command:
                
```sh-session
$ voxable plugins:install bespoken
```

This will allow you to export a Voxable project's data and transform it into [Bespoken tests](https://read.bespoken.io/). Here, we see a transformation of a simple Voxable project:

```sh-session
$ voxable bespoken:transform [PROJECT_ID]
📦 Exporting project...... done
---
configuration:
locales: en-US

---

- test: Launch request, add task
- "Alexa, open Simple Project.":"Hello! I am Simple Project. You can say, \"Add a task,\" or \"cancel\" to quit. How can I help you today?"
- "Add a task.":"Sorry, I'm not going to do that, actually. Goodbye!"

- test: Launch request, add task
- "Alexa, open Simple Project.":"Hello! I am Simple Project. You can say, \"Add a task,\" or \"cancel\" to quit. How can I help you today?"
- "Cancel.":"Goodbye!"

- test: Launch request only
- "Alexa, open Simple Project.":"Hello! I am Simple Project. You can say, \"Add a task,\" or \"cancel\" to quit. How can I help you today?"
```

## Creating plugins

You can [read about adding new Voxable CLI plugins](../contributing/README.md#creating-a-new-plugin)

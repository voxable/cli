import Base from '@voxable/command'

import cli from 'cli-ux'

export default class Transform extends Base {
  static description = 'export a Voxable project into Colang'

  static examples = [
    '$ voxable colang:export PROJECT_ID',
  ]

  static args = [
    {
      name: 'project_id',
      required: true,
      description: 'project ID',
    },
  ]

  recordUserIntent(text) {
    if (this.userIntents.indexOf(text) === -1) {
      this.userIntents.push(text)
    }
  }

  /**
   * Converts a block into colang at the specified indentation level.
   * @param block
   * @param indentation
   */
  convertBlock(block: any, indentation: string): Array<string> {
    let lines: Array<string> = []

    // TODO: add support for contexts

    if (block.type == "BotMessage") {
      lines.push(indentation + `bot "${block.text}"`)

      // If we have more than one child, then we need to create branching with `where`
      if (block.children) {
        if (block.children.length === 1) {
          lines = lines.concat(this.convertBlock(block.children[0], indentation))
        } else {
          for (let i = 0; i < block.children.length; i++) {
            const prefix = (i == 0 ? "when " : "else when ")

            lines.push(indentation + prefix + `user "${block.children[i].text}"`)
            this.recordUserIntent(block.children[i].text)

            // go recursively and increase the indentation level
            if (block.children[i].children) {
              lines = lines.concat(this.convertBlock(block.children[i].children[0], indentation + "  "))
            } else {
              lines.push(indentation + "  continue")
            }
          }
        }
      }
    } else if (block.type == "UserMessage") {
      lines.push(indentation + `user "${block.text}"`)
      this.recordUserIntent(block.text)

      if (block.children) {
        if (block.children.length > 1) {
          throw Error("User message should have only one children!")
        }

        // Go recursively keeping the indentation
        if (block.children) {
          lines = lines.concat(this.convertBlock(block.children[0], indentation))
        }
      }
    } else {
      throw Error(`Unknown block type for: ${JSON.stringify(block)}`)
    }

    return lines
  }

  /**
   * Converts a project description, as given by the API, to a colang file.
   * @param project
   */
  convertToColang(project: any) {
    let lines = []

    // Here we gather all the distinct user intents
    this.userIntents = []

    for (let script of project.scripts) {
      // Use the script name as the name of the flow
      lines.push(`# ${script.title}`)
      lines.push(`${script.title.toLowerCase().replace(" ", "_")}:`)
      lines = lines.concat(this.convertBlock(script.blocks, "  "))
      lines.push("")
    }

    lines.push("# NLU")
    lines.push("")

    // Process the user intents also and generate default ones with only one example
    for (let text of this.userIntents) {
      if (text === null) {
        text = "null"
      }

      let intentName = text.toLowerCase().replace(/ /g, "_").replace(/[^a-zA-Z0-9_]/g, "")

      // Small tweaks to void conflict with builtin intents
      if (intentName === "yes") {
        intentName = "affirm"
      } else if (intentName === "no") {
        intentName = "deny"
      }

      lines.push(`define user ${intentName}`)
      lines.push(`  "${text}"`)
      lines.push("")
    }

    console.log("--------------------------------------------------------------")
    console.log(lines.join("\n"))
    console.log("--------------------------------------------------------------")
  }

  async run() {
    const {args} = this.parse(Transform)

    cli.action.start('📦 Exporting project into colang...')

    this.client?.exportProject(args.project_id)
    .then((response: { data: string | undefined }) => {
      this.convertToColang(response.data)
      cli.action.stop()
    }, (error: string | Error) => {
      this.error(error)
    })
  }
}

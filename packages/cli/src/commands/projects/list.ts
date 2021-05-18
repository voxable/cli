import Base from '@voxable/command'
import {flags} from '@oclif/command'
const Table = require('cli-table')
const chalk = require('chalk')

export default class ListProjects extends Base {
  static description = 'list all projects'

  static examples = [
    '$ voxable projects:list',
  ]

  static flags = {
    json: flags.boolean({
      char: 'j',
      description:
        'Output results in JSON. When not specified, renders in human-readable format.',
      required: false,
    }),
  }

  async run() {
    const {flags} = this.parse(ListProjects)

    return this.client?.listProjects()
    .then((response: { data: { projects: Array<{name: string, id:string}> } }) => {
      // Return JSON, if requested.
      if (flags.json) {
        this.log(JSON.stringify(response.data))
        this.exit(0)
      }

      const projects: Array<{name:string, id:string}> = response.data.projects

      const table = new Table({
        head: [
          `${chalk.green.bold('Name')}`,
          `${chalk.green.bold('URL')}`,
        ],
      })

      for (const project of projects) {
        if ({}.hasOwnProperty.call(project, 'name') && {}.hasOwnProperty.call(project, 'id')) {
          const url = 'https://voxable.design/projects/' + project.id

          table.push([project.name, url])
        }
      }

      this.log(table.toString())
      this.exit(0)
    }, (error: string | Error) => {
      this.error(error)
    })
  }
}

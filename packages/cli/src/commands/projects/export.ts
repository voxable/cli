import Base from '../../base'

import cli from 'cli-ux'
import {flags} from '@oclif/command'

export default class ExportProject extends Base {
  static description = 'export a project'

  static examples = [
    '$ voxable projects:export 3b2dcb09-e4d8-481a-8cc9-4fdc2bdb45f6',
  ]

  static args = [
    {
      name: 'project_id',
      required: true,
      description: 'project ID',
    },
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args} = this.parse(ExportProject)

    cli.action.start('📦 Exporting project...')

    this.fetch?.get(`projects/${args.project_id}/export`,
      {transformResponse: r => r},
    ).then(response => {
      cli.action.stop()

      this.log(response.data)
    }, error => {
      this.error(error)
    })
  }
}

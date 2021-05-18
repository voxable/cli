import Base from '@voxable/command'

import cli from 'cli-ux'

export default class ExportProject extends Base {
  static description = 'export a project'

  static examples = [
    '$ voxable projects:export PROJECT_ID',
  ]

  static args = [
    {
      name: 'project_id',
      required: true,
      description: 'project ID',
    },
  ]

  async run() {
    const {args} = this.parse(ExportProject)

    cli.action.start('📦 Exporting project...')

    this.client?.exportProject(args.project_id)
    .then((response: { data: string | undefined }) => {
      cli.action.stop()

      this.log(JSON.stringify(response.data))
    }, (error: string | Error) => {
      this.error(error)
    })
  }
}

import Base from '../../base'

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

  async run() {
    const {args} = this.parse(ExportProject)

    const response = this.fetch.get(`projects/${args.project_id}`,
      {transformResponse: r => r}
    ).then(response => {
      this.log(response.data)
    }, error => {
      this.error(error)
    })
  }
}

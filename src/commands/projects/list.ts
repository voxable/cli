import Base from '../../base'

export default class ListProjects extends Base {
  static description = 'list all projects'

  static examples = [
    '$ voxable projects:list',
  ]

  async run() {
    this.fetch.get('projects',
      {transformResponse: r => r}
    ).then(response => {
      this.log(response.data)
    }, error => {
      this.error(error)
    })
  }
}

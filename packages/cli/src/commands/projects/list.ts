import Base from '../../base'

export default class ListProjects extends Base {
  static description = 'list all projects'

  static examples = [
    '$ voxable projects:list',
  ]

  async run() {
    this.fetch.get('projects')
    .then((response: { data: string | undefined }) => {
      this.log(response.data)
    }, (error: string | Error) => {
      this.error(error)
    })
  }
}

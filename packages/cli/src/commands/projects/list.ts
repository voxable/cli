import Base from '../../base'

export default class ListProjects extends Base {
  static description = 'list all projects'

  static examples = [
    '$ voxable projects:list',
  ]

  async run() {
    return this.client?.listProjects()
    .then((response: { data: string | undefined }) => {
      this.log(JSON.stringify(response.data))
    }, (error: string | Error) => {
      this.error(error)
    })
  }
}

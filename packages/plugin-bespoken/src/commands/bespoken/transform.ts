import {Command, flags} from '@oclif/command'
import Base from '../../../../voxable-cli/src/base'

export default class Transform extends Base {
  static description = 'describe the command here'

  static examples = [
    '$ voxable bespoken:transform',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Transform)
    this.fetch?.get(`projects/${args.project_id}/export`,
      {transformResponse: r => r}
    ).then(response => {
      cli.action.stop()

      console.log(response.data.scripts)
    }, error => {
      this.error(error)
    })
  }
}

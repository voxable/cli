import Base from '@voxable/command'
import generate from '../../test-generator'

import cli from 'cli-ux'

export default class Transform extends Base {
  static description = 'transform a Voxable project into Bespoken tests'

  static examples = [
    '$ voxable bespoken:transform PROJECT_ID',
  ]

  static args = [
    {
      name: 'project_id',
      required: true,
      description: 'project ID',
    },
  ]

  async run() {
    const {args} = this.parse(Transform)

    cli.action.start('📦 Exporting project...')

    this.client?.exportProject(args.project_id)
    .then((response: { data: string | undefined }) => {
      const project = JSON.stringify(response.data)

      cli.action.stop()

      // Output tests.
      this.log(generate(project))
    }, (error: string | Error) => {
      this.error(error)
    })
  }
}

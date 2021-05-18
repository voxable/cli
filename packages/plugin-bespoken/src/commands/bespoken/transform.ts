import Base from '@voxable/command'

import cli from 'cli-ux'

export default class Transform extends Base {
  static description = 'transform a Voxable project into Bespoken tests'

  static examples = [
    '$ voxable bespoken:transform',
  ]

  async run() {
    const {args} = this.parse(Transform)

    this.client?.exportProject(args.project_id)
    .then((response: { data: string | undefined }) => {
      const project = JSON.stringify(response.data)

      cli.action.start('🏭 Generating Bespoken tests...')
    }, (error: string | Error) => {
      this.error(error)
    })
  }
}

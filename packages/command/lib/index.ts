import Command, {flags} from '@oclif/command'
// eslint-disable-next-line node/no-extraneous-require
const {cosmiconfigSync} = require('cosmiconfig')
import {CosmiconfigResult} from 'cosmiconfig/dist/types'

import Client from '@voxable/client'

export default abstract class extends Command {
  private configuration: CosmiconfigResult | undefined;

  // The `@voxable/client` API client.
  protected client: Client | undefined

  static flags: Record<string, any> = {
    help: flags.help({char: 'h'}),
  }

  async init() {
    const explorerSync = cosmiconfigSync('voxable')

    // Load configuration.
    this.configuration = explorerSync.search()
    const apiToken = this.configuration?.config.apiKey

    this.client = new Client(
      apiToken, this.configuration?.config.baseURL,
    )
  }
}

import Command from '@oclif/command'
import {CosmiconfigResult} from 'cosmiconfig/dist/types'
const {cosmiconfigSync} = require('cosmiconfig')
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Client from '@voxable/client'

export default abstract class extends Command {
  private configuration: CosmiconfigResult | undefined;

  // The `@voxable/client` API client.
  protected client: Client | undefined;

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

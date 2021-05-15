import Command from '@oclif/command'
import {CosmiconfigResult} from 'cosmiconfig/dist/types'
const {cosmiconfig, cosmiconfigSync} = require('cosmiconfig')
import {AxiosStatic} from 'axios'
import Client from '@voxable/client'

export default abstract class extends Command {
  private configuration: CosmiconfigResult | undefined;

  protected fetch: AxiosStatic;

  async init() {
    const explorerSync = cosmiconfigSync('voxable')

    // Load configuration.
    this.configuration = explorerSync.search()
    const apiToken = this.configuration?.config.apiKey

    this.fetch = Client.new({
      apiToken,
      baseURL: this.configuration?.config.baseURL,
    })
  }
}

import Command from '@oclif/command'
import {CosmiconfigResult} from 'cosmiconfig/dist/types'
const {cosmiconfig, cosmiconfigSync} = require('cosmiconfig')
const explorer = cosmiconfig('voxable')

export default abstract class extends Command {
  private configuration: CosmiconfigResult | undefined;

  async init() {
    const explorerSync = cosmiconfigSync('voxable')

    // Load configuration.
    this.configuration = explorerSync.search()
    this.apiKey = this.configuration.config.apiKey
  }
}

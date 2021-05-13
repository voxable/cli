import Command from '@oclif/command'
import {CosmiconfigResult} from 'cosmiconfig/dist/types'
const {cosmiconfig, cosmiconfigSync} = require('cosmiconfig')
import axios, {AxiosStatic} from 'axios'

export default abstract class extends Command {
  private configuration: CosmiconfigResult | undefined;

  private apiKey: any;

  private fetch: AxiosStatic | undefined;

  async init() {
    const explorerSync = cosmiconfigSync('voxable')

    // Load configuration.
    this.configuration = explorerSync.search()
    this.apiKey = this.configuration.config.apiKey

    // Configure API.
    axios.defaults.baseURL =
      this.configuration.config.baseURL ||
      'https://voxable.design/api/v1/'
    axios.defaults.headers.common = {Authorization: `Bearer ${this.apiKey}`}

    this.fetch = axios
  }
}

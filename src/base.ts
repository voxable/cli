import Command from '@oclif/command'
import {CosmiconfigResult} from 'cosmiconfig/dist/types'
const {cosmiconfig, cosmiconfigSync} = require('cosmiconfig')
import axios, {AxiosStatic} from 'axios'

export default abstract class extends Command {
  private configuration: CosmiconfigResult | undefined;

  private apiKey: any;

  protected fetch: AxiosStatic | undefined;

  async init() {
    const explorerSync = cosmiconfigSync('voxable')

    // Load configuration.
    this.configuration = explorerSync.search()
    this.apiKey = this.configuration?.config.apiKey

    // Configure API calls.
    axios.defaults.baseURL =
      this.configuration?.config.baseURL || 'https://api.voxable.design/v1/'
    axios.defaults.headers.common.Authorization = `Bearer ${this.apiKey}`
    axios.defaults.headers.common['User-Agent'] = '@voxable/cli'

    // Debug requests and responses if DEBUG=true
    if (process.env.DEBUG) {
      axios.interceptors.request.use(req => {
        console.log(req)
        return req
      }, error => Promise.reject(error))

      axios.interceptors.response.use(res => {
        console.log(res)
        return res
      }, error => Promise.reject(error))
    }

    this.fetch = axios
  }
}

import axios, {AxiosStatic, AxiosTransformer} from 'axios'

class Client {
  // fetch client
  private fetch: AxiosStatic | undefined

  /**
   * Create a new API client.
   *
   * @param apiToken -
   *   The Voxable API token.
   * @param baseUrl -
   *   The base API URL (optional, defaults to production API).
   */
  constructor(apiToken: string, baseUrl: string) {
    // Configure API calls.
    axios.defaults.baseURL = baseUrl || 'https://api.voxable.design/v1/'
    axios.defaults.headers.common.Authorization = `Bearer ${apiToken}`
    axios.defaults.headers.common['User-Agent'] = '@voxable/cli'

    // Add default transform.
    axios.defaults.transformRequest = [data => {
      // Do whatever you want here, for example headers.Authorization = `Bearer ${jwt}`
      return data
    }, ...(axios.defaults.transformRequest as AxiosTransformer[])]

    // Debug requests and responses if DEBUG=true
    if (process.env.DEBUG) {
      axios.interceptors.request.use(req => {
        console.error(req)
        return req
      }, error => Promise.reject(error))

      axios.interceptors.response.use(res => {
        console.error(res)
        return res
      }, error => Promise.reject(error))
    }

    this.fetch = axios
  }

  /**
   * Export an entire project's data.
   *
   * @param projectId -
   *   The ID of the project to export.
   *
   * @return - The project's data.
   */
  public async exportProject(projectId: string): Promise<any> {
    return this.fetch?.get(`projects/${projectId}/export`)
  }

  /**
   * @return - The list of projects accessible by this user.
   */
  public async listProjects(): Promise<any> {
    return this.fetch?.get('projects')
  }
}

export default Client

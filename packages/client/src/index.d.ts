declare class Client {
    private fetch;
    /**
     * Create a new API client.
     *
     * @param apiToken -
     *   The Voxable API token.
     * @param baseUrl -
     *   The base API URL (optional, defaults to production API).
     */
    constructor(apiToken: string, baseUrl: string);
    /**
     * Export an entire project's data.
     *
     * @param projectId -
     *   The ID of the project to export.
     *
     * @return - The project's data.
     */
    exportProject(projectId: string): Promise<any>;
    /**
     * @return - The list of projects accessible by this user.
     */
    listProjects(): Promise<any>;
}
export default Client;

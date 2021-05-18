"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Client {
    /**
     * Create a new API client.
     *
     * @param apiToken -
     *   The Voxable API token.
     * @param baseUrl -
     *   The base API URL (optional, defaults to production API).
     */
    constructor(apiToken, baseUrl) {
        // Configure API calls.
        axios_1.default.defaults.baseURL = baseUrl || 'https://api.voxable.design/v1/';
        axios_1.default.defaults.headers.common.Authorization = `Bearer ${apiToken}`;
        axios_1.default.defaults.headers.common['User-Agent'] = '@voxable/cli';
        // Add default transform.
        axios_1.default.defaults.transformRequest = [data => {
                // Do whatever you want here, for example headers.Authorization = `Bearer ${jwt}`
                return data;
            }, ...axios_1.default.defaults.transformRequest];
        // Debug requests and responses if DEBUG=true
        if (process.env.DEBUG) {
            axios_1.default.interceptors.request.use(req => {
                console.error(req);
                return req;
            }, error => Promise.reject(error));
            axios_1.default.interceptors.response.use(res => {
                console.error(res);
                return res;
            }, error => Promise.reject(error));
        }
        this.fetch = axios_1.default;
    }
    /**
     * Export an entire project's data.
     *
     * @param projectId -
     *   The ID of the project to export.
     *
     * @return - The project's data.
     */
    async exportProject(projectId) {
        var _a;
        return (_a = this.fetch) === null || _a === void 0 ? void 0 : _a.get(`projects/${projectId}/export`);
    }
    /**
     * @return - The list of projects accessible by this user.
     */
    async listProjects() {
        var _a;
        return (_a = this.fetch) === null || _a === void 0 ? void 0 : _a.get('projects');
    }
}
exports.default = Client;

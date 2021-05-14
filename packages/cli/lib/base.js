"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const { cosmiconfig, cosmiconfigSync } = require('cosmiconfig');
const axios_1 = require("axios");
class default_1 extends command_1.default {
    async init() {
        var _a, _b;
        const explorerSync = cosmiconfigSync('voxable');
        // Load configuration.
        this.configuration = explorerSync.search();
        this.apiKey = (_a = this.configuration) === null || _a === void 0 ? void 0 : _a.config.apiKey;
        // Configure API calls.
        axios_1.default.defaults.baseURL =
            ((_b = this.configuration) === null || _b === void 0 ? void 0 : _b.config.baseURL) || 'https://api.voxable.design/v1/';
        axios_1.default.defaults.headers.common.Authorization = `Bearer ${this.apiKey}`;
        axios_1.default.defaults.headers.common['User-Agent'] = '@voxable/cli';
        // Debug requests and responses if DEBUG=true
        if (process.env.DEBUG) {
            axios_1.default.interceptors.request.use(req => {
                console.log(req);
                return req;
            }, error => Promise.reject(error));
            axios_1.default.interceptors.response.use(res => {
                console.log(res);
                return res;
            }, error => Promise.reject(error));
        }
        this.fetch = axios_1.default;
    }
}
exports.default = default_1;

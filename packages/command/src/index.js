"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
// eslint-disable-next-line node/no-extraneous-require
const { cosmiconfigSync } = require('cosmiconfig');
const client_1 = require("@voxable/client");
class default_1 extends command_1.default {
    async init() {
        var _a, _b;
        const explorerSync = cosmiconfigSync('voxable');
        // Load configuration.
        this.configuration = explorerSync.search();
        const apiToken = (_a = this.configuration) === null || _a === void 0 ? void 0 : _a.config.apiKey;
        this.client = new client_1.default(apiToken, (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.config.baseURL);
    }
}
exports.default = default_1;
default_1.flags = {
    help: command_1.flags.help({ char: 'h' }),
};
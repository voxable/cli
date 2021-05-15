"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class ListProjects extends base_1.default {
    async run() {
        var _a;
        return (_a = this.client) === null || _a === void 0 ? void 0 : _a.listProjects().then((response) => {
            this.log(response.data);
        }, (error) => {
            this.error(error);
        });
    }
}
exports.default = ListProjects;
ListProjects.description = 'list all projects';
ListProjects.examples = [
    '$ voxable projects:list',
];

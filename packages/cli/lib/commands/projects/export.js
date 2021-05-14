"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const cli_ux_1 = require("cli-ux");
class ExportProject extends base_1.default {
    async run() {
        var _a;
        const { args } = this.parse(ExportProject);
        cli_ux_1.default.action.start('📦 Exporting project...');
        (_a = this.fetch) === null || _a === void 0 ? void 0 : _a.get(`projects/${args.project_id}/export`, { transformResponse: r => r }).then(response => {
            cli_ux_1.default.action.stop();
            this.log(response.data);
        }, error => {
            this.error(error);
        });
    }
}
exports.default = ExportProject;
ExportProject.description = 'export a project';
ExportProject.examples = [
    '$ voxable projects:export 3b2dcb09-e4d8-481a-8cc9-4fdc2bdb45f6',
];
ExportProject.args = [
    {
        name: 'project_id',
        required: true,
        description: 'project ID',
    },
];
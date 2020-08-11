"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ids_json_1 = __importDefault(require("./data/ids.json"));
const colors_json_1 = __importDefault(require("./data/colors.json"));
const invites_json_1 = __importDefault(require("./data/invites.json"));
const links_json_1 = __importDefault(require("./data/links.json"));
const redirs_json_1 = __importDefault(require("./data/redirs.json"));
exports.default = {
    ids: ids_json_1.default,
    colors: colors_json_1.default,
    invites: invites_json_1.default,
    urls: links_json_1.default,
    redirects: redirs_json_1.default,
};

const colors = require("./data/colors.json");
const ids = require("./data/ids.json");
const invites = require("./data/invites.json");
const urls = require("./data/links.json");
const redirects = require("./data/redirs.json");


module.exports = function () {
    return {
        colors: colors,
        ids: ids,
        invites: invites,
        urls: urls,
        redirects: redirects,
    }
};
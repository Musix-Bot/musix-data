const colors = require("./data/colors.json");
const ids = require("./data/ids.json");
const urls = require("./data/links.json");


module.exports = function () {
    return {
        colors: colors,
        ids: ids,
        urls: urls,
    }
};
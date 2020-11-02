const colors = require("./data/colors.json");
const ids = require("./data/ids.json");
const urls = require("./data/links.json");


module.exports = {
    colors: colors,
    ids: ids,
    urls: urls,
    isEqual: function (obj1, obj2) {
        const propnames = Object.getOwnPropertyNames(obj1);

        if (propnames.length != Object.getOwnPropertyNames(obj2).length) return false;

        for (const propname of propnames) {
            if (obj1[propname] !== obj2[propname]) return false;
        }

        return true;
    }
};
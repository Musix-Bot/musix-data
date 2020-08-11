import ids from "./data/ids.json";
import colors from "./data/colors.json";
import invites from "./data/invites.json";
import redirects from "./data/redirs.json";

interface IDictionary {
  [index: string]: string;
}

const colorsData = colors as IDictionary;

export default {
  ids,
  colorsData,
  invites,
  redirects,
};

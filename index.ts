interface IDictionary {
  [index: string]: string;
}

const colors = {
  "607266889537945605": "#b50002",
  "727669741618987139": "#2780cd",
  "649252971690983446": "#cd7427",
  "607813867124555797": "27CD3F",
} as IDictionary;

import ids from "./data/ids.json";
import invites from "./data/invites.json";
import redirects from "./data/redirs.json";
export default {
  ids,
  colors,
  invites,
  redirects,
};

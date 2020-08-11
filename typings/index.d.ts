import { colors, ids, ids, ids, colors, redirects, invites } from "..";

declare module "musix-data" {
  /*interface colors {
    [index: string]: string;
  }

  interface ids {
    testServer: string;
    primary_test_channel: string;
    secondary_test_channel: string;
    devId: string;
  }

  interface invites {
    releases: string;
    supportServer: string;
  }

  interface redirs {
    callback: string;
  }*/

  interface data {}

  exports.ids = ids;
  exports.colors = colors;
  exports.redirects = redirects;
  exports.invites = invites;
  export = data;
}

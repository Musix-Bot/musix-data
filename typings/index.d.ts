import { colors } from "..";

declare module "musix-data" {
  interface colors {
    607266889537945605: string;
    727669741618987139: string;
    649252971690983446: string;
    607813867124555797: string;
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
  }

  interface data {
    colors: colors;
    ids: ids;
    invites: invites;
    redirects: redirs;
  }

  export = data;
}

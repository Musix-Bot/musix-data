declare module "musix-data" {
  interface colors {
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
  }
  type data = {
    colors: colors;
    ids: ids;
    invites: invites;
    redirects: redirs;
  };
  export = data;
}

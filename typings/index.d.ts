declare module "musix-data" {
  type colors = {
    [index: string]: string;
  };
  type ids = {
    testServer: string;
    primary_test_channel: string;
    secondary_test_channel: string;
    devId: string;
  };
  type invites = {
    releases: string;
    supportServer: string;
  };
  type redirs = {
    callback: string;
  };

  type returnData = {
    colors: colors;
    ids: ids;
    invites: invites;
    redirects: redirs;
  };
  function data(): returnData;

  export = data;
}

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
  type urls = {
    discord_invite: string;
    invite: string;
    invite2: string;
    inviteBeta: string;
  };
  type redirs = {
    releases: string;
    discord: string;
    panel: string;
  };

  type returnData = {
    colors: colors;
    ids: ids;
    invites: invites;
    urls: urls;
    redirects: redirs;
  };
  function data(): returnData;

  export = data;
}

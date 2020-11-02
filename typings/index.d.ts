declare module "musix-data" {
  type colors = {
    [index: string]: string;
  };
  type dev = {
    id: string;
    priority: boolean;
  };
  type ids = {
    devAllowedServers: Array<string>;
    devAllowedChannels: Array<string>;
    devAllowedRoles: Array<string>;
    devs: Array<dev>;
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

  const data: returnData;

  export = data;
}

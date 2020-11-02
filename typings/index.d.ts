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

  type urls = {
    discord_invite: string;
    invite: string;
    invite2: string;
    inviteBeta: string;
    releases: string;
    supportServer: string;
    discord: string;
    panel: string;
  };

  type returnData = {
    colors: colors;
    ids: ids;
    urls: urls;
    isEqual: function(): boolean;
  };

  const data: returnData;

  export = data;
}

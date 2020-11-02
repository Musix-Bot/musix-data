declare module "musix-data" {
  namespace data {
    interface colors {
      [index: string]: string;
    }
    interface dev {
      id: string;
      priority: boolean;
    }
    interface ids {
      devAllowedServers: Array<string>;
      devAllowedChannels: Array<string>;
      devAllowedRoles: Array<string>;
      devs: Array<dev>;
    }

    interface urls {
      discord_invite: string;
      invite: string;
      invite2: string;
      inviteBeta: string;
      releases: string;
      supportServer: string;
      discord: string;
      panel: string;
    }

    function isEqual(obj: object, obj: object): boolean;

    const data: {
      colors: colors;
      ids: ids;
      urls: urls;
      isEqual: isEqual;
    };
  }

  export = data;
}

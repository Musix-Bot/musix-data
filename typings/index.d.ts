declare module "musix-data" {
  namespace data {
    interface ids {
      devs: Array<{
        id: string;
        priority: boolean;
      }>;
    }

    interface urls {
      discord_invite: string;
      invite: string;
      invite2: string;
      webInviteBeta: string;
      webInvite: string;
      webInvite2: string;
      inviteBeta: string;
      releases: string;
      supportServer: string;
      discord: string;
      panel: string;
    }

    function isEqual(obj1: object, obj2: object): boolean;

    const colors: {
      HEX: {
        [index: string]: string
      }, RGB: { [index: string]: { red: number, green: number, blue: number } }
    };
    const ids: ids;
    const urls: urls;
  }

  export = data;
}

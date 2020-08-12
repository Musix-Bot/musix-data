declare module "musix-data" {
  namespace data {
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
  }
  /*type data = {
    colors: colors;
    ids: ids;
    invites: invites;
    redirects: redirs;
  };*/
  export = data;
}

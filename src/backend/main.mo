import Text "mo:core/Text";

actor {
  public type AdminInfo = {
    adminName : Text;
    platformName : Text;
  };

  let adminInfo : AdminInfo = {
    adminName = "Atif Mehmood";
    platformName = "PakizaaRishta.pk";
  };

  public query ({ caller }) func getAdminInfo() : async AdminInfo {
    adminInfo;
  };
};

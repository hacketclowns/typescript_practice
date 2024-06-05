var Users;
(function (Users) {
    Users["NormalUser"] = "primary";
    Users["PayedUser"] = "payed";
    Users["AdminUser"] = "admin";
    Users["MegaUser"] = "mega";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser);
if (myUser === Users.AdminUser) {
    console.log("is admin user.");
}
// lets imagine we have a table 

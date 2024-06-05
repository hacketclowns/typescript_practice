enum Users {
    NormalUser = "primary",
    PayedUser = "payed",
    AdminUser = "admin",
    MegaUser = "mega",
}

const myUser = Users.AdminUser;

console.log(myUser);

if (myUser === Users.AdminUser) {
    console.log("is admin user.");
}

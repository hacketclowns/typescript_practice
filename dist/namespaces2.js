var DataBaseEntity;
(function (DataBaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DataBaseEntity.User = User;
    var myUser = new User("Daniel");
    console.log(myUser);
})(DataBaseEntity || (DataBaseEntity = {}));
var myOtherUser = new DataBaseEntity.User("Daniel 2");
console.log(myOtherUser);
/// <reference path="namespaces.ts" />
var myOtherUser2 = new DataBaseEntity.User("Daniel 3");
console.log(myOtherUser2);
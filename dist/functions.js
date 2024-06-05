"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Arrow function
var sayHi = function (name) {
    console.log("Hello ".concat(name));
};
sayHi("Dear Daniel");
function sayGoodBye(name) {
    console.log("Bye ".concat(name, ", we are almost done"));
}
sayGoodBye("Dear Daniel");
function show(name) {
    console.log("HEllo!");
    return 1;
}
function show2(response) {
    console.log("Hello ".concat(response.name, " with id ").concat(response.id));
    return 1;
}
var response2 = {
    id: 1,
    name: "Daniel",
    charge: "Developer",
    number: 4,
};
show2(response2);
function show3(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log("Id name sent is ".concat(name));
    return 1;
}
var response3 = {
    id: 2,
    name: "Daniel Ticona",
    charge: "Developer",
    number: 1,
};
show3(response3);
function show4(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log("Id name sent is ".concat(name, " from Show4"));
    console.log("Other data", other);
    return 1;
}
var response4 = {
    id: 2,
    name: "Daniel Ticona",
    charge: "Developer",
    number: 1,
};
show4(response4);

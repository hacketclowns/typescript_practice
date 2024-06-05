"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    name: "kevin",
    code: "01",
    charge: 1,
    description: "Hola",
    sayHello: function () {
        // saveToken()
        // takePicture()
        var persons = [1, 2, 3, 4];
        persons.map(function (p) { return p.toFixed(1); });
        return "Hi";
    }
};
var secondPerson = {
    name: "",
    code: "",
    charge: 0,
    sayHello: function () { return "Hi 2"; },
};
(_a = secondPerson.description) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase();
secondPerson.description = "Say hi";

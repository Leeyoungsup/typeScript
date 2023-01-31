"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var head_1 = require("next/head");
var Home_module_css_1 = require("@/styles/Home.module.css");
var User = /** @class */ (function () {
    function User(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.getNickName = function () {
        console.log(this.nickname);
    };
    return Player;
}(User));
var nico = new Player('asd', 'asd1', '12333');
nico.getNickName();
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "nico.getFullName")),
        React.createElement("main", { className: Home_module_css_1["default"].main },
            React.createElement("div", { className: Home_module_css_1["default"].description },
                React.createElement("p", null)))));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map

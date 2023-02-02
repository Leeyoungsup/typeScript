"use strict";
exports.__esModule = true;
var NavBar_1 = require("@/components/NavBar");
var head_1 = require("next/head");
function Potato() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "about")),
        React.createElement(NavBar_1["default"], null),
        React.createElement("main", null,
            React.createElement("h1", null, "about"))));
}
exports["default"] = Potato;

//# sourceMappingURL=about.js.map

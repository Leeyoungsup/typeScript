"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var react_1 = require("react");
var NavBar_1 = require("@/components/NavBar");
function Home() {
    var _a = react_1.useState(0), counter = _a[0], setCounter = _a[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Home")),
        React.createElement("div", null,
            React.createElement(NavBar_1["default"], null),
            React.createElement("h1", null, "Hello"))));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map

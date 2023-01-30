"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Home_module_css_1 = require("@/styles/Home.module.css");
var numbers = [1, 2, 3, 4];
var player = ['nico', 1, true];
var a = [1, 2, 3, 4];
var b = true;
a + b;
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Create Next App")),
        React.createElement("main", { className: Home_module_css_1["default"].main },
            React.createElement("div", { className: Home_module_css_1["default"].description },
                React.createElement("p", null, a + b)))));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map

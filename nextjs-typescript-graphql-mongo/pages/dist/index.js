"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Home_module_css_1 = require("@/styles/Home.module.css");
var push = function (config) {
    if (typeof config === 'string')
        console.log(config);
    else {
        console.log(config.path, config.state);
    }
};
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Create Next App")),
        React.createElement("main", { className: Home_module_css_1["default"].main },
            React.createElement("div", { className: Home_module_css_1["default"].description },
                React.createElement("p", null, "sdas")))));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map

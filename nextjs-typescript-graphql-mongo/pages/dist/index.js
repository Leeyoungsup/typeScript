"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var Home_module_css_1 = require("@/styles/Home.module.css");
var superPrint = function (arr) { return arr[0]; };
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(['asd', 1, 2, true]);
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Create Next App")),
        React.createElement("main", { className: Home_module_css_1["default"].main },
            React.createElement("div", { className: Home_module_css_1["default"].description },
                React.createElement("p", null, superPrint(['asd', 1, 2, true]))))));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map

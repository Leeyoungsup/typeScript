"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var google_1 = require("@next/font/google");
var Home_module_css_1 = require("@/styles/Home.module.css");
var inter = google_1.Inter({ subsets: ['latin'] });
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Create Next App")),
        React.createElement("main", { className: Home_module_css_1["default"].main },
            React.createElement("div", { className: Home_module_css_1["default"].description },
                React.createElement("p", null, "wrwr")))));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map

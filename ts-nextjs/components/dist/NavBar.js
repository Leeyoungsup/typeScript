"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var router_1 = require("next/router");
function NavBar() {
    var router = router_1.useRouter();
    return (React.createElement("nav", null,
        React.createElement(link_1["default"], { href: "/" },
            React.createElement("h1", { className: router.pathname === '/' ? 'active' : '' }, "Home")),
        React.createElement(link_1["default"], { href: "/about" },
            React.createElement("h1", { className: router.pathname === '/' ? 'active' : '' }, "About")),
        React.createElement("style", { jsx: true }, "\n        nav {\n          background-color: tomato;\n        }\n        h1 {\n          text-decoration: none;\n        }\n        .active {\n          color: yellow;\n        }\n      ")));
}
exports["default"] = NavBar;

//# sourceMappingURL=NavBar.js.map

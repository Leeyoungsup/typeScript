"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var router_1 = require("next/router");
function NavBar() {
    var router = router_1.useRouter();
    return (React.createElement("nav", null,
        React.createElement(link_1["default"], { href: "/" },
            React.createElement("h1", { style: { color: router.pathname === '/' ? 'red' : 'blue' } }, "Home")),
        React.createElement(link_1["default"], { href: "/about" },
            React.createElement("h1", { style: { color: router.pathname === '/about' ? 'red' : 'blue' } }, "about"))));
}
exports["default"] = NavBar;

//# sourceMappingURL=NavBar.js.map

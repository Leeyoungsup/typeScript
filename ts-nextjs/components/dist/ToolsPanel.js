"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("@apollo/client");
var CodeMutations_1 = require("../graphql/mutations/CodeMutations");
function ToolsPanel(_a) {
    var code = _a.code;
    var _b = client_1.useMutation(CodeMutations_1.EXUCUTE_CODE, {
        variables: { code: code }
    }), submitCode = _b[0], data = _b[1].data;
    var runHandler = function (event) {
        event.preventDefault();
        submitCode();
    };
    return (react_1["default"].createElement("div", { className: "border-2 border-back flex justify-end" },
        react_1["default"].createElement("div", { className: "p-2 pr-10" },
            react_1["default"].createElement("button", { onClick: runHandler, type: "button", className: "text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800" },
                react_1["default"].createElement("svg", { "aria-hidden": "true", className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
                    react_1["default"].createElement("path", { fillRule: "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", clipRule: "evenodd" })),
                react_1["default"].createElement("span", { className: "sr-only" }, "Icon description")))));
}
exports["default"] = ToolsPanel;

//# sourceMappingURL=ToolsPanel.js.map

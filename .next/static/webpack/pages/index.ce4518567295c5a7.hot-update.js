"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../factory */ \"./factory.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar NewCampaign = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), campaigns = ref[0], setCampaigns = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        function fetchCampaigns() {\n            return _fetchCampaigns.apply(this, arguments);\n        }\n        function _fetchCampaigns() {\n            _fetchCampaigns = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var campaigns;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                _factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].methods.getDeployedCampaigns().call()\n                            ];\n                        case 1:\n                            campaigns = _state.sent();\n                            setCampaigns(campaigns);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _fetchCampaigns.apply(this, arguments);\n        }\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            fetchCampaigns();\n            return [\n                2\n            ];\n        });\n    }), []);\n    console.log(campaigns);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"This is campaign page\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\web 3\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Total campaigns \",\n                    campaigns.length\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\web 3\\\\kickstart\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\web 3\\\\kickstart\\\\pages\\\\index.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, _this);\n};\n_s(NewCampaign, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = NewCampaign;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewCampaign);\nvar _c;\n$RefreshReg$(_c, \"NewCampaign\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztBQUFtRDtBQUNsQjtBQUVqQyxJQUFNSSxXQUFXLEdBQUcsV0FBTTs7SUFFdEIsSUFBa0NGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBdkNHLFNBQVMsR0FBa0JILEdBQVksR0FBOUIsRUFBRUksWUFBWSxHQUFJSixHQUFZLEdBQWhCO0lBQzlCRCxnREFBUyxlQUFDLCtGQUFZO2lCQUNITSxjQUFjO21CQUFkQSxlQUFjOztpQkFBZEEsZUFBYztZQUFkQSxlQUFjLEdBQTdCLCtGQUFnQztvQkFDdEJGLFNBQVM7Ozs7NEJBQUc7O2dDQUFNRiw2RUFBb0MsRUFBRSxDQUFDTyxJQUFJLEVBQUU7OEJBQUE7OzRCQUEvREwsU0FBUyxHQUFHLGFBQW1EOzRCQUNyRUMsWUFBWSxDQUFDRCxTQUFTLENBQUM7Ozs7OztZQUMzQixDQUFDO21CQUhjRSxlQUFjOzs7WUFJN0JBLGNBQWMsRUFBRTs7Ozs7SUFDcEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQztJQUVOSSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsU0FBUyxDQUFDO0lBRXRCLHFCQUNJLDhEQUFDUSxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyx1QkFBcUI7Ozs7O3FCQUFLOzBCQUM5Qiw4REFBQ0EsSUFBRTs7b0JBQUMsa0JBQWdCO29CQUFDVCxTQUFTLENBQUNVLE1BQU07Ozs7OztxQkFBTTs7Ozs7O2FBQ3pDLENBQ1I7QUFDTixDQUFDO0dBbkJLWCxXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUFxQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZmFjdG9yeSc7XHJcblxyXG5jb25zdCBOZXdDYW1wYWlnbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY2FtcGFpZ25zLCBzZXRDYW1wYWlnbnNdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2FtcGFpZ25zKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7XHJcbiAgICAgICAgICAgIHNldENhbXBhaWducyhjYW1wYWlnbnMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoQ2FtcGFpZ25zKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNhbXBhaWducylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5UaGlzIGlzIGNhbXBhaWduIHBhZ2U8L2gxPlxyXG4gICAgICAgICAgICA8aDE+VG90YWwgY2FtcGFpZ25zIHtjYW1wYWlnbnMubGVuZ3RofTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3Q2FtcGFpZ247Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJmYWN0b3J5IiwiTmV3Q2FtcGFpZ24iLCJjYW1wYWlnbnMiLCJzZXRDYW1wYWlnbnMiLCJmZXRjaENhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
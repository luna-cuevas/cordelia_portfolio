/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/visuals",{

/***/ "./components/ImageModal.jsx":
/*!***********************************!*\
  !*** ./components/ImageModal.jsx ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/visuals.jsx":
/*!***************************!*\
  !*** ./pages/visuals.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ImageModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageModal */ \"./components/ImageModal.jsx\");\n/* harmony import */ var _components_ImageModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ImageModal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.jsx\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar visuals = function(param) {\n    var visuals = param.visuals;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), openModal = ref[0], setOpenModal = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalState = ref1[0], setModalState = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col max-w-[1200px] m-auto min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns-5 justify-evenly flex flex-wrap gap-8 mt-4\",\n                children: visuals.map(function(image, id) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative md:w-1/6 h-fit border-4 p-2 bg-[#fee1ff] border-[#918fe6] flex flex-col w-3/4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"\",\n                                src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_4__.urlFor)(image.image)\n                            }, id, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    setOpenModal((0,_lib_client__WEBPACK_IMPORTED_MODULE_4__.urlFor)(image.image));\n                                    setImage(true);\n                                },\n                                className: \"focus:outline-none absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-transparent\",\n                                type: \"button\",\n                                \"data-modal-toggle\": \"popup-modal\"\n                            }, void 0, false, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, id, true, {\n                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ImageModal__WEBPACK_IMPORTED_MODULE_2___default()), {\n                modalState: modalState,\n                setModalState: setModalState,\n                openModal: openModal,\n                setOpenModal: setOpenModal\n            }, void 0, false, {\n                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/visuals.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(visuals, \"R5MpwxtIzaMQi8yPEhY6DBbDou0=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (visuals);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy92aXN1YWxzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDVztBQUNWO0FBQ007O0FBRTlDLElBQU1LLE9BQU8sR0FBRyxnQkFBbUI7UUFBZkEsT0FBTyxTQUFQQSxPQUFPOztJQUN6QixJQUFrQ0osR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUF6Q0ssU0FBUyxHQUFrQkwsR0FBYyxHQUFoQyxFQUFFTSxZQUFZLEdBQUlOLEdBQWMsR0FBbEI7SUFDOUIsSUFBb0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBNUNPLFVBQVUsR0FBbUJQLElBQWUsR0FBbEMsRUFBRVEsYUFBYSxHQUFJUixJQUFlLEdBQW5CO0lBRWhDLHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxrREFBa0Q7OzBCQUMvRCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG9EQUFvRDswQkFDaEVOLE9BQU8sQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLEtBQUssRUFBRUMsRUFBRTt5Q0FDckIsOERBQUNKLEtBQUc7d0JBQVVDLFNBQVMsRUFBQyx3RkFBd0Y7OzBDQUM5Ryw4REFBQ0ksS0FBRztnQ0FBRUosU0FBUyxFQUFDLEVBQUU7Z0NBQVVLLEdBQUcsRUFBRVosbURBQU0sQ0FBQ1MsS0FBSyxDQUFDQSxLQUFLLENBQUM7K0JBQTVCQyxFQUFFOzs7O3FDQUFrQzswQ0FDNUQsOERBQUNHLFFBQU07Z0NBQUNDLE9BQU8sRUFBRSxXQUFNO29DQUFDWCxZQUFZLENBQUNILG1EQUFNLENBQUNTLEtBQUssQ0FBQ0EsS0FBSyxDQUFDLENBQUMsQ0FBQztvQ0FBQ00sUUFBUSxDQUFDLElBQUksQ0FBQztpQ0FBQztnQ0FBRVIsU0FBUyxFQUFDLHdGQUF3RjtnQ0FBQ1MsSUFBSSxFQUFDLFFBQVE7Z0NBQUNDLG1CQUFpQixFQUFDLGFBQWE7Ozs7O3FDQUNuTjs7dUJBSERQLEVBQUU7Ozs7NkJBSU47aUJBQ1AsQ0FBQzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNaLCtEQUFVO2dCQUFDTSxVQUFVLEVBQUVBLFVBQVU7Z0JBQUVDLGFBQWEsRUFBRUEsYUFBYTtnQkFBRUgsU0FBUyxFQUFFQSxTQUFTO2dCQUFFQyxZQUFZLEVBQUVBLFlBQVk7Ozs7O3FCQUFJOzs7Ozs7YUFDbEgsQ0FDUDtDQUNGO0dBbEJLRixPQUFPOztBQW9CYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92aXN1YWxzLmpzeD9lNDE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9JbWFnZU1vZGFsJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSAnLi4vbGliL2NsaWVudCdcblxuY29uc3QgdmlzdWFscyA9ICggeyB2aXN1YWxzIH0gKSA9PiB7XG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW21vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWF4LXctWzEyMDBweF0gbS1hdXRvIG1pbi1oLXNjcmVlbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1ucy01IGp1c3RpZnktZXZlbmx5IGZsZXggZmxleC13cmFwIGdhcC04IG10LTQnPlxuICAgICAgICB7dmlzdWFscy5tYXAoKGltYWdlLCBpZCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPSdyZWxhdGl2ZSBtZDp3LTEvNiBoLWZpdCBib3JkZXItNCBwLTIgYmctWyNmZWUxZmZdIGJvcmRlci1bIzkxOGZlNl0gZmxleCBmbGV4LWNvbCB3LTMvNCc+XG4gICAgICAgICAgICA8aW1nICBjbGFzc05hbWU9Jycga2V5PXtpZH0gc3JjPXt1cmxGb3IoaW1hZ2UuaW1hZ2UpfT48L2ltZz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NldE9wZW5Nb2RhbCh1cmxGb3IoaW1hZ2UuaW1hZ2UpKTsgc2V0SW1hZ2UodHJ1ZSl9fSBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgYWJzb2x1dGUgdG9wLTAgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGgtZnVsbCBiZy10cmFuc3BhcmVudFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLW1vZGFsLXRvZ2dsZT1cInBvcHVwLW1vZGFsXCI+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJbWFnZU1vZGFsIG1vZGFsU3RhdGU9e21vZGFsU3RhdGV9IHNldE1vZGFsU3RhdGU9e3NldE1vZGFsU3RhdGV9IG9wZW5Nb2RhbD17b3Blbk1vZGFsfSBzZXRPcGVuTW9kYWw9e3NldE9wZW5Nb2RhbH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB2aXN1YWxzXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHZpc3VhbHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goJypbX3R5cGUgPT0gXCJ2aXN1YWxzXCJdJyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6eyB2aXN1YWxzIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2VNb2RhbCIsIk1vZGFsIiwidXJsRm9yIiwidmlzdWFscyIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm1vZGFsU3RhdGUiLCJzZXRNb2RhbFN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW1hZ2UiLCJpZCIsImltZyIsInNyYyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzZXRJbWFnZSIsInR5cGUiLCJkYXRhLW1vZGFsLXRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/visuals.jsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tiktoks",{

/***/ "./pages/tiktoks.jsx":
/*!***************************!*\
  !*** ./pages/tiktoks.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/windowWidth */ \"./lib/windowWidth.js\");\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.css */ \"./node_modules/react-modal-video/css/modal-video.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Modal */ \"./components/Modal.jsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar tiktoks = function(param) {\n    var tiktoks = param.tiktoks, tiktokHighlights = param.tiktokHighlights;\n    _s();\n    console.log(tiktoks.filter(function(tiktok) {\n        var includesTag = tiktok.myTags.find(function(item) {\n            return item.value === \"funky\";\n        });\n        if (includesTag) {\n            return tiktok;\n        }\n    }));\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), data = ref[0], setTikToks = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), dataHighlights = ref1[0], setTikTokHighlights = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isOpen = ref2[0], setOpen = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTikToks(tiktoks);\n        setTikTokHighlights(tiktokHighlights);\n    }, []);\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), openModal = ref3[0], setOpenModal = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalState = ref4[0], setModalState = ref4[1];\n    var windowWidth = (0,_lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__.useWidth)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col max-w-[1200px] m-auto min-h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col m-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-auto text-3xl\",\n                    children: \"Categories\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                    modules: [\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.EffectCreative,\n                        swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay\n                    ],\n                    slidesPerView: windowWidth < 768 ? 1 : 3,\n                    navigation: true,\n                    loop: true,\n                    autoplay: {\n                        delay: 15000,\n                        disableOnInteraction: false\n                    },\n                    className: \"mySwiper w-screen max-w-[1000px] flex-wrap mx-auto\",\n                    pagination: {\n                        clickable: true\n                    },\n                    children: dataHighlights.map(function(video, id) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"flex flex-col px-4 py-8 m-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                            className: \"md:w-full w-3/4 m-auto\",\n                                            controls: true,\n                                            src: video.videoUpload\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                setModalState(true);\n                                                setOpenModal(video.videoUpload);\n                                            },\n                                            className: \" absolute top-0 bottom-0 left-0 right-0 block w-full h-full bg-transparent\",\n                                            type: \"button\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"w-1/2 text-base font-bold m-auto mt-4 rounded-xl py-2 bg-[#f6b5f6]\",\n                                    children: video.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, id, true, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"m-auto my-10 text-3xl\",\n                    children: \"All Videos\"\n                }, void 0, false, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"columns-2 md:columns-4 flex flex-wrap\",\n                    children: [\n                        tiktoks.map(function(video, id) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:w-1/4 relative flex flex-col justify-center w-1/2 px-4 m-auto my-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                                        className: \"border-4 border-[#918fe6] h-fit p-2 bg-[#fee1ff] m-auto\",\n                                        controls: true,\n                                        src: video.videoUpload\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            setModalState(true);\n                                            setOpenModal(video.videoUpload);\n                                        },\n                                        className: \"block absolute h-full w-full bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center\",\n                                        type: \"button\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, id, true, {\n                                fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            modalState: modalState,\n                            setModalState: setModalState,\n                            openModal: openModal,\n                            setOpenModal: setOpenModal\n                        }, void 0, false, {\n                            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/luna.c/Documents/GitHub/cordelia_portfolio/pages/tiktoks.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(tiktoks, \"yP8DQMkr/zSyXbx/8YGW5mVSPwU=\", false, function() {\n    return [\n        _lib_windowWidth__WEBPACK_IMPORTED_MODULE_8__.useWidth\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tiktoks);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3FDQUl4Rjt5QkFDUCxDQUFDO3NDQUNGLDhEQUFDckMsMERBQUs7NEJBQUNvQixVQUFVLEVBQUVBLFVBQVU7NEJBQUVDLGFBQWEsRUFBRUEsYUFBYTs0QkFBRUgsU0FBUyxFQUFFQSxTQUFTOzRCQUFFQyxZQUFZLEVBQUVBLFlBQVk7Ozs7O2lDQUFJOzs7Ozs7eUJBQzdHOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBdEVLbEIsT0FBTzs7UUFzQlNILHNEQUFROzs7O0FBa0Q5QiwrREFBZUcsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90aWt0b2tzLmpzeD84ZWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBcbiAgTmF2aWdhdGlvbiwgXG4gIFBhZ2luYXRpb24sIFxuICBFZmZlY3RDcmVhdGl2ZSwgXG4gIEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0ICdzd2lwZXIvY3NzJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9uYXZpZ2F0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcbmltcG9ydCAnc3dpcGVyL2Nzcy9zY3JvbGxiYXInO1xuaW1wb3J0IHsgdXNlV2lkdGggfSBmcm9tICcuLi9saWIvd2luZG93V2lkdGgnO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vbGliL2NsaWVudCdcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5jc3MnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuXG5cbmNvbnN0IHRpa3Rva3MgPSAoIHsgdGlrdG9rcywgdGlrdG9rSGlnaGxpZ2h0cyB9ICkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICB0aWt0b2tzLmZpbHRlcih0aWt0b2sgPT4geyAgXG4gICAgICBjb25zdCBpbmNsdWRlc1RhZyA9IHRpa3Rvay5teVRhZ3MuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09ICdmdW5reScpO1xuICAgICAgaWYgKGluY2x1ZGVzVGFnKSB7XG4gICAgICAgIHJldHVybiB0aWt0b2tcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIGNvbnN0IFtkYXRhLCBzZXRUaWtUb2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2RhdGFIaWdobGlnaHRzLCBzZXRUaWtUb2tIaWdobGlnaHRzXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW2lzT3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpa1Rva3ModGlrdG9rcyk7XG4gICAgc2V0VGlrVG9rSGlnaGxpZ2h0cyh0aWt0b2tIaWdobGlnaHRzKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtvcGVuTW9kYWwsIHNldE9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW21vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHdpbmRvd1dpZHRoID0gdXNlV2lkdGgoKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbWF4LXctWzEyMDBweF0gbS1hdXRvIG1pbi1oLXNjcmVlbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtLWF1dG8nPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtLWF1dG8gdGV4dC0zeGwnPkNhdGVnb3JpZXM8L2gxPlxuICAgICAgICA8U3dpcGVyXG4gICAgICAgICAgbW9kdWxlcz17WyBcbiAgICAgICAgICAgIE5hdmlnYXRpb24sIFxuICAgICAgICAgICAgUGFnaW5hdGlvbiwgXG4gICAgICAgICAgICBFZmZlY3RDcmVhdGl2ZSxcbiAgICAgICAgICAgIEF1dG9wbGF5XX1cbiAgICAgICAgICBzbGlkZXNQZXJWaWV3PXt3aW5kb3dXaWR0aCA8IDc2OCA/IDEgOiAzfVxuICAgICAgICAgIG5hdmlnYXRpb25cbiAgICAgICAgICBsb29wPXt0cnVlfVxuICAgICAgICAgIGF1dG9wbGF5PXt7XG4gICAgICAgICAgICBkZWxheTogMTUwMDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJteVN3aXBlciB3LXNjcmVlbiBtYXgtdy1bMTAwMHB4XSBmbGV4LXdyYXAgbXgtYXV0b1wiXG4gICAgICAgICAgcGFnaW5hdGlvbj17eyBjbGlja2FibGU6IHRydWUgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtkYXRhSGlnaGxpZ2h0cy5tYXAoKHZpZGVvLCBpZCkgPT4gKFxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBweC00IHB5LTggbS1hdXRvJyBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPSdtZDp3LWZ1bGwgdy0zLzQgbS1hdXRvJyBjb250cm9scyBzcmM9e3ZpZGVvLnZpZGVvVXBsb2FkfT48L3ZpZGVvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge3NldE1vZGFsU3RhdGUodHJ1ZSk7IHNldE9wZW5Nb2RhbCh2aWRlby52aWRlb1VwbG9hZCk7fX0gY2xhc3NOYW1lPVwiIGFic29sdXRlIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJsb2NrIHctZnVsbCBoLWZ1bGwgYmctdHJhbnNwYXJlbnRcIiB0eXBlPVwiYnV0dG9uXCIgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIDxpZnJhbWUgY2xhc3NOYW1lPSdoLVs1MDBweF0gbWQ6aC1bNDAwcHhdIHctZnVsbCBtLWF1dG8nIHNyYz17dmlkZW8udXJsLm1hdGNoKC8oaHR0cHM/OlxcL1xcL1teIF0qKS8pfSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+ICovfVxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndy0xLzIgdGV4dC1iYXNlIGZvbnQtYm9sZCBtLWF1dG8gbXQtNCByb3VuZGVkLXhsIHB5LTIgYmctWyNmNmI1ZjZdJz57dmlkZW8uY2F0ZWdvcnl9PC9idXR0b24+XG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N3aXBlcj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT0nbS1hdXRvIG15LTEwIHRleHQtM3hsJz5BbGwgVmlkZW9zPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbnMtMiBtZDpjb2x1bW5zLTQgZmxleCBmbGV4LXdyYXAnPlxuICAgICAgICAgIHt0aWt0b2tzLm1hcCgodmlkZW8sIGlkKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6dy0xLzQgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB3LTEvMiBweC00IG0tYXV0byBteS00JyBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT0nYm9yZGVyLTQgYm9yZGVyLVsjOTE4ZmU2XSBoLWZpdCBwLTIgYmctWyNmZWUxZmZdIG0tYXV0bycgY29udHJvbHMgc3JjPXt2aWRlby52aWRlb1VwbG9hZH0+PC92aWRlbz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0TW9kYWxTdGF0ZSh0cnVlKTsgc2V0T3Blbk1vZGFsKHZpZGVvLnZpZGVvVXBsb2FkKTt9fSBjbGFzc05hbWU9XCJibG9jayBhYnNvbHV0ZSBoLWZ1bGwgdy1mdWxsIGJnLXRyYW5zcGFyZW50IGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyXCIgdHlwZT1cImJ1dHRvblwiID5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8TW9kYWwgbW9kYWxTdGF0ZT17bW9kYWxTdGF0ZX0gc2V0TW9kYWxTdGF0ZT17c2V0TW9kYWxTdGF0ZX0gb3Blbk1vZGFsPXtvcGVuTW9kYWx9IHNldE9wZW5Nb2RhbD17c2V0T3Blbk1vZGFsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpa3Rva3NcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGlrdG9rSGlnaGxpZ2h0cyA9IGF3YWl0IGNsaWVudC5mZXRjaCgnKltfdHlwZSA9PSBcInRpa3Rvay1oaWdobGlnaHRzXCJde2NhdGVnb3J5LCBcInZpZGVvVXBsb2FkXCI6IHZpZGVvLmFzc2V0LT51cmx9Jyk7XG4gIC8vIGNvbnN0IHRpa3Rva3MgPSBhd2FpdCBjbGllbnQuZmV0Y2goJypbX3R5cGUgPT0gXCJ0aWt0b2tWaWRlb3NcIl0nKTtcbiAgY29uc3QgdGlrdG9rcyA9IGF3YWl0IGNsaWVudC5mZXRjaChgXG4gICAgKltfdHlwZSA9PSAndGlrdG9rVmlkZW9zJ10ge1xuICAgICAgJ3ZpZGVvVXBsb2FkJzogdmlkZW8uYXNzZXQtPnVybCxcbiAgICAgIG15VGFnc1xuICAgIH1cbiAgYCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6eyB0aWt0b2tzLCB0aWt0b2tIaWdobGlnaHRzIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJFZmZlY3RDcmVhdGl2ZSIsIkF1dG9wbGF5IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJ1c2VXaWR0aCIsIk1vZGFsVmlkZW8iLCJNb2RhbCIsInRpa3Rva3MiLCJ0aWt0b2tIaWdobGlnaHRzIiwiY29uc29sZSIsImxvZyIsImZpbHRlciIsInRpa3RvayIsImluY2x1ZGVzVGFnIiwibXlUYWdzIiwiZmluZCIsIml0ZW0iLCJ2YWx1ZSIsImRhdGEiLCJzZXRUaWtUb2tzIiwiZGF0YUhpZ2hsaWdodHMiLCJzZXRUaWtUb2tIaWdobGlnaHRzIiwiaXNPcGVuIiwic2V0T3BlbiIsIm9wZW5Nb2RhbCIsInNldE9wZW5Nb2RhbCIsIm1vZGFsU3RhdGUiLCJzZXRNb2RhbFN0YXRlIiwid2luZG93V2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1vZHVsZXMiLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsImxvb3AiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwibWFwIiwidmlkZW8iLCJpZCIsImNvbnRyb2xzIiwic3JjIiwidmlkZW9VcGxvYWQiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImNhdGVnb3J5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tiktoks.jsx\n"));

/***/ })

});
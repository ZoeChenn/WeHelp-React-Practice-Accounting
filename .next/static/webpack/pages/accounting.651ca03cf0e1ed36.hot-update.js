"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/accounting",{

/***/ "./pages/accounting.js":
/*!*****************************!*\
  !*** ./pages/accounting.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AccountingPage() {\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"income\");\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleTypeChange = (e)=>{\n        setType(e.target.value);\n    };\n    const handleMoneyChange = (e)=>{\n        setMoney(e.target.value);\n    };\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    const handleSubmit = ()=>{\n        if (money.trim() === \"\") {\n            return;\n        }\n        const newItem = {\n            type,\n            money,\n            description\n        };\n        setList([\n            ...list,\n            newItem\n        ]);\n        setType(\"income\");\n        setMoney(\"\");\n        setDescription(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-top\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: type,\n                        onChange: handleTypeChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"income\",\n                                children: \"收入\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"expense\",\n                                children: \"支出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"money\",\n                        className: \"moneyInput\",\n                        value: money,\n                        onChange: handleMoneyChange,\n                        type: \"text\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"description\",\n                        value: description,\n                        onChange: handleDescriptionChange\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"submit\",\n                        className: \"submitBtn\",\n                        onClick: handleSubmit,\n                        children: \"新增紀錄\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"displayList\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"list\",\n                    className: \"list\",\n                    children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"list-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"spend \".concat(item.type === \"income\" ? \"plus\" : \"minus\"),\n                                    children: item.money\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"description\",\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"del\",\n                                    className: \"delBtn\",\n                                    onClick: handleDelete,\n                                    children: \"刪除\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"sum\",\n                className: \"sum\",\n                children: [\n                    \"小記：\",\n                    calculateTotal(list)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"返回首頁\"\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AccountingPage, \"MdWxKJ+iRwGYGqusMZ9c5USJtS0=\");\n_c = AccountingPage;\n// 計算總和\nfunction calculateTotal(list) {\n    return list.reduce((total, item)=>{\n        if (item.type === \"income\") {\n            return total + parseFloat(item.money);\n        } else {\n            return total - parseFloat(item.money);\n        }\n    }, 0);\n}\nvar _c;\n$RefreshReg$(_c, \"AccountingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudGluZy5qcz9jOGQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnRpbmdQYWdlKCkge1xuICAgICAgICBjb25zdCBbIHR5cGUsIHNldFR5cGUgXSA9IHVzZVN0YXRlKCdpbmNvbWUnKTtcbiAgICAgICAgY29uc3QgWyBtb25leSwgc2V0TW9uZXkgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICAgICAgY29uc3QgWyBkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb24gXSA9IHVzZVN0YXRlKCcnKTtcbiAgICAgICAgY29uc3QgWyBsaXN0LCBzZXRMaXN0IF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZVR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgc2V0VHlwZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZU1vbmV5Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgICAgIHNldE1vbmV5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9uZXkudHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIG1vbmV5LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIHNldExpc3QoWy4uLmxpc3QsIG5ld0l0ZW1dKTtcbiAgICAgICAgICAgIHNldFR5cGUoJ2luY29tZScpO1xuICAgICAgICAgICAgc2V0TW9uZXkoJycpO1xuICAgICAgICAgICAgc2V0RGVzY3JpcHRpb24oJycpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci10b3AnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9eyB0eXBlIH0gb25DaGFuZ2U9eyBoYW5kbGVUeXBlQ2hhbmdlIH0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2luY29tZSc+5pS25YWlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2V4cGVuc2UnPuaUr+WHujwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD0nbW9uZXknXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbW9uZXlJbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtb25leSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgaGFuZGxlTW9uZXlDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgZGVzY3JpcHRpb24gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdzdWJtaXQnIGNsYXNzTmFtZT0nc3VibWl0QnRuJyBvbkNsaWNrPXsgaGFuZGxlU3VibWl0IH0+5paw5aKe57SA6YyEPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBpZD0nZGlzcGxheUxpc3QnPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2xpc3QnIGNsYXNzTmFtZT0nbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgIHsgbGlzdC5tYXAgKCAoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpbmRleCB9IGNsYXNzTmFtZT0nbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHNwZW5kICR7aXRlbS50eXBlID09PSAnaW5jb21lJyA/ICdwbHVzJyA6ICdtaW51cyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubW9uZXkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+eyBpdGVtLmRlc2NyaXB0aW9uIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdkZWwnIGNsYXNzTmFtZT0nZGVsQnRuJyBvbkNsaWNrPXsgaGFuZGxlRGVsZXRlIH0+5Yiq6ZmkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0nc3VtJyBjbGFzc05hbWU9XCJzdW1cIj5cbiAgICAgICAgICAgICAgICDlsI/oqJjvvJp7IGNhbGN1bGF0ZVRvdGFsKGxpc3QpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bic+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+6L+U5Zue6aaW6aCBPC9MaW5rPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvLyDoqIjnrpfnuL3lkoxcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUb3RhbChsaXN0KSB7XG4gICAgICAgIHJldHVybiBsaXN0LnJlZHVjZSgodG90YWwsIGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2luY29tZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0b3RhbCArIHBhcnNlRmxvYXQoaXRlbS5tb25leSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdG90YWwgLSBwYXJzZUZsb2F0KGl0ZW0ubW9uZXkpO1xuICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgIH0iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJBY2NvdW50aW5nUGFnZSIsInR5cGUiLCJzZXRUeXBlIiwibW9uZXkiLCJzZXRNb25leSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJsaXN0Iiwic2V0TGlzdCIsImhhbmRsZVR5cGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVNb25leUNoYW5nZSIsImhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwidHJpbSIsIm5ld0l0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImlucHV0IiwiaWQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJociIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInNwYW4iLCJoYW5kbGVEZWxldGUiLCJjYWxjdWxhdGVUb3RhbCIsImhyZWYiLCJyZWR1Y2UiLCJ0b3RhbCIsInBhcnNlRmxvYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/accounting.js\n"));

/***/ })

});
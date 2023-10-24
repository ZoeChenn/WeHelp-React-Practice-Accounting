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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AccountingPage() {\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"income\");\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleTypeChange = (e)=>{\n        setType(e.target.value);\n    };\n    const handleMoneyChange = (e)=>{\n        setMoney(e.target.value);\n    };\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    const handleSubmit = ()=>{\n        if (money.trim() === \"\") {\n            return;\n        }\n        const newItem = {\n            type,\n            money,\n            description\n        };\n        setList([\n            ...list,\n            newItem\n        ]);\n        setType(\"income\");\n        setMoney(\"\");\n        setDescription(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-top\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: type,\n                        onChange: handleTypeChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"income\",\n                                children: \"收入\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"expense\",\n                                children: \"支出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"money\",\n                        className: \"moneyInput\",\n                        value: money,\n                        onChange: handleMoneyChange,\n                        type: \"text\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"description\",\n                        value: description,\n                        onChange: handleDescriptionChange\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"submit\",\n                        className: \"submitBtn\",\n                        onClick: handleSubmit,\n                        children: \"新增紀錄\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"displayList\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"list\",\n                    className: \"list\",\n                    children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"list-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"spend \".concat(item.type === \"income\" ? \"plus\" : \"minus\"),\n                                    children: item.money\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"description\",\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"del\",\n                                    className: \"delBtn\",\n                                    children: \"刪除\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"sum\",\n                className: \"sum\",\n                children: [\n                    \"小記：\",\n                    calculateTotal(list)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"返回首頁\"\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AccountingPage, \"MdWxKJ+iRwGYGqusMZ9c5USJtS0=\");\n_c = AccountingPage;\n// 計算總和\nfunction calculateTotal(list) {\n    return list.reduce((total, item)=>{\n        if (item.type === \"income\") {\n            return total + parseFloat(item.money);\n        } else {\n            return total - parseFloat(item.money);\n        }\n    }, 0);\n}\nvar _c;\n$RefreshReg$(_c, \"AccountingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9wYWdlcy9hY2NvdW50aW5nLmpzP2M4ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudGluZ1BhZ2UoKSB7XG4gICAgICAgIGNvbnN0IFsgdHlwZSwgc2V0VHlwZSBdID0gdXNlU3RhdGUoJ2luY29tZScpO1xuICAgICAgICBjb25zdCBbIG1vbmV5LCBzZXRNb25leSBdID0gdXNlU3RhdGUoJycpO1xuICAgICAgICBjb25zdCBbIGRlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiBdID0gdXNlU3RhdGUoJycpO1xuICAgICAgICBjb25zdCBbIGxpc3QsIHNldExpc3QgXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlTW9uZXlDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgc2V0TW9uZXkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChtb25leS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgbW9uZXksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgc2V0TGlzdChbLi4ubGlzdCwgbmV3SXRlbV0pO1xuICAgICAgICAgICAgc2V0VHlwZSgnaW5jb21lJyk7XG4gICAgICAgICAgICBzZXRNb25leSgnJyk7XG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbignJyk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXRvcCc+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17IHR5cGUgfSBvbkNoYW5nZT17IGhhbmRsZVR5cGVDaGFuZ2UgfT5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0naW5jb21lJz7mlLblhaU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZXhwZW5zZSc+5pSv5Ye6PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPSdtb25leSdcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtb25leUlucHV0J1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1vbmV5IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBoYW5kbGVNb25leUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBkZXNjcmlwdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UgfVxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9J3N1Ym1pdCcgY2xhc3NOYW1lPSdzdWJtaXRCdG4nIG9uQ2xpY2s9eyBoYW5kbGVTdWJtaXQgfT7mlrDlop7ntIDpjIQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPSdkaXNwbGF5TGlzdCc+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nbGlzdCcgY2xhc3NOYW1lPSdsaXN0Jz5cbiAgICAgICAgICAgICAgICAgICAgeyBsaXN0Lm1hcCAoIChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17IGluZGV4IH0gY2xhc3NOYW1lPSdsaXN0LWl0ZW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc3BlbmQgJHtpdGVtLnR5cGUgPT09ICdpbmNvbWUnID8gJ3BsdXMnIDogJ21pbnVzJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaXRlbS5tb25leSB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57IGl0ZW0uZGVzY3JpcHRpb24gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9J2RlbCcgY2xhc3NOYW1lPSdkZWxCdG4nPuWIqumZpDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3N1bScgY2xhc3NOYW1lPVwic3VtXCI+XG4gICAgICAgICAgICAgICAg5bCP6KiY77yaeyBjYWxjdWxhdGVUb3RhbChsaXN0KSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4nPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPui/lOWbnummlumggTwvTGluaz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8g6KiI566X57i95ZKMXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVG90YWwobGlzdCkge1xuICAgICAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdpbmNvbWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdG90YWwgKyBwYXJzZUZsb2F0KGl0ZW0ubW9uZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsIC0gcGFyc2VGbG9hdChpdGVtLm1vbmV5KTtcbiAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9Il0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiQWNjb3VudGluZ1BhZ2UiLCJ0eXBlIiwic2V0VHlwZSIsIm1vbmV5Iiwic2V0TW9uZXkiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlzdCIsInNldExpc3QiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTW9uZXlDaGFuZ2UiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInRyaW0iLCJuZXdJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJpbnB1dCIsImlkIiwicmVxdWlyZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaHIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzcGFuIiwiY2FsY3VsYXRlVG90YWwiLCJocmVmIiwicmVkdWNlIiwidG90YWwiLCJwYXJzZUZsb2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/accounting.js\n"));

/***/ })

});
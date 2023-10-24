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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction AccountingPage() {\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"income\");\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleTypeChange = (e)=>{\n        setType(e.target.value);\n    };\n    const handleMoneyChange = (e)=>{\n        setMoney(e.target.value);\n    };\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    const handleSubmit = ()=>{\n        if (money.trim() === \"\" || description.trim() === \"\") {\n            return;\n        }\n        const newItem = {\n            type,\n            money,\n            description\n        };\n        setList([\n            ...list,\n            newItem\n        ]);\n        setType(\"income\");\n        setMoney(\"\");\n        setDescription(\"\");\n    };\n    const handleDelete = (index)=>{\n        const updatedList = [\n            ...list\n        ];\n        updatedList.splice(index, 1);\n        setList(updatedList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-top\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: type,\n                        onChange: handleTypeChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"income\",\n                                children: \"收入\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"expense\",\n                                children: \"支出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 50,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"money\",\n                        className: \"moneyInput\",\n                        value: money,\n                        onChange: handleMoneyChange,\n                        type: \"text\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"description\",\n                        value: description,\n                        onChange: handleDescriptionChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"submit\",\n                        className: \"submitBtn\",\n                        onClick: handleSubmit,\n                        children: \"新增紀錄\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"displayList\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"list\",\n                    className: \"list\",\n                    children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"list-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"spend \".concat(item.type === \"income\" ? \"plus\" : \"minus\"),\n                                    children: item.type === \"income\" ? item.money : -item.money\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"description\",\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"del\",\n                                    className: \"delBtn\",\n                                    onClick: ()=>handleDelete(index),\n                                    children: \"刪除\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                            lineNumber: 72,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"sum\",\n                className: \"sum\",\n                children: [\n                    \"小記：\",\n                    calculateTotal(list)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"返回首頁\"\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 86,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AccountingPage, \"MdWxKJ+iRwGYGqusMZ9c5USJtS0=\");\n_c = AccountingPage;\nfunction calculateTotal(list) {\n    return list.reduce((total, item)=>{\n        if (item.type === \"income\") {\n            return total + parseInt(item.money);\n        } else {\n            return total - parseInt(item.money);\n        }\n    }, 0);\n}\nvar _c;\n$RefreshReg$(_c, \"AccountingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLK0IsTUFBTSxDQUFDLENBQUNDLE9BQU9MO1FBQ3ZCLElBQUlBLEtBQUtqQyxJQUFJLEtBQUssVUFBVTtZQUN4QixPQUFPc0MsUUFBUUMsU0FBU04sS0FBSy9CLEtBQUs7UUFDdEMsT0FBTztZQUNILE9BQU9vQyxRQUFRQyxTQUFTTixLQUFLL0IsS0FBSztRQUN0QztJQUNKLEdBQUc7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50aW5nLmpzP2M4ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudGluZ1BhZ2UoKSB7XG4gICAgY29uc3QgWyB0eXBlLCBzZXRUeXBlIF0gPSB1c2VTdGF0ZSgnaW5jb21lJyk7XG4gICAgY29uc3QgWyBtb25leSwgc2V0TW9uZXkgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbIGRlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiBdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFsgbGlzdCwgc2V0TGlzdCBdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFR5cGUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVNb25leUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldE1vbmV5KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgaWYgKG1vbmV5LnRyaW0oKSA9PT0gJycgfHwgZGVzY3JpcHRpb24udHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBtb25leSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIHNldExpc3QoWy4uLmxpc3QsIG5ld0l0ZW1dKTtcbiAgICAgICAgc2V0VHlwZSgnaW5jb21lJyk7XG4gICAgICAgIHNldE1vbmV5KCcnKTtcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oJycpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZExpc3QgPSBbLi4ubGlzdF07XG4gICAgICAgIHVwZGF0ZWRMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHNldExpc3QodXBkYXRlZExpc3QpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItdG9wJz5cbiAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9eyB0eXBlIH0gb25DaGFuZ2U9eyBoYW5kbGVUeXBlQ2hhbmdlIH0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0naW5jb21lJz7mlLblhaU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdleHBlbnNlJz7mlK/lh7o8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9J21vbmV5J1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbW9uZXlJbnB1dCdcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1vbmV5IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZU1vbmV5Q2hhbmdlIH1cbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGRlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPSdzdWJtaXQnIGNsYXNzTmFtZT0nc3VibWl0QnRuJyBvbkNsaWNrPXsgaGFuZGxlU3VibWl0IH0+5paw5aKe57SA6YyEPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGRpdiBpZD0nZGlzcGxheUxpc3QnPlxuICAgICAgICAgICAgPGRpdiBpZD0nbGlzdCcgY2xhc3NOYW1lPSdsaXN0Jz5cbiAgICAgICAgICAgICAgICB7IGxpc3QubWFwICggKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpbmRleCB9IGNsYXNzTmFtZT0nbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc3BlbmQgJHtpdGVtLnR5cGUgPT09ICdpbmNvbWUnID8gJ3BsdXMnIDogJ21pbnVzJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgeyBpdGVtLnR5cGUgPT09ICdpbmNvbWUnID8gaXRlbS5tb25leSA6IC1pdGVtLm1vbmV5IH1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57IGl0ZW0uZGVzY3JpcHRpb24gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0nZGVsJyBjbGFzc05hbWU9J2RlbEJ0bicgb25DbGljaz17ICgpID0+IGhhbmRsZURlbGV0ZShpbmRleCkgfT7liKrpmaQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0nc3VtJyBjbGFzc05hbWU9XCJzdW1cIj5cbiAgICAgICAgICAgIOWwj+iomO+8mnsgY2FsY3VsYXRlVG90YWwobGlzdCkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bic+XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz7ov5Tlm57pppbpoIE8L0xpbms+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUb3RhbChsaXN0KSB7XG4gICAgcmV0dXJuIGxpc3QucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnaW5jb21lJykge1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsICsgcGFyc2VJbnQoaXRlbS5tb25leSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdG90YWwgLSBwYXJzZUludChpdGVtLm1vbmV5KTtcbiAgICAgICAgfVxuICAgIH0sIDApO1xufSJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFjY291bnRpbmdQYWdlIiwidHlwZSIsInNldFR5cGUiLCJtb25leSIsInNldE1vbmV5IiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImxpc3QiLCJzZXRMaXN0IiwiaGFuZGxlVHlwZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU1vbmV5Q2hhbmdlIiwiaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJ0cmltIiwibmV3SXRlbSIsImhhbmRsZURlbGV0ZSIsImluZGV4IiwidXBkYXRlZExpc3QiLCJzcGxpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsImlucHV0IiwiaWQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJociIsIm1hcCIsIml0ZW0iLCJzcGFuIiwiY2FsY3VsYXRlVG90YWwiLCJocmVmIiwicmVkdWNlIiwidG90YWwiLCJwYXJzZUludCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/accounting.js\n"));

/***/ })

});
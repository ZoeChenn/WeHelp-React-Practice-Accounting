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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction AccountingPage() {\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"income\");\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleTypeChange = (e)=>{\n        setType(e.target.value);\n    };\n    const handleMoneyChange = (e)=>{\n        setMoney(e.target.value);\n    };\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    const handleSubmit = ()=>{\n        if (money.trim() === \"\") {\n            return;\n        }\n        const newItem = {\n            type,\n            money,\n            description\n        };\n        setList([\n            ...list,\n            newItem\n        ]);\n        setType(\"income\");\n        setMoney(\"\");\n        setDescription(\"\");\n    };\n    const handleDelete = (index)=>{\n        const updatedList = [\n            ...list\n        ];\n        updatedList.splice(index, 1);\n        setList(updatedList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-top\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: type,\n                        onChange: handleTypeChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"income\",\n                                children: \"收入\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"expense\",\n                                children: \"支出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"money\",\n                        className: \"moneyInput\",\n                        value: money,\n                        onChange: handleMoneyChange,\n                        type: \"text\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"description\",\n                        value: description,\n                        onChange: handleDescriptionChange\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"submit\",\n                        className: \"submitBtn\",\n                        onClick: handleSubmit,\n                        children: \"新增紀錄\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"displayList\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"list\",\n                    className: \"list\",\n                    children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"list-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"spend \".concat(item.type === \"income\" ? \"plus\" : \"minus\"),\n                                    children: item.money\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"description\",\n                                    children: item.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"del\",\n                                    className: \"delBtn\",\n                                    onClick: ()=>handleDelete(index),\n                                    children: \"刪除\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"sum\",\n                className: \"sum\",\n                children: [\n                    \"小記：\",\n                    calculateTotal(list)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"返回首頁\"\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AccountingPage, \"MdWxKJ+iRwGYGqusMZ9c5USJtS0=\");\n_c = AccountingPage;\n// 計算總和\nfunction calculateTotal(list) {\n    return list.reduce((total, item)=>{\n        if (item.type === \"income\") {\n            return total + parseFloat(item.money);\n        } else {\n            return total - parseFloat(item.money);\n        }\n    }, 0);\n}\nvar _c;\n$RefreshReg$(_c, \"AccountingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0MsUUFBUUMsV0FBV04sS0FBSy9CLEtBQUs7UUFDeEMsT0FBTztZQUNILE9BQU9vQyxRQUFRQyxXQUFXTixLQUFLL0IsS0FBSztRQUN4QztJQUNBLEdBQUc7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hY2NvdW50aW5nLmpzP2M4ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudGluZ1BhZ2UoKSB7XG4gICAgICAgIGNvbnN0IFsgdHlwZSwgc2V0VHlwZSBdID0gdXNlU3RhdGUoJ2luY29tZScpO1xuICAgICAgICBjb25zdCBbIG1vbmV5LCBzZXRNb25leSBdID0gdXNlU3RhdGUoJycpO1xuICAgICAgICBjb25zdCBbIGRlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbiBdID0gdXNlU3RhdGUoJycpO1xuICAgICAgICBjb25zdCBbIGxpc3QsIHNldExpc3QgXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlVHlwZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlTW9uZXlDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgc2V0TW9uZXkoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChtb25leS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0ge1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgbW9uZXksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgc2V0TGlzdChbLi4ubGlzdCwgbmV3SXRlbV0pO1xuICAgICAgICAgICAgc2V0VHlwZSgnaW5jb21lJyk7XG4gICAgICAgICAgICBzZXRNb25leSgnJyk7XG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbignJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkTGlzdCA9IFsuLi5saXN0XTtcbiAgICAgICAgICAgIHVwZGF0ZWRMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBzZXRMaXN0KHVwZGF0ZWRMaXN0KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci10b3AnPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9eyB0eXBlIH0gb25DaGFuZ2U9eyBoYW5kbGVUeXBlQ2hhbmdlIH0+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2luY29tZSc+5pS25YWlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2V4cGVuc2UnPuaUr+WHujwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD0nbW9uZXknXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbW9uZXlJbnB1dCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtb25leSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgaGFuZGxlTW9uZXlDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgZGVzY3JpcHRpb24gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdzdWJtaXQnIGNsYXNzTmFtZT0nc3VibWl0QnRuJyBvbkNsaWNrPXsgaGFuZGxlU3VibWl0IH0+5paw5aKe57SA6YyEPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBpZD0nZGlzcGxheUxpc3QnPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2xpc3QnIGNsYXNzTmFtZT0nbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgIHsgbGlzdC5tYXAgKCAoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9eyBpbmRleCB9IGNsYXNzTmFtZT0nbGlzdC1pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YHNwZW5kICR7aXRlbS50eXBlID09PSAnaW5jb21lJyA/ICdwbHVzJyA6ICdtaW51cyd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IGl0ZW0ubW9uZXkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+eyBpdGVtLmRlc2NyaXB0aW9uIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSdkZWwnIGNsYXNzTmFtZT0nZGVsQnRuJyBvbkNsaWNrPXsgKCkgPT4gaGFuZGxlRGVsZXRlKGluZGV4KSB9PuWIqumZpDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9J3N1bScgY2xhc3NOYW1lPVwic3VtXCI+XG4gICAgICAgICAgICAgICAg5bCP6KiY77yaeyBjYWxjdWxhdGVUb3RhbChsaXN0KSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4nPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPui/lOWbnummlumggTwvTGluaz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8g6KiI566X57i95ZKMXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlVG90YWwobGlzdCkge1xuICAgICAgICByZXR1cm4gbGlzdC5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdpbmNvbWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdG90YWwgKyBwYXJzZUZsb2F0KGl0ZW0ubW9uZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsIC0gcGFyc2VGbG9hdChpdGVtLm1vbmV5KTtcbiAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9Il0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiQWNjb3VudGluZ1BhZ2UiLCJ0eXBlIiwic2V0VHlwZSIsIm1vbmV5Iiwic2V0TW9uZXkiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwibGlzdCIsInNldExpc3QiLCJoYW5kbGVUeXBlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTW9uZXlDaGFuZ2UiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInRyaW0iLCJuZXdJdGVtIiwiaGFuZGxlRGVsZXRlIiwiaW5kZXgiLCJ1cGRhdGVkTGlzdCIsInNwbGljZSIsImRpdiIsImNsYXNzTmFtZSIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwiaW5wdXQiLCJpZCIsInJlcXVpcmVkIiwiYnV0dG9uIiwib25DbGljayIsImhyIiwibWFwIiwiaXRlbSIsInNwYW4iLCJjYWxjdWxhdGVUb3RhbCIsImhyZWYiLCJyZWR1Y2UiLCJ0b3RhbCIsInBhcnNlRmxvYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/accounting.js\n"));

/***/ })

});
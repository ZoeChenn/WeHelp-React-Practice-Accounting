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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction AccountingPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-top\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                id: \"inCome\",\n                                children: \"收入\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 7,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                id: \"outCome\",\n                                children: \"支出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 8,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 6,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"money\",\n                        className: \"moneyInput\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"submit\",\n                        className: \"submit\",\n                        children: \"新增紀錄\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"list\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"spend\",\n                            children: \"-200\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                            lineNumber: 17,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"description\",\n                            children: \"便當\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: \"submit\",\n                            className: \"submit\",\n                            children: \"新增紀錄\"\n                        }, void 0, false, {\n                            fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"返回首頁\"\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 22,\n                    columnNumber: 29\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n} // import Link from 'next/link';\n // import React from 'react';\n // import { useState } from 'react';\n // export default function AccountingPage() {\n //     const [type, setType] = useState('income');\n //     const [money, setMoney] = useState('');\n //     const [description, setDescription] = useState('');\n //     const [list, setList] = useState([]);\n //     const handleTypeChange = (e) => {\n //         setType(e.target.value);\n //     };\n //     const handleMoneyChange = (e) => {\n //         setMoney(e.target.value);\n //     };\n //     const handleDescriptionChange = (e) => {\n //         setDescription(e.target.value);\n //     };\n //     const handleSubmit = () => {\n //         // 創建一個新資料項\n //         const newItem = {\n //         type,\n //         money,\n //         description,\n //         };\n //         // 將新資料項添加到列表\n //         setList([...list, newItem]);\n //         // 清空輸入欄位\n //         setType('income');\n //         setMoney('');\n //         setDescription('');\n //     };\n //     return (\n //         <>\n //         <div className='container-top'>\n //             <select value={ type } onChange={ handleTypeChange }>\n //                 <option value='income'>收入</option>\n //                 <option value='expense'>支出</option>\n //             </select>\n //             <input\n //                 id='money'\n //                 className='moneyInput'\n //                 value={ money }\n //                 onChange={ handleMoneyChange }\n //                 type='text'\n //             ></input>\n //             <input\n //                 id='description'\n //                 value={ description }\n //                 onChange={ handleDescriptionChange }\n //             ></input>\n //             <button id='submit' className='submit' onClick={ handleSubmit }>新增紀錄</button>\n //         </div>\n //         <hr />\n //         <div id='list'>\n //             <ul>\n //             {list.map((item, index) => (\n //                 <li key={index}>\n //                 {item.type === 'income' ? '收入' : '支出'}: {item.money} -{' '}\n //                 {item.description}\n //                 </li>\n //             ))}\n //             </ul>\n //         </div>\n //         <button className='btn'>\n //             <Link href='/'>返回首頁</Link>\n //         </button>\n //         </>\n //     );\n // }\n_c = AccountingPage;\nvar _c;\n$RefreshReg$(_c, \"AccountingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUVkLFNBQVNDO0lBQ3BCLHFCQUFPOzswQkFDUCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzs7MENBQ0csOERBQUNDO2dDQUFPQyxJQUFHOzBDQUFTOzs7Ozs7MENBQ3BCLDhEQUFDRDtnQ0FBT0MsSUFBRzswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUV6Qiw4REFBQ0M7d0JBQU1ELElBQUc7d0JBQVFILFdBQVU7Ozs7OztrQ0FDNUIsOERBQUNJO3dCQUFNRCxJQUFHOzs7Ozs7a0NBQ1YsOERBQUNFO3dCQUFPRixJQUFHO3dCQUFTSCxXQUFVO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRTNDLDhEQUFDTTs7Ozs7MEJBQ0QsOERBQUNQO2dCQUFJSSxJQUFHOzBCQUNKLDRFQUFDSjs7c0NBQ0csOERBQUNROzRCQUFLUCxXQUFVO3NDQUFROzs7Ozs7c0NBQ3hCLDhEQUFDTzs0QkFBS1AsV0FBVTtzQ0FBYzs7Ozs7O3NDQUM5Qiw4REFBQ0s7NEJBQU9GLElBQUc7NEJBQVNILFdBQVU7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvQyw4REFBQ0s7Z0JBQU9MLFdBQVU7MEJBQU0sNEVBQUNILGtEQUFJQTtvQkFBQ1csTUFBSzs4QkFBSTs7Ozs7Ozs7Ozs7OztBQUUzQyxFQUVBLGdDQUFnQztDQUNoQyw2QkFBNkI7Q0FDN0Isb0NBQW9DO0NBRXBDLDZDQUE2QztDQUM3QyxrREFBa0Q7Q0FDbEQsOENBQThDO0NBQzlDLDBEQUEwRDtDQUMxRCw0Q0FBNEM7Q0FFNUMsd0NBQXdDO0NBQ3hDLG1DQUFtQztDQUNuQyxTQUFTO0NBRVQseUNBQXlDO0NBQ3pDLG9DQUFvQztDQUNwQyxTQUFTO0NBRVQsK0NBQStDO0NBQy9DLDBDQUEwQztDQUMxQyxTQUFTO0NBRVQsbUNBQW1DO0NBQ25DLHNCQUFzQjtDQUN0Qiw0QkFBNEI7Q0FDNUIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUViLHdCQUF3QjtDQUN4Qix1Q0FBdUM7Q0FFdkMsb0JBQW9CO0NBQ3BCLDZCQUE2QjtDQUM3Qix3QkFBd0I7Q0FDeEIsOEJBQThCO0NBQzlCLFNBQVM7Q0FFVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLDBDQUEwQztDQUMxQyxvRUFBb0U7Q0FDcEUscURBQXFEO0NBQ3JELHNEQUFzRDtDQUN0RCx3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3Qix5Q0FBeUM7Q0FDekMsa0NBQWtDO0NBQ2xDLGlEQUFpRDtDQUNqRCw4QkFBOEI7Q0FDOUIsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQixtQ0FBbUM7Q0FDbkMsd0NBQXdDO0NBQ3hDLHVEQUF1RDtDQUN2RCx3QkFBd0I7Q0FDeEIsNEZBQTRGO0NBQzVGLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQiwyQ0FBMkM7Q0FDM0MsbUNBQW1DO0NBQ25DLDhFQUE4RTtDQUM5RSxxQ0FBcUM7Q0FDckMsd0JBQXdCO0NBQ3hCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLG1DQUFtQztDQUNuQyx5Q0FBeUM7Q0FDekMsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxTQUFTO0NBQ1QsSUFBSTtLQW5Hb0JWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnRpbmcuanM/YzhkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50aW5nUGFnZSgpIHtcbiAgICByZXR1cm4gPD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXRvcCc+XG4gICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICA8b3B0aW9uIGlkPSdpbkNvbWUnPuaUtuWFpTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiBpZD0nb3V0Q29tZSc+5pSv5Ye6PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aW5wdXQgaWQ9J21vbmV5JyBjbGFzc05hbWU9J21vbmV5SW5wdXQnPjwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCBpZD0nZGVzY3JpcHRpb24nPjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gaWQ9J3N1Ym1pdCcgY2xhc3NOYW1lPVwic3VibWl0XCI+5paw5aKe57SA6YyEPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGhyIC8+XG4gICAgPGRpdiBpZD0nbGlzdCc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NwZW5kJz4tMjAwPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+5L6/55W2PC9zcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nc3VibWl0JyBjbGFzc05hbWU9XCJzdWJtaXRcIj7mlrDlop7ntIDpjIQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj48TGluayBocmVmPVwiL1wiPui/lOWbnummlumggTwvTGluaz48L2J1dHRvbj5cbiAgICA8Lz5cbn1cblxuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudGluZ1BhZ2UoKSB7XG4vLyAgICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJ2luY29tZScpO1xuLy8gICAgIGNvbnN0IFttb25leSwgc2V0TW9uZXldID0gdXNlU3RhdGUoJycpO1xuLy8gICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuLy8gICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuLy8gICAgIGNvbnN0IGhhbmRsZVR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuLy8gICAgICAgICBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbi8vICAgICB9O1xuXG4vLyAgICAgY29uc3QgaGFuZGxlTW9uZXlDaGFuZ2UgPSAoZSkgPT4ge1xuLy8gICAgICAgICBzZXRNb25leShlLnRhcmdldC52YWx1ZSk7XG4vLyAgICAgfTtcblxuLy8gICAgIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGUpID0+IHtcbi8vICAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xuLy8gICAgIH07XG5cbi8vICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4vLyAgICAgICAgIC8vIOWJteW7uuS4gOWAi+aWsOizh+aWmemghVxuLy8gICAgICAgICBjb25zdCBuZXdJdGVtID0ge1xuLy8gICAgICAgICB0eXBlLFxuLy8gICAgICAgICBtb25leSxcbi8vICAgICAgICAgZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIH07XG5cbi8vICAgICAgICAgLy8g5bCH5paw6LOH5paZ6aCF5re75Yqg5Yiw5YiX6KGoXG4vLyAgICAgICAgIHNldExpc3QoWy4uLmxpc3QsIG5ld0l0ZW1dKTtcblxuLy8gICAgICAgICAvLyDmuIXnqbrovLjlhaXmrITkvY1cbi8vICAgICAgICAgc2V0VHlwZSgnaW5jb21lJyk7XG4vLyAgICAgICAgIHNldE1vbmV5KCcnKTtcbi8vICAgICAgICAgc2V0RGVzY3JpcHRpb24oJycpO1xuLy8gICAgIH07XG5cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8PlxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXRvcCc+XG4vLyAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXsgdHlwZSB9IG9uQ2hhbmdlPXsgaGFuZGxlVHlwZUNoYW5nZSB9PlxuLy8gICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2luY29tZSc+5pS25YWlPC9vcHRpb24+XG4vLyAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZXhwZW5zZSc+5pSv5Ye6PC9vcHRpb24+XG4vLyAgICAgICAgICAgICA8L3NlbGVjdD5cbi8vICAgICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgICAgIGlkPSdtb25leSdcbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21vbmV5SW5wdXQnXG4vLyAgICAgICAgICAgICAgICAgdmFsdWU9eyBtb25leSB9XG4vLyAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBoYW5kbGVNb25leUNoYW5nZSB9XG4vLyAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbi8vICAgICAgICAgICAgID48L2lucHV0PlxuLy8gICAgICAgICAgICAgPGlucHV0XG4vLyAgICAgICAgICAgICAgICAgaWQ9J2Rlc2NyaXB0aW9uJ1xuLy8gICAgICAgICAgICAgICAgIHZhbHVlPXsgZGVzY3JpcHRpb24gfVxuLy8gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UgfVxuLy8gICAgICAgICAgICAgPjwvaW5wdXQ+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIGlkPSdzdWJtaXQnIGNsYXNzTmFtZT0nc3VibWl0JyBvbkNsaWNrPXsgaGFuZGxlU3VibWl0IH0+5paw5aKe57SA6YyEPC9idXR0b24+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8aHIgLz5cbi8vICAgICAgICAgPGRpdiBpZD0nbGlzdCc+XG4vLyAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuLy8gICAgICAgICAgICAgICAgIHtpdGVtLnR5cGUgPT09ICdpbmNvbWUnID8gJ+aUtuWFpScgOiAn5pSv5Ye6J306IHtpdGVtLm1vbmV5fSAteycgJ31cbi8vICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbi8vICAgICAgICAgICAgICAgICA8L2xpPlxuLy8gICAgICAgICAgICAgKSl9XG4vLyAgICAgICAgICAgICA8L3VsPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bic+XG4vLyAgICAgICAgICAgICA8TGluayBocmVmPScvJz7ov5Tlm57pppbpoIE8L0xpbms+XG4vLyAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICA8Lz5cbi8vICAgICApO1xuLy8gfVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJBY2NvdW50aW5nUGFnZSIsImRpdiIsImNsYXNzTmFtZSIsInNlbGVjdCIsIm9wdGlvbiIsImlkIiwiaW5wdXQiLCJidXR0b24iLCJociIsInNwYW4iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/accounting.js\n"));

/***/ })

});
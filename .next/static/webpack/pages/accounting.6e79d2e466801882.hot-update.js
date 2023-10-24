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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountingPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// import Link from 'next/link';\n// export default function AccountingPage() {\n//     return <>\n//     <div className='container-top'>\n//         <select>\n//             <option id='inCome'>收入</option>\n//             <option id='outCome'>支出</option>\n//         </select>\n//         <input id='money' className='moneyInput'></input>\n//         <input id='description'></input>\n//         <button id='submit' className=\"submit\">新增紀錄</button>\n//     </div>\n//     <hr />\n//     <div id='list'>\n//     </div>\n//     <button className=\"btn\"><Link href=\"/\">返回首頁</Link></button>\n//     </>\n// }\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AccountingPage() {\n    _s();\n    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"income\");\n    const [money, setMoney] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleTypeChange = (e)=>{\n        setType(e.target.value);\n    };\n    const handleMoneyChange = (e)=>{\n        setMoney(e.target.value);\n    };\n    const handleDescriptionChange = (e)=>{\n        setDescription(e.target.value);\n    };\n    const handleSubmit = ()=>{\n        // 創建一個新資料項\n        const newItem = {\n            type,\n            money,\n            description\n        };\n        // 將新資料項添加到列表\n        setList([\n            ...list,\n            newItem\n        ]);\n        // 清空輸入欄位\n        setType(\"income\");\n        setMoney(\"\");\n        setDescription(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-top\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: type,\n                        onChange: handleTypeChange,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"income\",\n                                children: \"收入\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"expense\",\n                                children: \"支出\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"money\",\n                        className: \"moneyInput\",\n                        value: money,\n                        onChange: handleMoneyChange,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"description\",\n                        value: description,\n                        onChange: handleDescriptionChange\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        id: \"submit\",\n                        className: \"submit\",\n                        onClick: handleSubmit,\n                        children: \"新增紀錄\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"list\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                item.type === \"income\" ? \"收入\" : \"支出\",\n                                \": \",\n                                item.money,\n                                \" -\",\n                                \" \",\n                                item.description\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                            lineNumber: 87,\n                            columnNumber: 17\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: \"返回首頁\"\n                }, void 0, false, {\n                    fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zoechen/Desktop/WeHelp-React-Practice-Accounting/pages/accounting.js\",\n                lineNumber: 94,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AccountingPage, \"mC6bR4CHNm8lgw39D5xjMNx3v9w=\");\n_c = AccountingPage;\nvar _c;\n$RefreshReg$(_c, \"AccountingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFFaEMsNkNBQTZDO0FBQzdDLGdCQUFnQjtBQUNoQixzQ0FBc0M7QUFDdEMsbUJBQW1CO0FBQ25CLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0Msb0JBQW9CO0FBQ3BCLDREQUE0RDtBQUM1RCwyQ0FBMkM7QUFDM0MsK0RBQStEO0FBQy9ELGFBQWE7QUFDYixhQUFhO0FBQ2Isc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYixrRUFBa0U7QUFDbEUsVUFBVTtBQUNWLElBQUk7OztBQUV5QjtBQUNIO0FBQ087QUFFbEIsU0FBU0c7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLE1BQU1VLG1CQUFtQixDQUFDQztRQUN0QlIsUUFBUVEsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzFCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNIO1FBQ3ZCTixTQUFTTSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDM0I7SUFFQSxNQUFNRSwwQkFBMEIsQ0FBQ0o7UUFDN0JKLGVBQWVJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUNqQztJQUVBLE1BQU1HLGVBQWU7UUFDakIsV0FBVztRQUNYLE1BQU1DLFVBQVU7WUFDaEJmO1lBQ0FFO1lBQ0FFO1FBQ0E7UUFFQSxhQUFhO1FBQ2JHLFFBQVE7ZUFBSUQ7WUFBTVM7U0FBUTtRQUUxQixTQUFTO1FBQ1RkLFFBQVE7UUFDUkUsU0FBUztRQUNURSxlQUFlO0lBQ25CO0lBRUEscUJBQ0k7OzBCQUNBLDhEQUFDVztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFPUCxPQUFPWDt3QkFBTW1CLFVBQVVYOzswQ0FDL0IsOERBQUNZO2dDQUFPVCxPQUFNOzBDQUFTOzs7Ozs7MENBQ3ZCLDhEQUFDUztnQ0FBT1QsT0FBTTswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUV4Qiw4REFBQ1U7d0JBQ0RDLElBQUc7d0JBQ0hMLFdBQVU7d0JBQ1ZOLE9BQU9UO3dCQUNQaUIsVUFBVVA7d0JBQ1ZaLE1BQUs7Ozs7OztrQ0FFTCw4REFBQ3FCO3dCQUNEQyxJQUFHO3dCQUNIWCxPQUFPUDt3QkFDUGUsVUFBVU47Ozs7OztrQ0FFViw4REFBQ1U7d0JBQU9ELElBQUc7d0JBQVNMLFdBQVU7d0JBQVNPLFNBQVNWO2tDQUFjOzs7Ozs7Ozs7Ozs7MEJBSWxFLDhEQUFDVzs7Ozs7MEJBQ0QsOERBQUNUO2dCQUFJTSxJQUFHOzBCQUNKLDRFQUFDSTs4QkFDQXBCLEtBQUtxQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2IsOERBQUNDOztnQ0FDQUYsS0FBSzVCLElBQUksS0FBSyxXQUFXLE9BQU87Z0NBQUs7Z0NBQUc0QixLQUFLMUIsS0FBSztnQ0FBQztnQ0FBRztnQ0FDdEQwQixLQUFLeEIsV0FBVzs7MkJBRlJ5Qjs7Ozs7Ozs7Ozs7Ozs7OzBCQU9qQiw4REFBQ047Z0JBQU9OLFdBQVU7MEJBQ2QsNEVBQUNyQixrREFBSUE7b0JBQUNtQyxNQUFLOzhCQUFJOzs7Ozs7Ozs7Ozs7O0FBSTNCO0dBMUV3QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FjY291bnRpbmcuanM/YzhkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvdW50aW5nUGFnZSgpIHtcbi8vICAgICByZXR1cm4gPD5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXRvcCc+XG4vLyAgICAgICAgIDxzZWxlY3Q+XG4vLyAgICAgICAgICAgICA8b3B0aW9uIGlkPSdpbkNvbWUnPuaUtuWFpTwvb3B0aW9uPlxuLy8gICAgICAgICAgICAgPG9wdGlvbiBpZD0nb3V0Q29tZSc+5pSv5Ye6PC9vcHRpb24+XG4vLyAgICAgICAgIDwvc2VsZWN0PlxuLy8gICAgICAgICA8aW5wdXQgaWQ9J21vbmV5JyBjbGFzc05hbWU9J21vbmV5SW5wdXQnPjwvaW5wdXQ+XG4vLyAgICAgICAgIDxpbnB1dCBpZD0nZGVzY3JpcHRpb24nPjwvaW5wdXQ+XG4vLyAgICAgICAgIDxidXR0b24gaWQ9J3N1Ym1pdCcgY2xhc3NOYW1lPVwic3VibWl0XCI+5paw5aKe57SA6YyEPC9idXR0b24+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgPGhyIC8+XG4vLyAgICAgPGRpdiBpZD0nbGlzdCc+XG4vLyAgICAgPC9kaXY+XG4vLyAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIj48TGluayBocmVmPVwiL1wiPui/lOWbnummlumggTwvTGluaz48L2J1dHRvbj5cbi8vICAgICA8Lz5cbi8vIH1cblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudGluZ1BhZ2UoKSB7XG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJ2luY29tZScpO1xuICAgIGNvbnN0IFttb25leSwgc2V0TW9uZXldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVR5cGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRUeXBlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTW9uZXlDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRNb25leShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIOWJteW7uuS4gOWAi+aWsOizh+aWmemghVxuICAgICAgICBjb25zdCBuZXdJdGVtID0ge1xuICAgICAgICB0eXBlLFxuICAgICAgICBtb25leSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g5bCH5paw6LOH5paZ6aCF5re75Yqg5Yiw5YiX6KGoXG4gICAgICAgIHNldExpc3QoWy4uLmxpc3QsIG5ld0l0ZW1dKTtcblxuICAgICAgICAvLyDmuIXnqbrovLjlhaXmrITkvY1cbiAgICAgICAgc2V0VHlwZSgnaW5jb21lJyk7XG4gICAgICAgIHNldE1vbmV5KCcnKTtcbiAgICAgICAgc2V0RGVzY3JpcHRpb24oJycpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXRvcCc+XG4gICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt0eXBlfSBvbkNoYW5nZT17aGFuZGxlVHlwZUNoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdpbmNvbWUnPuaUtuWFpTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZXhwZW5zZSc+5pSv5Ye6PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9J21vbmV5J1xuICAgICAgICAgICAgY2xhc3NOYW1lPSdtb25leUlucHV0J1xuICAgICAgICAgICAgdmFsdWU9e21vbmV5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU1vbmV5Q2hhbmdlfVxuICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGVzY3JpcHRpb25DaGFuZ2V9XG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9J3N1Ym1pdCcgY2xhc3NOYW1lPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICDmlrDlop7ntIDpjIRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxkaXYgaWQ9J2xpc3QnPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAge2xpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICB7aXRlbS50eXBlID09PSAnaW5jb21lJyA/ICfmlLblhaUnIDogJ+aUr+WHuid9OiB7aXRlbS5tb25leX0gLXsnICd9XG4gICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4nPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+6L+U5Zue6aaW6aCBPC9MaW5rPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFjY291bnRpbmdQYWdlIiwidHlwZSIsInNldFR5cGUiLCJtb25leSIsInNldE1vbmV5IiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImxpc3QiLCJzZXRMaXN0IiwiaGFuZGxlVHlwZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU1vbmV5Q2hhbmdlIiwiaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJuZXdJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJpbnB1dCIsImlkIiwiYnV0dG9uIiwib25DbGljayIsImhyIiwidWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJsaSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/accounting.js\n"));

/***/ })

});
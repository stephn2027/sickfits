/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react-hooks/exhaustive-deps */\n\nfunction useForm() {\n  _s();\n\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var initialValues = Object.keys(initialState).join('');\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setInputs(initialState);\n  }, [initialValues]);\n\n  var handleChange = function handleChange(e) {\n    var _e$target = e.target,\n        value = _e$target.value,\n        name = _e$target.name,\n        type = _e$target.type;\n\n    if (type === 'number') {\n      value = Number(value);\n    }\n\n    if (type === 'file') {\n      var _e$target$files = (0,_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(e.target.files, 1);\n\n      value = _e$target$files[0];\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value)));\n  };\n\n  function resetForm() {\n    setInputs(initialState);\n  }\n\n  function clearForm() {\n    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {\n      var _ref2 = (0,_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),\n          key = _ref2[0],\n          value = _ref2[1];\n\n      return [key, ''];\n    }));\n    setInputs(blankState);\n  }\n\n  return {\n    inputs: inputs,\n    handleChange: handleChange,\n    resetForm: resetForm,\n    clearForm: clearForm\n  };\n}\n\n_s(useForm, \"AtXZh5XSrUXBoXVYJcGKPxzqYTk=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanM/ZjBlMiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiaW5pdGlhbFN0YXRlIiwidXNlU3RhdGUiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJpbml0aWFsVmFsdWVzIiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJ1c2VFZmZlY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwidHlwZSIsIk51bWJlciIsImZpbGVzIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLE9BQVQsR0FBb0M7QUFBQTs7QUFBQSxNQUFuQkMsWUFBbUIsdUVBQUosRUFBSTs7QUFBQSxrQkFDckJDLCtDQUFRLENBQUNELFlBQUQsQ0FEYTtBQUFBLE1BQzFDRSxNQUQwQztBQUFBLE1BQ2xDQyxTQURrQzs7QUFFakQsTUFBTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWU4sWUFBWixFQUEwQk8sSUFBMUIsQ0FBK0IsRUFBL0IsQ0FBdEI7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RMLGFBQVMsQ0FBQ0gsWUFBRCxDQUFUO0FBQ0QsR0FGUSxFQUVOLENBQUNJLGFBQUQsQ0FGTSxDQUFUOztBQUlBLE1BQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUFBLG9CQUNFQSxDQUFDLENBQUNDLE1BREo7QUFBQSxRQUNwQkMsS0FEb0IsYUFDcEJBLEtBRG9CO0FBQUEsUUFDYkMsSUFEYSxhQUNiQSxJQURhO0FBQUEsUUFDUEMsSUFETyxhQUNQQSxJQURPOztBQUUxQixRQUFJQSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUNyQkYsV0FBSyxHQUFHRyxNQUFNLENBQUNILEtBQUQsQ0FBZDtBQUNEOztBQUNELFFBQUlFLElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQUEsK01BQ1RKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSyxLQURBOztBQUNsQkosV0FEa0I7QUFFcEI7O0FBQ0RULGFBQVMsaUNBQ0pELE1BREksK0xBRU5XLElBRk0sRUFFQ0QsS0FGRCxHQUFUO0FBSUQsR0FaRDs7QUFjQSxXQUFTSyxTQUFULEdBQXFCO0FBQ25CZCxhQUFTLENBQUNILFlBQUQsQ0FBVDtBQUNEOztBQUNELFdBQVNrQixTQUFULEdBQXFCO0FBQ25CLFFBQU1DLFVBQVUsR0FBR2QsTUFBTSxDQUFDZSxXQUFQLENBQ2pCZixNQUFNLENBQUNnQixPQUFQLENBQWVuQixNQUFmLEVBQXVCb0IsR0FBdkIsQ0FBMkI7QUFBQTtBQUFBLFVBQUVDLEdBQUY7QUFBQSxVQUFPWCxLQUFQOztBQUFBLGFBQWtCLENBQUNXLEdBQUQsRUFBTSxFQUFOLENBQWxCO0FBQUEsS0FBM0IsQ0FEaUIsQ0FBbkI7QUFHQXBCLGFBQVMsQ0FBQ2dCLFVBQUQsQ0FBVDtBQUNEOztBQUNELFNBQU87QUFBRWpCLFVBQU0sRUFBTkEsTUFBRjtBQUFVTyxnQkFBWSxFQUFaQSxZQUFWO0FBQXdCUSxhQUFTLEVBQVRBLFNBQXhCO0FBQW1DQyxhQUFTLEVBQVRBO0FBQW5DLEdBQVA7QUFDRDs7R0FoQ3VCbkIsTyIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybShpbml0aWFsU3RhdGUgPSB7fSkge1xuICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IE9iamVjdC5rZXlzKGluaXRpYWxTdGF0ZSkuam9pbignJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbnB1dHMoaW5pdGlhbFN0YXRlKTtcbiAgfSwgW2luaXRpYWxWYWx1ZXNdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xuICAgIH1cbiAgICBzZXRJbnB1dHMoe1xuICAgICAgLi4uaW5wdXRzLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiByZXNldEZvcm0oKSB7XG4gICAgc2V0SW5wdXRzKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICAgIGNvbnN0IGJsYW5rU3RhdGUgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICBPYmplY3QuZW50cmllcyhpbnB1dHMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCAnJ10pXG4gICAgKTtcbiAgICBzZXRJbnB1dHMoYmxhbmtTdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgY2xlYXJGb3JtIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/update",{

/***/ "./components/UpdateProduct.jsx":
/*!**************************************!*\
  !*** ./components/UpdateProduct.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var _Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _helpers_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/LoadingProgress */ \"./components/helpers/LoadingProgress.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/kor/React Projects/Advanced-React-master/sick-fits/frontend/components/UpdateProduct.jsx\",\n    _s = $RefreshSig$();\n\nfunction _templateObject2() {\n  var data = (0,_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation UPDATE_SINGLE_PRODUCT(\\n    $id: ID!\\n    $name: String\\n    $description: String\\n    $price: Int\\n  ) {\\n    updateProduct(\\n      id: $id\\n      data: { id: $id, name: $name, description: $description, price: $price }\\n    ) {\\n      id\\n      name\\n      description\\n      price\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\\n    Product(where: { id: $id }) {\\n      id\\n      name\\n      price\\n      description\\n      photo {\\n        altText\\n        image {\\n          publicUrlTransformed\\n        }\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar SINGLE_PRODUCT_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject());\nvar UPDATE_SINGLE_PRODUCT = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_10__.default)(_templateObject2());\nfunction UpdateProduct(_ref) {\n  _s();\n\n  var id = _ref.id;\n\n  // 1. get the exsisting product\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id: id\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_helpers_LoadingProgress__WEBPACK_IMPORTED_MODULE_9__.default, {\n    value: 100\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n    children: [\"There is an error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 21\n  }, this); // 2. we need to get the mutation to update product\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation)(UPDATE_SINGLE_PRODUCT, {\n    variables: {\n      id: id // TODO pass in updates to product here\n\n    }\n  }),\n      _useMutation2 = (0,_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 2),\n      updateProduct = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      updateData = _useMutation2$.data,\n      updateError = _useMutation2$.error,\n      updateLoading = _useMutation2$.loading; // 3. Create some state from the form inputs\n\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_8__.default)(data.Product),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      resetForm = _useForm.resetForm,\n      clearForm = _useForm.clearForm; // 4. we need the form to handle updates\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_6__.default, {\n      onSubmit: /*#__PURE__*/function () {\n        var _ref2 = (0,_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n          return _Users_kor_React_Projects_Advanced_React_master_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n            while (1) {\n              switch (_context.prev = _context.next) {\n                case 0:\n                  e.preventDefault(); // todo: handle Update\n                  //   const res = await createProduct();\n                  //   clearForm();\n                  //   // Go to products page after submitting the form\n                  //   Router.push({\n                  //     pathname: `/products/${res.data.createProduct.id}`,\n                  //   });\n\n                case 1:\n                case \"end\":\n                  return _context.stop();\n              }\n            }\n          }, _callee);\n        }));\n\n        return function (_x) {\n          return _ref2.apply(this, arguments);\n        };\n      }(),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__.default, {\n        error: error || updateError\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"fieldset\", {\n        disabled: updateLoading,\n        \"aria-busy\": updateLoading,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"name\",\n          children: [' ', \"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n            type: \"text\",\n            name: \"name\",\n            id: \"name\",\n            placeholder: \"Name\",\n            value: inputs.name,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"price\",\n          children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n            type: \"number\",\n            name: \"price\",\n            id: \"price\",\n            placeholder: \"Price\",\n            value: inputs.price,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"label\", {\n          htmlFor: \"description\",\n          children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"textarea\", {\n            name: \"description\",\n            id: \"description\",\n            placeholder: \"About this item\",\n            value: inputs.description,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Update Product\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}\n\n_s(UpdateProduct, \"MowYcEJx5IWA7vvYxe35+97f6+s=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useQuery, _apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation, _lib_useForm__WEBPACK_IMPORTED_MODULE_8__.default];\n});\n\n_c = UpdateProduct;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpdateProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzeD81YmQ3Il0sIm5hbWVzIjpbIlNJTkdMRV9QUk9EVUNUX1FVRVJZIiwiZ3FsIiwiVVBEQVRFX1NJTkdMRV9QUk9EVUNUIiwiVXBkYXRlUHJvZHVjdCIsImlkIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwibWVzc2FnZSIsInVzZU11dGF0aW9uIiwidXBkYXRlUHJvZHVjdCIsInVwZGF0ZURhdGEiLCJ1cGRhdGVFcnJvciIsInVwZGF0ZUxvYWRpbmciLCJ1c2VGb3JtIiwiUHJvZHVjdCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0MscURBQUgsbUJBQTFCO0FBaUJBLElBQU1DLHFCQUFxQixHQUFHRCxxREFBSCxvQkFBM0I7QUFtQmUsU0FBU0UsYUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTs7QUFDNUM7QUFENEMsa0JBRVhDLHlEQUFRLENBQUNMLG9CQUFELEVBQXVCO0FBQzlETSxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGO0FBRG1ELEdBQXZCLENBRkc7QUFBQSxNQUVwQ0csSUFGb0MsYUFFcENBLElBRm9DO0FBQUEsTUFFOUJDLEtBRjhCLGFBRTlCQSxLQUY4QjtBQUFBLE1BRXZCQyxPQUZ1QixhQUV2QkEsT0FGdUI7O0FBSzVDLE1BQUlBLE9BQUosRUFBYSxvQkFBTyw4REFBQyw2REFBRDtBQUFnQixTQUFLLEVBQUU7QUFBdkI7QUFBQTtB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OiIuL2NvbXBvbmVudHMvVXBkYXRlUHJvZHVjdC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcbmltcG9ydCBDaXJjdWxhclN0YXRpYyBmcm9tICcuL2hlbHBlcnMvTG9hZGluZ1Byb2dyZXNzJztcblxuY29uc3QgU0lOR0xFX1BST0RVQ1RfUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFNJTkdMRV9QUk9EVUNUX1FVRVJZKCRpZDogSUQhKSB7XG4gICAgUHJvZHVjdCh3aGVyZTogeyBpZDogJGlkIH0pIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBwcmljZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHBob3RvIHtcbiAgICAgICAgYWx0VGV4dFxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVVBEQVRFX1NJTkdMRV9QUk9EVUNUID0gZ3FsYFxuICBtdXRhdGlvbiBVUERBVEVfU0lOR0xFX1BST0RVQ1QoXG4gICAgJGlkOiBJRCFcbiAgICAkbmFtZTogU3RyaW5nXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmdcbiAgICAkcHJpY2U6IEludFxuICApIHtcbiAgICB1cGRhdGVQcm9kdWN0KFxuICAgICAgaWQ6ICRpZFxuICAgICAgZGF0YTogeyBpZDogJGlkLCBuYW1lOiAkbmFtZSwgZGVzY3JpcHRpb246ICRkZXNjcmlwdGlvbiwgcHJpY2U6ICRwcmljZSB9XG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIHByaWNlXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGRhdGVQcm9kdWN0KHsgaWQgfSkge1xuICAvLyAxLiBnZXQgdGhlIGV4c2lzdGluZyBwcm9kdWN0XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFNJTkdMRV9QUk9EVUNUX1FVRVJZLCB7XG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gIH0pO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxDaXJjdWxhclN0YXRpYyB2YWx1ZT17MTAwfSAvPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+VGhlcmUgaXMgYW4gZXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XG4gIC8vIDIuIHdlIG5lZWQgdG8gZ2V0IHRoZSBtdXRhdGlvbiB0byB1cGRhdGUgcHJvZHVjdFxuXG4gIGNvbnN0IFtcbiAgICB1cGRhdGVQcm9kdWN0LFxuICAgIHsgZGF0YTogdXBkYXRlRGF0YSwgZXJyb3I6IHVwZGF0ZUVycm9yLCBsb2FkaW5nOiB1cGRhdGVMb2FkaW5nIH0sXG4gIF0gPSB1c2VNdXRhdGlvbihVUERBVEVfU0lOR0xFX1BST0RVQ1QsIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkLFxuICAgICAgLy8gVE9ETyBwYXNzIGluIHVwZGF0ZXMgdG8gcHJvZHVjdCBoZXJlXG4gICAgfSxcbiAgfSk7XG4gIC8vIDMuIENyZWF0ZSBzb21lIHN0YXRlIGZyb20gdGhlIGZvcm0gaW5wdXRzXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSwgY2xlYXJGb3JtIH0gPSB1c2VGb3JtKGRhdGEuUHJvZHVjdCk7XG4gIFxuICAvLyA0LiB3ZSBuZWVkIHRoZSBmb3JtIHRvIGhhbmRsZSB1cGRhdGVzXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxGb3JtXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAvLyB0b2RvOiBoYW5kbGUgVXBkYXRlXG5cbiAgICAgICAgICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZVByb2R1Y3QoKTtcblxuICAgICAgICAgIC8vICAgY2xlYXJGb3JtKCk7XG4gICAgICAgICAgLy8gICAvLyBHbyB0byBwcm9kdWN0cyBwYWdlIGFmdGVyIHN1Ym1pdHRpbmcgdGhlIGZvcm1cbiAgICAgICAgICAvLyAgIFJvdXRlci5wdXNoKHtcbiAgICAgICAgICAvLyAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdHMvJHtyZXMuZGF0YS5jcmVhdGVQcm9kdWN0LmlkfWAsXG4gICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3IgfHwgdXBkYXRlRXJyb3J9IC8+XG4gICAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17dXBkYXRlTG9hZGluZ30gYXJpYS1idXN5PXt1cGRhdGVMb2FkaW5nfT5cbiAgICAgICAgICBcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XG4gICAgICAgICAgICBQcmljZVxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgICBpZD1cInByaWNlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcmljZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgRGVzY3JpcHRpb25cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBYm91dCB0aGlzIGl0ZW1cIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBQcm9kdWN0PC9idXR0b24+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UpdateProduct.jsx\n");

/***/ })

});
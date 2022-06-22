/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/sell";
exports.ids = ["pages/sell"];
exports.modules = {

/***/ "./components/CreateProduct.jsx":
/*!**************************************!*\
  !*** ./components/CreateProduct.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Products */ \"./components/Products.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n\nvar _jsxFileName = \"/Users/kor/React Projects/Advanced-React-master/sick-fits/frontend/components/CreateProduct.jsx\";\n\n\n\n\n\n\n\nconst CREATE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  mutation CREATE_PRODUCT_MUTATION(\n    # which variable are getting passed in and what are those variables\n    $name: String!\n    $price: Int!\n    $description: String!\n    $image: Upload\n  ) {\n    createProduct(\n      data: {\n        name: $name\n        price: $price\n        description: $description\n        status: \"AVAILABLE\"\n        photo: { create: { image: $image, altText: $name } }\n      }\n    ) {\n      id\n      price\n      description\n      name\n    }\n  }\n`;\nfunction CreateProduct() {\n  const {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default)({\n    name: 'steph',\n    price: 23,\n    description: 'nice shoes',\n    image: ''\n  });\n  const [createProduct, {\n    error,\n    loading,\n    data\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(CREATE_PRODUCT_MUTATION, {\n    variables: inputs,\n    refetchQueries: [{\n      query: _Products__WEBPACK_IMPORTED_MODULE_4__.ALL_PRODUCTS_QUERY\n    }]\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_7__.default, {\n    onSubmit: async e => {\n      e.preventDefault();\n      const res = await createProduct();\n\n      if (res) {\n        clearForm(); // Go to products page after submitting the form\n\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push({\n          pathname: `/product/${res.data.createProduct.id}`\n        });\n      }\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {\n      error: error\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n      disabled: loading,\n      \"aria-busy\": loading,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"image\",\n        children: [' ', \"Image\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          required: true,\n          type: \"file\",\n          name: \"image\",\n          id: \"image\",\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"name\",\n        children: [' ', \"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"name\",\n          id: \"name\",\n          placeholder: \"Name\",\n          value: inputs.name,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"price\",\n        children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"number\",\n          name: \"price\",\n          id: \"price\",\n          placeholder: \"Price\",\n          value: inputs.price,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"description\",\n        children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n          name: \"description\",\n          id: \"description\",\n          placeholder: \"About this item\",\n          value: inputs.description,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: \"+ Add Product\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanN4P2E2NjMiXSwibmFtZXMiOlsiQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04iLCJncWwiLCJDcmVhdGVQcm9kdWN0IiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwidXNlRm9ybSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJjcmVhdGVQcm9kdWN0IiwiZXJyb3IiLCJsb2FkaW5nIiwiZGF0YSIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkFMTF9QUk9EVUNUU19RVUVSWSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsIlJvdXRlciIsInBhdGhuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUdDLG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F2QkE7QUF3QmUsU0FBU0MsYUFBVCxHQUF5QjtBQUN0QyxRQUFNO0FBQUVDLFVBQUY7QUFBVUMsZ0JBQVY7QUFBd0JDLGFBQXhCO0FBQW1DQztBQUFuQyxNQUFpREMscURBQU8sQ0FBQztBQUM3REMsUUFBSSxFQUFFLE9BRHVEO0FBRTdEQyxTQUFLLEVBQUUsRUFGc0Q7QUFHN0RDLGVBQVcsRUFBRSxZQUhnRDtBQUk3REMsU0FBSyxFQUFFO0FBSnNELEdBQUQsQ0FBOUQ7QUFPQSxRQUFNLENBQUNDLGFBQUQsRUFBZ0I7QUFBRUMsU0FBRjtBQUFTQyxXQUFUO0FBQWtCQztBQUFsQixHQUFoQixJQUE0Q0MsMkRBQVcsQ0FDM0RoQix1QkFEMkQsRUFFM0Q7QUFDRWlCLGFBQVMsRUFBRWQsTUFEYjtBQUVFZSxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyx5REFBa0JBO0FBQTNCLEtBQUQ7QUFGbEIsR0FGMkQsQ0FBN0Q7QUFRQSxzQkFDRSw4REFBQyxpREFBRDtBQUNFLFlBQVEsRUFBRSxNQUFPQyxDQUFQLElBQWE7QUFDckJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUVBLFlBQU1DLEdBQUcsR0FBRyxNQUFNWCxhQUFhLEVBQS9COztBQUNBLFVBQUlXLEdBQUosRUFBUztBQUNQakIsaUJBQVMsR0FERixDQUVQOztBQUNBa0IsK0RBQUEsQ0FBWTtBQUNWQyxrQkFBUSxFQUFHLFlBQVdGLEdBQUcsQ0FBQ1IsSUFBSixDQUFTSCxhQUFULENBQXVCYyxFQUFHO0FBRHRDLFNBQVo7QUFHRDtBQUNGLEtBWkg7QUFBQSw0QkFjRSw4REFBQyxrREFBRDtBQUFjLFdBQUssRUFBRWI7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGLGVBZUU7QUFBVSxjQUFRLEVBQUVDLE9BQXBCO0FBQTZCLG1CQUFXQSxPQUF4QztBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSxtQkFDRyxHQURILHdCQUdFO0FBQ0Usa0JBQVEsTUFEVjtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UsY0FBSSxFQUFDLE9BSFA7QUFJRSxZQUFFLEVBQUMsT0FKTDtBQUtFLGtCQUFRLEVBQUVWO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVlFO0FBQU8sZUFBTyxFQUFDLE1BQWY7QUFBQSxtQkFDRyxHQURILHVCQUdFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLFlBQUUsRUFBQyxNQUhMO0FBSUUscUJBQVcsRUFBQyxNQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNLLElBTGhCO0FBTUUsa0JBQVEsRUFBRUo7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBd0JFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxZQUFFLEVBQUMsT0FITDtBQUlFLHFCQUFXLEVBQUMsT0FKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDTSxLQUxoQjtBQU1FLGtCQUFRLEVBQUVMO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkYsZUFtQ0U7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUFBLCtDQUVFO0FBQ0UsY0FBSSxFQUFDLGFBRFA7QUFFRSxZQUFFLEVBQUMsYUFGTDtBQUdFLHFCQUFXLEVBQUMsaUJBSGQ7QUFJRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ08sV0FKaEI7QUFLRSxrQkFBUSxFQUFFTjtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNGLGVBNkNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpRUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWF0ZVByb2R1Y3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgQUxMX1BST0RVQ1RTX1FVRVJZIH0gZnJvbSAnLi9Qcm9kdWN0cyc7XG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xuXG5jb25zdCBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcbiAgbXV0YXRpb24gQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04oXG4gICAgIyB3aGljaCB2YXJpYWJsZSBhcmUgZ2V0dGluZyBwYXNzZWQgaW4gYW5kIHdoYXQgYXJlIHRob3NlIHZhcmlhYmxlc1xuICAgICRuYW1lOiBTdHJpbmchXG4gICAgJHByaWNlOiBJbnQhXG4gICAgJGRlc2NyaXB0aW9uOiBTdHJpbmchXG4gICAgJGltYWdlOiBVcGxvYWRcbiAgKSB7XG4gICAgY3JlYXRlUHJvZHVjdChcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJG5hbWVcbiAgICAgICAgcHJpY2U6ICRwcmljZVxuICAgICAgICBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uXG4gICAgICAgIHN0YXR1czogXCJBVkFJTEFCTEVcIlxuICAgICAgICBwaG90bzogeyBjcmVhdGU6IHsgaW1hZ2U6ICRpbWFnZSwgYWx0VGV4dDogJG5hbWUgfSB9XG4gICAgICB9XG4gICAgKSB7XG4gICAgICBpZFxuICAgICAgcHJpY2VcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUHJvZHVjdCgpIHtcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtLCBjbGVhckZvcm0gfSA9IHVzZUZvcm0oe1xuICAgIG5hbWU6ICdzdGVwaCcsXG4gICAgcHJpY2U6IDIzLFxuICAgIGRlc2NyaXB0aW9uOiAnbmljZSBzaG9lcycsXG4gICAgaW1hZ2U6ICcnLFxuICB9KTtcblxuICBjb25zdCBbY3JlYXRlUHJvZHVjdCwgeyBlcnJvciwgbG9hZGluZywgZGF0YSB9XSA9IHVzZU11dGF0aW9uKFxuICAgIENSRUFURV9QUk9EVUNUX01VVEFUSU9OLFxuICAgIHtcbiAgICAgIHZhcmlhYmxlczogaW5wdXRzLFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBBTExfUFJPRFVDVFNfUVVFUlkgfV0sXG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1cbiAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgY2xlYXJGb3JtKCk7XG4gICAgICAgICAgLy8gR28gdG8gcHJvZHVjdHMgcGFnZSBhZnRlciBzdWJtaXR0aW5nIHRoZSBmb3JtXG4gICAgICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3Jlcy5kYXRhLmNyZWF0ZVByb2R1Y3QuaWR9YCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz5cbiAgICAgIDxmaWVsZHNldCBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfT5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbWFnZVwiPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgSW1hZ2VcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgTmFtZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICAgICBQcmljZVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxuICAgICAgICAgICAgaWQ9XCJwcmljZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBYm91dCB0aGlzIGl0ZW1cIlxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+KyBBZGQgUHJvZHVjdDwvYnV0dG9uPlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CreateProduct.jsx\n");

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst loading = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)([\"from{background-position:0 0;}to{background-position:100% 100%;}\"]);\nconst Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form.withConfig({\n  displayName: \"Form\",\n  componentId: \"sc-1xszr8q-0\"\n})([\"box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--maroon);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;cursor:pointer;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:1vh;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:\", \" 1.8s linear infinite;}}\"], loading);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtLmpzPzliMzUiXSwibmFtZXMiOlsibG9hZGluZyIsImtleWZyYW1lcyIsIkZvcm0iLCJzdHlsZWQiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyw0REFBSCxzRUFBYjtBQVlBLE1BQU1DLElBQUksR0FBR0Msd0VBQUg7QUFBQTtBQUFBO0FBQUEsK3VCQXVEU0gsT0F2RFQsQ0FBVjtBQTREQSwrREFBZUUsSUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3R5bGVzL0Zvcm0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLW1hcm9vbik7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGZpZWxkc2V0IHtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGhlaWdodDogMXZoO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICNmZjMwMTkgMCUsXG4gICAgICAgICNlMmIwNGEgNTAlLFxuICAgICAgICAjZmYzMDE5IDEwMCVcbiAgICAgICk7XG4gICAgfVxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDEuOHMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styles/Form.js\n");

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useForm; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable react-hooks/exhaustive-deps */\n\nfunction useForm(initialState = {}) {\n  const {\n    0: inputs,\n    1: setInputs\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);\n  const initialValues = Object.keys(initialState).join('');\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setInputs(initialState);\n  }, [initialValues]);\n\n  const handleChange = e => {\n    let {\n      value,\n      name,\n      type\n    } = e.target;\n\n    if (type === 'number') {\n      value = Number(value);\n    }\n\n    if (type === 'file') {\n      [value] = e.target.files;\n    }\n\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {\n      [name]: value\n    }));\n  };\n\n  function resetForm() {\n    setInputs(initialState);\n  }\n\n  function clearForm() {\n    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']));\n    setInputs(blankState);\n  }\n\n  return {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvdXNlRm9ybS5qcz9mMGUyIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJpbml0aWFsU3RhdGUiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJ1c2VTdGF0ZSIsImluaXRpYWxWYWx1ZXMiLCJPYmplY3QiLCJrZXlzIiwiam9pbiIsInVzZUVmZmVjdCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsIm5hbWUiLCJ0eXBlIiwidGFyZ2V0IiwiTnVtYmVyIiwiZmlsZXMiLCJyZXNldEZvcm0iLCJjbGVhckZvcm0iLCJibGFua1N0YXRlIiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxDQUFpQkMsWUFBWSxHQUFHLEVBQWhDLEVBQW9DO0FBQ2pELFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsK0NBQVEsQ0FBQ0gsWUFBRCxDQUFwQztBQUNBLFFBQU1JLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlOLFlBQVosRUFBMEJPLElBQTFCLENBQStCLEVBQS9CLENBQXRCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkTixhQUFTLENBQUNGLFlBQUQsQ0FBVDtBQUNELEdBRlEsRUFFTixDQUFDSSxhQUFELENBRk0sQ0FBVDs7QUFJQSxRQUFNSyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMxQixRQUFJO0FBQUVDLFdBQUY7QUFBU0MsVUFBVDtBQUFlQztBQUFmLFFBQXdCSCxDQUFDLENBQUNJLE1BQTlCOztBQUNBLFFBQUlELElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCRixXQUFLLEdBQUdJLE1BQU0sQ0FBQ0osS0FBRCxDQUFkO0FBQ0Q7O0FBQ0QsUUFBSUUsSUFBSSxLQUFLLE1BQWIsRUFBcUI7QUFDbkIsT0FBQ0YsS0FBRCxJQUFVRCxDQUFDLENBQUNJLE1BQUYsQ0FBU0UsS0FBbkI7QUFDRDs7QUFDRGQsYUFBUyxpQ0FDSkQsTUFESTtBQUVQLE9BQUNXLElBQUQsR0FBUUQ7QUFGRCxPQUFUO0FBSUQsR0FaRDs7QUFjQSxXQUFTTSxTQUFULEdBQXFCO0FBQ25CZixhQUFTLENBQUNGLFlBQUQsQ0FBVDtBQUNEOztBQUNELFdBQVNrQixTQUFULEdBQXFCO0FBQ25CLFVBQU1DLFVBQVUsR0FBR2QsTUFBTSxDQUFDZSxXQUFQLENBQ2pCZixNQUFNLENBQUNnQixPQUFQLENBQWVwQixNQUFmLEVBQXVCcUIsR0FBdkIsQ0FBMkIsQ0FBQyxDQUFDQyxHQUFELEVBQU1aLEtBQU4sQ0FBRCxLQUFrQixDQUFDWSxHQUFELEVBQU0sRUFBTixDQUE3QyxDQURpQixDQUFuQjtBQUdBckIsYUFBUyxDQUFDaUIsVUFBRCxDQUFUO0FBQ0Q7O0FBQ0QsU0FBTztBQUFFbEIsVUFBRjtBQUFVUSxnQkFBVjtBQUF3QlEsYUFBeEI7QUFBbUNDO0FBQW5DLEdBQVA7QUFDRCIsImZpbGUiOiIuL2xpYi91c2VGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWxTdGF0ZSA9IHt9KSB7XG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuICBjb25zdCBpbml0aWFsVmFsdWVzID0gT2JqZWN0LmtleXMoaW5pdGlhbFN0YXRlKS5qb2luKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElucHV0cyhpbml0aWFsU3RhdGUpO1xuICB9LCBbaW5pdGlhbFZhbHVlc10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgbGV0IHsgdmFsdWUsIG5hbWUsIHR5cGUgfSA9IGUudGFyZ2V0O1xuICAgIGlmICh0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ZpbGUnKSB7XG4gICAgICBbdmFsdWVdID0gZS50YXJnZXQuZmlsZXM7XG4gICAgfVxuICAgIHNldElucHV0cyh7XG4gICAgICAuLi5pbnB1dHMsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgICBzZXRJbnB1dHMoaW5pdGlhbFN0YXRlKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcbiAgICAgIE9iamVjdC5lbnRyaWVzKGlucHV0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IFtrZXksICcnXSlcbiAgICApO1xuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcbiAgfVxuICByZXR1cm4geyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtLCBjbGVhckZvcm0gfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/useForm.js\n");

/***/ }),

/***/ "./pages/sell.js":
/*!***********************!*\
  !*** ./pages/sell.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ sell; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CreateProduct */ \"./components/CreateProduct.jsx\");\n\nvar _jsxFileName = \"/Users/kor/React Projects/Advanced-React-master/sick-fits/frontend/pages/sell.js\";\n\nfunction sell() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateProduct__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9zZWxsLmpzP2UxNDAiXSwibmFtZXMiOlsic2VsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwiZmlsZSI6Ii4vcGFnZXMvc2VsbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDcmVhdGVQcm9kdWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlUHJvZHVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGwoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDcmVhdGVQcm9kdWN0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/sell.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mui/material/Box");;

/***/ }),

/***/ "@mui/material/CircularProgress":
/*!*************************************************!*\
  !*** external "@mui/material/CircularProgress" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mui/material/CircularProgress");;

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@mui/material/Typography");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js-components_Products_js"], function() { return __webpack_exec__("./pages/sell.js"); });
module.exports = __webpack_exports__;

})();
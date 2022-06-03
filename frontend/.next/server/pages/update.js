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
exports.id = "pages/update";
exports.ids = ["pages/update"];
exports.modules = {

/***/ "./components/UpdateProduct.jsx":
/*!**************************************!*\
  !*** ./components/UpdateProduct.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdateProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _helpers_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/LoadingProgress */ \"./components/helpers/LoadingProgress.jsx\");\n\nvar _jsxFileName = \"/Users/kor/React Projects/Advanced-React-master/sick-fits/frontend/components/UpdateProduct.jsx\";\n\n\n\n\n\n\n\nconst SINGLE_PRODUCT_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  query SINGLE_PRODUCT_QUERY($id: ID!) {\n    Product(where: { id: $id }) {\n      id\n      name\n      price\n      description\n      photo {\n        altText\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n`;\nconst UPDATE_SINGLE_PRODUCT = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`\n  mutation UPDATE_SINGLE_PRODUCT(\n    $id: ID!\n    $name: String\n    $description: String\n    $price: Int\n  ) {\n    updateProduct(\n      id: $id\n      data: { name: $name, description: $description, price: $price }\n    ) {\n      id\n      name\n      description\n      price\n    }\n  }\n`;\nfunction UpdateProduct({\n  id\n}) {\n  // 1. get the exsisting product\n  const {\n    data,\n    error,\n    loading\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(SINGLE_PRODUCT_QUERY, {\n    variables: {\n      id\n    }\n  }); // 2. we need to get the mutation to update product\n\n  const [updateProduct, {\n    data: updateData,\n    error: updateError,\n    loading: updateLoading\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(UPDATE_SINGLE_PRODUCT, {\n    variables: {\n      id // TODO pass in updates to product here\n\n    }\n  }); // 3. Create some state from the form inputs\n\n  const {\n    inputs,\n    handleChange,\n    resetForm,\n    clearForm\n  } = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_6__.default)(data === null || data === void 0 ? void 0 : data.Product);\n  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_helpers_LoadingProgress__WEBPACK_IMPORTED_MODULE_7__.default, {\n    value: 100\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 23\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: [\"There is an error: \", error.message]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 21\n  }, this); // 4. we need the form to handle updates\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_4__.default, {\n      onSubmit: async e => {\n        e.preventDefault();\n        const res = await updateProduct({\n          variables: {\n            id,\n            name: inputs.name,\n            description: inputs.description,\n            price: inputs.price\n          }\n        });\n        console.log(res); // todo: handle Update\n        //   const res = await createProduct();\n        //   clearForm();\n        //   // Go to products page after submitting the form\n        //   Router.push({\n        //     pathname: `/products/${res.data.createProduct.id}`,\n        //   });\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {\n        error: error || updateError\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n        disabled: updateLoading,\n        \"aria-busy\": updateLoading,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"name\",\n          children: [' ', \"Name\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"text\",\n            name: \"name\",\n            id: \"name\",\n            placeholder: \"Name\",\n            value: inputs.name,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"price\",\n          children: [\"Price\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            type: \"number\",\n            name: \"price\",\n            id: \"price\",\n            placeholder: \"Price\",\n            value: inputs.price,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          htmlFor: \"description\",\n          children: [\"Description\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n            name: \"description\",\n            id: \"description\",\n            placeholder: \"About this item\",\n            value: inputs.description,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Update Product\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1VwZGF0ZVByb2R1Y3QuanN4PzViZDciXSwibmFtZXMiOlsiU0lOR0xFX1BST0RVQ1RfUVVFUlkiLCJncWwiLCJVUERBVEVfU0lOR0xFX1BST0RVQ1QiLCJVcGRhdGVQcm9kdWN0IiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJ1cGRhdGVQcm9kdWN0IiwidXBkYXRlRGF0YSIsInVwZGF0ZUVycm9yIiwidXBkYXRlTG9hZGluZyIsInVzZU11dGF0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwiY2xlYXJGb3JtIiwidXNlRm9ybSIsIlByb2R1Y3QiLCJtZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLG9CQUFvQixHQUFHQyxvREFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmQTtBQWlCQSxNQUFNQyxxQkFBcUIsR0FBR0Qsb0RBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCQTtBQW1CZSxTQUFTRSxhQUFULENBQXVCO0FBQUVDO0FBQUYsQ0FBdkIsRUFBK0I7QUFDNUM7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQztBQUFmLE1BQTJCQyx3REFBUSxDQUFDUixvQkFBRCxFQUF1QjtBQUM5RFMsYUFBUyxFQUFFO0FBQUVMO0FBQUY7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O0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUVEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuaW1wb3J0IENpcmN1bGFyU3RhdGljIGZyb20gJy4vaGVscGVycy9Mb2FkaW5nUHJvZ3Jlc3MnO1xuXG5jb25zdCBTSU5HTEVfUFJPRFVDVF9RVUVSWSA9IGdxbGBcbiAgcXVlcnkgU0lOR0xFX1BST0RVQ1RfUVVFUlkoJGlkOiBJRCEpIHtcbiAgICBQcm9kdWN0KHdoZXJlOiB7IGlkOiAkaWQgfSkge1xuICAgICAgaWRcbiAgICAgIG5hbWVcbiAgICAgIHByaWNlXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgcGhvdG8ge1xuICAgICAgICBhbHRUZXh0XG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBVUERBVEVfU0lOR0xFX1BST0RVQ1QgPSBncWxgXG4gIG11dGF0aW9uIFVQREFURV9TSU5HTEVfUFJPRFVDVChcbiAgICAkaWQ6IElEIVxuICAgICRuYW1lOiBTdHJpbmdcbiAgICAkZGVzY3JpcHRpb246IFN0cmluZ1xuICAgICRwcmljZTogSW50XG4gICkge1xuICAgIHVwZGF0ZVByb2R1Y3QoXG4gICAgICBpZDogJGlkXG4gICAgICBkYXRhOiB7IG5hbWU6ICRuYW1lLCBkZXNjcmlwdGlvbjogJGRlc2NyaXB0aW9uLCBwcmljZTogJHByaWNlIH1cbiAgICApIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgcHJpY2VcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwZGF0ZVByb2R1Y3QoeyBpZCB9KSB7XG4gIC8vIDEuIGdldCB0aGUgZXhzaXN0aW5nIHByb2R1Y3RcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoU0lOR0xFX1BST0RVQ1RfUVVFUlksIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG5cbiAgLy8gMi4gd2UgbmVlZCB0byBnZXQgdGhlIG11dGF0aW9uIHRvIHVwZGF0ZSBwcm9kdWN0XG5cbiAgY29uc3QgW1xuICAgIHVwZGF0ZVByb2R1Y3QsXG4gICAgeyBkYXRhOiB1cGRhdGVEYXRhLCBlcnJvcjogdXBkYXRlRXJyb3IsIGxvYWRpbmc6IHVwZGF0ZUxvYWRpbmcgfSxcbiAgXSA9IHVzZU11dGF0aW9uKFVQREFURV9TSU5HTEVfUFJPRFVDVCwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQsXG4gICAgICAvLyBUT0RPIHBhc3MgaW4gdXBkYXRlcyB0byBwcm9kdWN0IGhlcmVcbiAgICB9LFxuICB9KTtcbiAgLy8gMy4gQ3JlYXRlIHNvbWUgc3RhdGUgZnJvbSB0aGUgZm9ybSBpbnB1dHNcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtLCBjbGVhckZvcm0gfSA9IHVzZUZvcm0oZGF0YT8uUHJvZHVjdCk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPENpcmN1bGFyU3RhdGljIHZhbHVlPXsxMDB9IC8+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5UaGVyZSBpcyBhbiBlcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcbiAgLy8gNC4gd2UgbmVlZCB0aGUgZm9ybSB0byBoYW5kbGUgdXBkYXRlc1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Rm9ybVxuICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGUpID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdXBkYXRlUHJvZHVjdCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIG5hbWU6IGlucHV0cy5uYW1lLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaW5wdXRzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBwcmljZTogaW5wdXRzLnByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIC8vIHRvZG86IGhhbmRsZSBVcGRhdGVcblxuICAgICAgICAgIC8vICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlUHJvZHVjdCgpO1xuXG4gICAgICAgICAgLy8gICBjbGVhckZvcm0oKTtcbiAgICAgICAgICAvLyAgIC8vIEdvIHRvIHByb2R1Y3RzIHBhZ2UgYWZ0ZXIgc3VibWl0dGluZyB0aGUgZm9ybVxuICAgICAgICAgIC8vICAgUm91dGVyLnB1c2goe1xuICAgICAgICAgIC8vICAgICBwYXRobmFtZTogYC9wcm9kdWN0cy8ke3Jlcy5kYXRhLmNyZWF0ZVByb2R1Y3QuaWR9YCxcbiAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvciB8fCB1cGRhdGVFcnJvcn0gLz5cbiAgICAgICAgPGZpZWxkc2V0IGRpc2FibGVkPXt1cGRhdGVMb2FkaW5nfSBhcmlhLWJ1c3k9e3VwZGF0ZUxvYWRpbmd9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxuICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHJpY2VcIj5cbiAgICAgICAgICAgIFByaWNlXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgIGlkPVwicHJpY2VcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByaWNlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wcmljZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFib3V0IHRoaXMgaXRlbVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBkYXRlIFByb2R1Y3Q8L2J1dHRvbj5cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UpdateProduct.jsx\n");

/***/ }),

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UpdatePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UpdateProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UpdateProduct */ \"./components/UpdateProduct.jsx\");\n\nvar _jsxFileName = \"/Users/kor/React Projects/Advanced-React-master/sick-fits/frontend/pages/update.js\";\n\nfunction UpdatePage({\n  query\n}) {\n  console.log(query);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UpdateProduct__WEBPACK_IMPORTED_MODULE_1__.default, {\n      id: query.id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy91cGRhdGUuanM/YTEwNCJdLCJuYW1lcyI6WyJVcGRhdGVQYWdlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsVUFBVCxDQUFvQjtBQUFFQztBQUFGLENBQXBCLEVBQStCO0FBQzVDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsOERBQUQ7QUFBZSxRQUFFLEVBQUVBLEtBQUssQ0FBQ0c7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEIiwiZmlsZSI6Ii4vcGFnZXMvdXBkYXRlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVwZGF0ZVByb2R1Y3QgZnJvbSAnLi4vY29tcG9uZW50cy9VcGRhdGVQcm9kdWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBkYXRlUGFnZSh7IHF1ZXJ5IH0pIHtcbiAgY29uc29sZS5sb2cocXVlcnkpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VXBkYXRlUHJvZHVjdCBpZD17cXVlcnkuaWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/update.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_helpers_LoadingProgress_jsx","components_ErrorMessage_js-components_styles_Form_js-lib_useForm_js"], function() { return __webpack_exec__("./pages/update.js"); });
module.exports = __webpack_exports__;

})();
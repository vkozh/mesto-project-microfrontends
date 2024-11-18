/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkheader"] = self["webpackChunkheader"] || []).push([["src_Header_js-webpack_sharing_consume_default_react_react"],{

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?c217\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"../../node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.svg */ \"./src/images/logo.svg\");\n/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blocks_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/header.css */ \"./src/blocks/header.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n\n\n\n\n\nfunction Header(_ref) {\n  let {\n    loggedIn,\n    email,\n    logout,\n    textButton,\n    link\n  } = _ref;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"header\", {\n    className: \"header container__header\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"img\", {\n      className: \"header__logo\",\n      src: (_images_logo_svg__WEBPACK_IMPORTED_MODULE_1___default()),\n      alt: \"\\u041B\\u043E\\u0433\\u043E\\u0442\\u0438\\u043F\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n      className: \"header__menu\",\n      children: [loggedIn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"p\", {\n        className: \"header__email\",\n        children: email\n      }), loggedIn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"button\", {\n        className: \"header__button\",\n        onClick: logout,\n        children: \"\\u0412\\u044B\\u0439\\u0442\\u0438\"\n      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n        className: \"header__button\",\n        to: link,\n        children: textButton\n      })]\n    })]\n  });\n}\n\n//# sourceURL=webpack://header/./src/Header.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/blocks/header.css":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/blocks/header.css ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.header {\n    border-bottom: 1px solid rgb(84, 84, 84, .7);\n    font-size: 0;\n    display: flex;\n    justify-content: space-between;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://header/./src/blocks/header.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./src/blocks/header.css":
/*!*******************************!*\
  !*** ./src/blocks/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./header.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/blocks/header.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://header/./src/blocks/header.css?");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg width='142' height='33' viewBox='0 0 142 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M0.876465 6.73727V32.6084H4.59039V13.8746H4.8304L12.4604 32.5705H15.5427L23.1726 13.8872H23.4126V32.6084H27.1266V6.73727H22.3894L14.1531 26.848H13.8499L5.61361 6.73727H0.876465Z' fill='white'/%3e %3cpath d='M40.8611 33C45.093 33 48.0868 30.9157 48.9458 27.7576L45.3709 27.1133C44.6887 28.945 43.0465 29.8798 40.899 29.8798C37.6651 29.8798 35.4924 27.7828 35.3913 24.0436H49.1859V22.7046C49.1859 15.6936 44.9919 12.9524 40.5958 12.9524C35.1892 12.9524 31.6268 17.0706 31.6268 23.033C31.6268 29.0587 35.1386 33 40.8611 33ZM35.4039 21.214C35.5555 18.4601 37.5514 16.0726 40.6211 16.0726C43.5518 16.0726 45.4719 18.2454 45.4846 21.214H35.4039Z' fill='white'/%3e %3cpath d='M67.9165 17.9422C67.1333 14.9231 64.7711 12.9524 60.5771 12.9524C56.1937 12.9524 53.0861 15.2641 53.0861 18.7001C53.0861 21.454 54.7536 23.2857 58.3917 24.0942L61.6761 24.8142C63.5457 25.2311 64.4174 26.0648 64.4174 27.2775C64.4174 28.7808 62.813 29.9556 60.3371 29.9556C58.0759 29.9556 56.6232 28.9829 56.1684 27.0754L52.5177 27.6312C53.1493 31.0672 56.0042 33 60.3624 33C65.049 33 68.2955 30.5114 68.2955 26.9996C68.2955 24.2584 66.5522 22.5656 62.9899 21.7445L59.9076 21.0371C57.7727 20.5318 56.8506 19.8118 56.8632 18.498C56.8506 17.0074 58.4675 15.9463 60.615 15.9463C62.9646 15.9463 64.051 17.2474 64.4932 18.5486L67.9165 17.9422Z' fill='white'/%3e %3cpath d='M81.5058 13.2051H77.5266V8.55633H73.7495V13.2051H70.9072V16.2368H73.7495V27.6944C73.7369 31.2188 76.4276 32.9242 79.4088 32.861C80.6089 32.8484 81.4174 32.621 81.8595 32.4568L81.1774 29.3366C80.9247 29.3871 80.4573 29.5008 79.851 29.5008C78.6256 29.5008 77.5266 29.0966 77.5266 26.9112V16.2368H81.5058V13.2051Z' fill='white'/%3e %3cpath d='M93.6487 33C99.1185 33 102.693 28.9955 102.693 22.9951C102.693 16.9569 99.1185 12.9524 93.6487 12.9524C88.1789 12.9524 84.6039 16.9569 84.6039 22.9951C84.6039 28.9955 88.1789 33 93.6487 33ZM93.6613 29.8293C90.0864 29.8293 88.4189 26.7091 88.4189 22.9825C88.4189 19.2686 90.0864 16.1105 93.6613 16.1105C97.211 16.1105 98.8785 19.2686 98.8785 22.9825C98.8785 26.7091 97.211 29.8293 93.6613 29.8293Z' fill='white'/%3e %3cpath d='M106.785 8.8932H107.829V5.52456H109.716C109.791 5.52456 109.863 5.52456 109.935 5.52035L111.754 8.8932H112.966L111.017 5.33087C112.116 4.95611 112.63 4.05921 112.63 2.91387C112.63 1.38956 111.72 0.269491 109.699 0.269491H106.785V8.8932ZM107.829 4.58135V1.19587H109.665C111.063 1.19587 111.602 1.87801 111.602 2.91387C111.602 3.94973 111.063 4.58135 109.682 4.58135H107.829Z' fill='white'/%3e %3cpath d='M118.311 6.24882C118.311 7.46153 117.385 8.01735 116.644 8.01735C115.818 8.01735 115.229 7.411 115.229 6.46778V2.42542H114.235V6.53515C114.235 8.18579 115.111 8.97742 116.323 8.97742C117.3 8.97742 117.94 8.45528 118.244 7.79839H118.311V8.8932H119.305V2.42542H118.311V6.24882Z' fill='white'/%3e %3cpath d='M125.706 3.87393C125.395 2.95598 124.696 2.3412 123.416 2.3412C122.051 2.3412 121.041 3.11599 121.041 4.21079C121.041 5.10348 121.571 5.70142 122.759 5.97933L123.837 6.23198C124.489 6.38357 124.797 6.69516 124.797 7.14151C124.797 7.69733 124.207 8.1521 123.281 8.1521C122.468 8.1521 121.959 7.8026 121.782 7.10782L120.838 7.34363C121.07 8.44264 121.975 9.02795 123.298 9.02795C124.801 9.02795 125.824 8.20684 125.824 7.09098C125.824 6.18987 125.26 5.62141 124.106 5.33929L123.146 5.10348C122.38 4.914 122.034 4.65714 122.034 4.16027C122.034 3.60444 122.624 3.2002 123.416 3.2002C124.283 3.2002 124.641 3.68023 124.813 4.12658L125.706 3.87393Z' fill='white'/%3e %3cpath d='M131.901 3.87393C131.59 2.95598 130.891 2.3412 129.611 2.3412C128.246 2.3412 127.236 3.11599 127.236 4.21079C127.236 5.10348 127.766 5.70142 128.954 5.97933L130.032 6.23198C130.684 6.38357 130.992 6.69516 130.992 7.14151C130.992 7.69733 130.402 8.1521 129.476 8.1521C128.663 8.1521 128.154 7.8026 127.977 7.10782L127.034 7.34363C127.265 8.44264 128.171 9.02795 129.493 9.02795C130.996 9.02795 132.019 8.20684 132.019 7.09098C132.019 6.18987 131.455 5.62141 130.301 5.33929L129.341 5.10348C128.575 4.914 128.229 4.65714 128.229 4.16027C128.229 3.60444 128.819 3.2002 129.611 3.2002C130.478 3.2002 130.836 3.68023 131.009 4.12658L131.901 3.87393Z' fill='white'/%3e %3cpath d='M133.515 8.8932H134.509V2.42542H133.515V8.8932ZM134.02 1.34745C134.408 1.34745 134.728 1.04428 134.728 0.673727C134.728 0.303177 134.408 0 134.02 0C133.633 0 133.313 0.303177 133.313 0.673727C133.313 1.04428 133.633 1.34745 134.02 1.34745Z' fill='white'/%3e %3cpath d='M138.232 9.04479C139.361 9.04479 139.95 8.43843 140.152 8.01735H140.203V8.8932H141.197V4.63187C141.197 2.57701 139.63 2.3412 138.805 2.3412C137.828 2.3412 136.716 2.67807 136.211 3.85709L137.154 4.19395C137.373 3.72234 137.891 3.21705 138.839 3.21705C139.752 3.21705 140.203 3.70129 140.203 4.53082V4.5645C140.203 5.04453 139.714 5.00242 138.535 5.15401C137.335 5.30981 136.026 5.57509 136.026 7.05729C136.026 8.32053 137.003 9.04479 138.232 9.04479ZM138.384 8.1521C137.592 8.1521 137.02 7.79839 137.02 7.10782C137.02 6.34988 137.71 6.11407 138.485 6.01302C138.906 5.96249 140.034 5.84458 140.203 5.64247V6.552C140.203 7.36047 139.563 8.1521 138.384 8.1521Z' fill='white'/%3e %3c/svg%3e\"\n\n//# sourceURL=webpack://header/./src/images/logo.svg?");

/***/ })

}]);
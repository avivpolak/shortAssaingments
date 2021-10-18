/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/helpers/eventHandlers.js":
/*!**************************************!*\
  !*** ./app/helpers/eventHandlers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleClick\": () => (/* binding */ handleClick)\n/* harmony export */ });\n/* harmony import */ var _eventHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventHelpers */ \"./app/helpers/eventHelpers\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./app/helpers/state.js\");\n\r\n\r\n\r\ndocument.getElementById(\"calc\").addEventListener(\"click\", handleClick);\r\n\r\nfunction handleClick(e) {\r\n    const target = e.target.value;\r\n    if (!_state__WEBPACK_IMPORTED_MODULE_1__.state.action) {\r\n        _state__WEBPACK_IMPORTED_MODULE_1__.state.flag = \"n1\";\r\n    }\r\n    if (\"1234567890.\".includes(target) && e.target.id !== \"result\") {\r\n        (0,_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.handleNum)(target);\r\n    }\r\n    if (\"+\".includes(target)) {\r\n        (0,_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.handleAction)(\"add\");\r\n    }\r\n    if (\"-\".includes(target)) {\r\n        (0,_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.handleAction)(\"sub\");\r\n    }\r\n    if (\"/\".includes(target)) {\r\n        (0,_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.handleAction)(\"div\");\r\n    }\r\n    if (\"X\".includes(target)) {\r\n        (0,_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.handleAction)(\"mult\");\r\n    }\r\n    if (\"=\".includes(target)) {\r\n        (0,_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.handleEqual)();\r\n    }\r\n    if (\"Del\".includes(target)) {\r\n        (0,_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.handleDel)();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/eventHandlers.js?");

/***/ }),

/***/ "./app/helpers/eventHelpers":
/*!**********************************!*\
  !*** ./app/helpers/eventHelpers ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleAction\": () => (/* binding */ handleAction),\n/* harmony export */   \"handleEqual\": () => (/* binding */ handleEqual),\n/* harmony export */   \"handleDel\": () => (/* binding */ handleDel),\n/* harmony export */   \"handleNum\": () => (/* binding */ handleNum)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./app/helpers/state.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ \"./app/helpers/math.js\");\n\r\n\r\n\r\nfunction handleAction(action) {\r\n    attachMathFunc(action);\r\n    document.getElementById(action).classList.toggle(\"pressed\");\r\n    document.getElementById(\"mainResult\").value =\r\n        document.getElementById(\"result\").value;\r\n    document.getElementById(\"result\").value = \"\";\r\n    removePressed(action);\r\n    _state__WEBPACK_IMPORTED_MODULE_0__.state.flag = \"n2\";\r\n}\r\nfunction attachMathFunc(action) {\r\n    switch (action) {\r\n        case \"add\":\r\n            _state__WEBPACK_IMPORTED_MODULE_0__.state.action = _math__WEBPACK_IMPORTED_MODULE_1__.add;\r\n            break;\r\n        case \"sub\":\r\n            _state__WEBPACK_IMPORTED_MODULE_0__.state.action = _math__WEBPACK_IMPORTED_MODULE_1__.sub;\r\n            break;\r\n        case \"mult\":\r\n            _state__WEBPACK_IMPORTED_MODULE_0__.state.action = _math__WEBPACK_IMPORTED_MODULE_1__.multiply;\r\n            break;\r\n        case \"div\":\r\n            _state__WEBPACK_IMPORTED_MODULE_0__.state.action = _math__WEBPACK_IMPORTED_MODULE_1__.divide;\r\n            break;\r\n    }\r\n}\r\nfunction handleEqual() {\r\n    if (!_state__WEBPACK_IMPORTED_MODULE_0__.state.action) {\r\n        document.getElementById(\"mainResult\").value = \"choose action\";\r\n        return;\r\n    }\r\n    let result = (0,_math__WEBPACK_IMPORTED_MODULE_1__.equals)(_state__WEBPACK_IMPORTED_MODULE_0__.state.n1, _state__WEBPACK_IMPORTED_MODULE_0__.state.n2, _state__WEBPACK_IMPORTED_MODULE_0__.state.action);\r\n    updateResult(result);\r\n    prepareForNext(result);\r\n    removePressed();\r\n}\r\nfunction prepareForNext(result) {\r\n    _state__WEBPACK_IMPORTED_MODULE_0__.state.n1 = result;\r\n    _state__WEBPACK_IMPORTED_MODULE_0__.state.action = null;\r\n    _state__WEBPACK_IMPORTED_MODULE_0__.state.n2 = 0;\r\n}\r\nfunction GetActionSymbol() {\r\n    switch (_state__WEBPACK_IMPORTED_MODULE_0__.state.action) {\r\n        case _math__WEBPACK_IMPORTED_MODULE_1__.sub:\r\n            return \"-\";\r\n        case _math__WEBPACK_IMPORTED_MODULE_1__.add:\r\n            return \"+\";\r\n\r\n        case _math__WEBPACK_IMPORTED_MODULE_1__.multiply:\r\n            return \"X\";\r\n\r\n        case _math__WEBPACK_IMPORTED_MODULE_1__.divide:\r\n            return \"/\";\r\n    }\r\n}\r\nfunction updateResult(result) {\r\n    document.getElementById(\"result\").value = \"\";\r\n    _state__WEBPACK_IMPORTED_MODULE_0__.state.result = result;\r\n    document.getElementById(\"mainResult\").value =\r\n        _state__WEBPACK_IMPORTED_MODULE_0__.state.n1 +\r\n        \" \" +\r\n        GetActionSymbol() +\r\n        \" \" +\r\n        _state__WEBPACK_IMPORTED_MODULE_0__.state.n2 +\r\n        \" = \" +\r\n        _state__WEBPACK_IMPORTED_MODULE_0__.state.result;\r\n}\r\nfunction DelLast(str) {\r\n    let newNum = parseFloat(str.substring(0, str.length - 1));\r\n    document.getElementById(\"result\").value = newNum;\r\n    _state__WEBPACK_IMPORTED_MODULE_0__.state[_state__WEBPACK_IMPORTED_MODULE_0__.state.flag] = newNum;\r\n}\r\nfunction zero() {\r\n    //makes the little line zero\r\n    let newNum = 0;\r\n    document.getElementById(\"result\").value = newNum;\r\n    _state__WEBPACK_IMPORTED_MODULE_0__.state[_state__WEBPACK_IMPORTED_MODULE_0__.state.flag] = newNum;\r\n}\r\nfunction handleDel() {\r\n    let str = document.getElementById(\"result\").value.toString();\r\n    str.length > 1 ? DelLast(str) : zero();\r\n}\r\nfunction handleNum(target) {\r\n    document.getElementById(\"result\").value += target;\r\n    _state__WEBPACK_IMPORTED_MODULE_0__.state[_state__WEBPACK_IMPORTED_MODULE_0__.state.flag] = parseFloat(document.getElementById(\"result\").value);\r\n}\r\n\r\nfunction removePressed(action) {\r\n    for (let elem of document.getElementsByTagName(\"input\")) {\r\n        if (elem.id !== action) elem.classList.remove(\"pressed\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/eventHelpers?");

/***/ }),

/***/ "./app/helpers/math.js":
/*!*****************************!*\
  !*** ./app/helpers/math.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"sub\": () => (/* binding */ sub),\n/* harmony export */   \"multiply\": () => (/* binding */ multiply),\n/* harmony export */   \"divide\": () => (/* binding */ divide),\n/* harmony export */   \"equals\": () => (/* binding */ equals)\n/* harmony export */ });\nfunction add(n1, n2) {\r\n    return n1 + n2;\r\n}\r\nfunction sub(n1, n2) {\r\n    return n1 - n2;\r\n}\r\nfunction multiply(n1, n2) {\r\n    return n1 * n2;\r\n}\r\nfunction divide(n1, n2) {\r\n    return n1 / n2;\r\n}\r\nfunction equals(n1, n2, callback) {\r\n    return parseFloat(callback(n1, n2).toFixed(2));\r\n}\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/math.js?");

/***/ }),

/***/ "./app/helpers/state.js":
/*!******************************!*\
  !*** ./app/helpers/state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"state\": () => (/* binding */ state)\n/* harmony export */ });\nlet state = {\r\n    n1: \"\",\r\n    n2: \"\",\r\n    action: \"\",\r\n    flag: \"n1\",\r\n    result: \"\",\r\n};\r\n\n\n//# sourceURL=webpack://calc/./app/helpers/state.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./app/styles.css\");\n/* harmony import */ var _helpers_eventHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/eventHandlers */ \"./app/helpers/eventHandlers.js\");\n/** @format */\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://calc/./app/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"h1 {\\r\\n    text-align: center;\\r\\n    margin-top: 0.67em;\\r\\n    margin-bottom: 0.67em;\\r\\n}\\r\\n* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\\r\\n.container {\\r\\n    margin: auto;\\r\\n    width: 50%;\\r\\n    padding: 10px;\\r\\n    border: 1px solid #f2f2f2;\\r\\n    -webkit-box-shadow: 1px 1px 4px 0px rgb(75, 75, 75);\\r\\n    -moz-box-shadow: 1px 1px 4px 0px rgba(176, 176, 176, 1);\\r\\n    box-shadow: 1px 1px 4px 0px rgba(176, 176, 176, 1);\\r\\n    background-color: #fff;\\r\\n    height: 600px;\\r\\n    background-color: #f8f8f8;\\r\\n}\\r\\n.header {\\r\\n    background-color: #81c784;\\r\\n    padding: 10px;\\r\\n    color: #fff;\\r\\n    text-align: center;\\r\\n}\\r\\n.result {\\r\\n    font-size: 24px;\\r\\n    padding: 24px 5px;\\r\\n    font-weight: 700;\\r\\n    text-align: right;\\r\\n    width: 96%;\\r\\n    border: none;\\r\\n    background-color: #f8f8f8;\\r\\n}\\r\\n.first-row,\\r\\n.second-row,\\r\\n.third-row,\\r\\n.fourth-row,\\r\\n.conflict {\\r\\n    display: inline-block;\\r\\n    width: 100%;\\r\\n}\\r\\n.global {\\r\\n    padding: 15px;\\r\\n    font-weight: bold;\\r\\n    font-size: 16px;\\r\\n    border: none;\\r\\n    border-radius: 3px;\\r\\n    background-color: #f2f2f2;\\r\\n    float: left;\\r\\n    width: 23.5%;\\r\\n    margin: 0 2px;\\r\\n    /*border: 1px solid #000;*/\\r\\n}\\r\\n.conflict .left,\\r\\n.conflict .right {\\r\\n    float: left;\\r\\n    position: relative;\\r\\n}\\r\\n.left {\\r\\n    width: 74%;\\r\\n}\\r\\n.right {\\r\\n    width: 24%;\\r\\n}\\r\\n.big {\\r\\n    padding: 15px;\\r\\n    font-weight: bold;\\r\\n    font-size: 16px;\\r\\n    border: none;\\r\\n    border-radius: 3px;\\r\\n    background-color: #f2f2f2;\\r\\n    float: left;\\r\\n    width: 64.5%;\\r\\n    margin: 0 2px;\\r\\n}\\r\\n.small {\\r\\n    padding: 15px;\\r\\n    font-weight: bold;\\r\\n    font-size: 16px;\\r\\n    border: none;\\r\\n    border-radius: 3px;\\r\\n    background-color: #f2f2f2;\\r\\n    float: left;\\r\\n    width: 31.5%;\\r\\n    margin: 0 2px;\\r\\n}\\r\\n.plus {\\r\\n    height: 105px;\\r\\n    width: 100%;\\r\\n}\\r\\n.green {\\r\\n    background-color: #81c784;\\r\\n}\\r\\n.red {\\r\\n    background-color: #f50258;\\r\\n}\\r\\n.grey {\\r\\n    background-color: #f2f2f2;\\r\\n}\\r\\n.white-text {\\r\\n    color: #fff;\\r\\n}\\r\\n.top-margin {\\r\\n    margin-top: 4px;\\r\\n}\\r\\n.pressed {\\r\\n    background-color: darkgray;\\r\\n}\\r\\n#mainResult {\\r\\n    height: 90px;\\r\\n    font-size: 90px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calc/./app/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = []; // return the list of modules as css string\r\n\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n\r\n      content += cssWithMappingToString(item);\r\n\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n\r\n      return content;\r\n    }).join(\"\");\r\n  }; // import a list of modules into the list\r\n\r\n\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n\r\n    var alreadyImportedModules = {};\r\n\r\n    if (dedupe) {\r\n      for (var _i = 0; _i < this.length; _i++) {\r\n        var id = this[_i][0];\r\n\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n\r\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\r\n      var item = [].concat(modules[_i2]);\r\n\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n\r\n      list.push(item);\r\n    }\r\n  };\r\n\r\n  return list;\r\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://calc/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./app/styles.css":
/*!************************!*\
  !*** ./app/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./app/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calc/./app/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calc/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/main.js");
/******/ 	
/******/ })()
;
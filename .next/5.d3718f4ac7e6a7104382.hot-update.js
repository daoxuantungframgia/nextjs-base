webpackHotUpdate(5,{

/***/ "./components/Dialog/Dialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return confirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__("./node_modules/mobx-react/index.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Modal__ = __webpack_require__("./components/Modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores__ = __webpack_require__("./stores/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dialog_scss__ = __webpack_require__("./components/Dialog/Dialog.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dialog_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Dialog_scss__);
var _class,
    _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Next.js\\nextjs-base\\components\\Dialog\\Dialog.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var confirm = function confirm(message, callback) {
  __WEBPACK_IMPORTED_MODULE_4__stores__["a" /* dialogStore */].handleShow({
    message: message,
    callback: callback
  });
};
var DialogComponent = Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["a" /* observer */])(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(DialogComponent, _Component);

  function DialogComponent() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, DialogComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = DialogComponent.__proto__ || Object.getPrototypeOf(DialogComponent)).call.apply(_ref, [this].concat(args))), _this.handleOk = function () {
      var handleClose = __WEBPACK_IMPORTED_MODULE_4__stores__["a" /* dialogStore */].handleClose,
          callback = __WEBPACK_IMPORTED_MODULE_4__stores__["a" /* dialogStore */].callback;
      callback(true);
      handleClose();
    }, _this.handleCancel = function () {
      var handleClose = __WEBPACK_IMPORTED_MODULE_4__stores__["a" /* dialogStore */].handleClose,
          callback = __WEBPACK_IMPORTED_MODULE_4__stores__["a" /* dialogStore */].callback;
      callback(false);
      handleClose();
    }, _this.test = function () {
      alert('test');
    }, _temp));
  }

  _createClass(DialogComponent, [{
    key: "render",
    value: function render() {
      var handleClose = __WEBPACK_IMPORTED_MODULE_4__stores__["a" /* dialogStore */].handleClose,
          show = __WEBPACK_IMPORTED_MODULE_4__stores__["a" /* dialogStore */].show,
          message = __WEBPACK_IMPORTED_MODULE_4__stores__["a" /* dialogStore */].message;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.test,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, " test "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Modal__["a" /* default */], {
        show: show,
        handleClose: handleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, " ", message, " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('text-center', __WEBPACK_IMPORTED_MODULE_5__Dialog_scss___default.a.btnGroup),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.handleOk,
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('btn btn-success', __WEBPACK_IMPORTED_MODULE_5__Dialog_scss___default.a.btnDialog, __WEBPACK_IMPORTED_MODULE_5__Dialog_scss___default.a.mr10),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, " \u0110\u1ED3ng \xFD "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.handleCancel,
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('btn btn-default', __WEBPACK_IMPORTED_MODULE_5__Dialog_scss___default.a.btnDialog),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, " Hu\u1EF7 "))));
    }
  }]);

  return DialogComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class;

/***/ }),

/***/ "./components/Dialog/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dialog__ = __webpack_require__("./components/Dialog/Dialog.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Dialog__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Dialog__["a"]; });



/***/ }),

/***/ "./layouts/PageComponent/PageComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Dialog__ = __webpack_require__("./components/Dialog/index.js");
var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Next.js\\nextjs-base\\layouts\\PageComponent\\PageComponent.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var pageComponent = function pageComponent(WrappedComponent) {
  return function (props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Dialog__["a" /* DialogComponent */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    })));
  };
};

/* harmony default export */ __webpack_exports__["a"] = (pageComponent);

/***/ }),

/***/ "./layouts/PageComponent/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageComponent__ = __webpack_require__("./layouts/PageComponent/PageComponent.js");

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__PageComponent__["a" /* default */]);

/***/ }),

/***/ "./pages/bootstrap/BootstrapDemo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__("./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Modal__ = __webpack_require__("./components/Modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Dialog__ = __webpack_require__("./components/Dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_PageComponent__ = __webpack_require__("./layouts/PageComponent/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BootstrapDemo_scss__ = __webpack_require__("./pages/bootstrap/BootstrapDemo.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BootstrapDemo_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__BootstrapDemo_scss__);
var _jsxFileName = "C:\\Users\\Administrator\\Desktop\\Next.js\\nextjs-base\\pages\\bootstrap\\BootstrapDemo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var BootstrapDemo =
/*#__PURE__*/
function (_Component) {
  _inherits(BootstrapDemo, _Component);

  function BootstrapDemo() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, BootstrapDemo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = BootstrapDemo.__proto__ || Object.getPrototypeOf(BootstrapDemo)).call.apply(_ref, [this].concat(args))), _this.state = {
      show: false
    }, _this.handleClose = function () {
      _this.setState({
        show: false
      });
    }, _this.showModal = function () {
      _this.setState({
        show: true
      });
    }, _this.showDialog = function () {
      Object(__WEBPACK_IMPORTED_MODULE_3__components_Dialog__["b" /* confirm */])('this is test message', function (result) {
        if (result) {
          console.log('ok is clicked');
        } else {
          console.log('cancel is Clicked');
        }
      });
    }, _temp));
  }

  _createClass(BootstrapDemo, [{
    key: "render",
    value: function render() {
      var show = this.state.show;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_5__BootstrapDemo_scss___default.a.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "bootstrap page", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["c" /* Row */], {
        className: "show-grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Col */], {
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "this is left content"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["a" /* Col */], {
        md: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "this is right content")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.showModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, " show modal "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.showDialog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, " show dialog "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Modal__["a" /* default */], {
        show: show,
        handleClose: this.handleClose,
        title: "this is title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "this is body"));
    }
  }]);

  return BootstrapDemo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/bootstrap\\BootstrapDemo")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.d3718f4ac7e6a7104382.hot-update.js.map
webpackHotUpdate(5,{

/***/ "./layouts/PageComponent/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageComponent__ = __webpack_require__("./layouts/PageComponent/PageComponent.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__PageComponent__["a" /* default */]);

/***/ }),

/***/ "./pages/bootstrap/BootstrapDemo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__layouts_PageComponent__["a" /* default */])());
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
//# sourceMappingURL=5.4a3c0b15fb88c94484d9.hot-update.js.map
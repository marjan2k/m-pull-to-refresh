webpackJsonp([1],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_index_less__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);










var App = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      refreshing: true,
      switchContainer: true
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.setState({ refreshing: false });
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'button',
          {
            style: { display: 'inline-block', marginBottom: 30, border: 1 },
            onClick: function onClick() {
              return _this3.setState({ switchContainer: !_this3.state.switchContainer });
            }
          },
          'switchContainer: ',
          this.state.switchContainer ? 'true' : 'false'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6__src__["a" /* default */],
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            key: this.state.switchContainer,
            style: { height: 200, overflow: 'auto', border: '1px solid #ccc' }
          }, this.state.switchContainer ? { getScrollContainer: function getScrollContainer() {
              return document.body;
            } } : {}, {
            className: 'forTest',
            direction: 'up',
            refreshing: this.state.refreshing,
            onRefresh: function onRefresh() {
              _this3.setState({ refreshing: true });
              setTimeout(function () {
                _this3.setState({ refreshing: false });
              }, 1000);
            }
          }),
          [1, 2, 3, 4, 5, 6, 7].map(function (i) {
            return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'div',
              { key: i, style: { textAlign: 'center', padding: 20 } },
              'item ',
              i
            );
          })
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('div', { dangerouslySetInnerHTML: {
            __html: navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) ? '<style>#qrcode, .highlight{ display: none }</style>' : ''
          }
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ })

},[123]);
//# sourceMappingURL=base.js.map
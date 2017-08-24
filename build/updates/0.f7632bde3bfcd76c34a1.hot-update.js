require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/watson/Utterances/Utterances.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utterance_Utterance__ = __webpack_require__("./src/routes/watson/Utterance/Utterance.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utterances_css__ = __webpack_require__("./src/routes/watson/Utterances/Utterances.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utterances_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Utterances_css__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/watson/Utterances/Utterances.js';






class Utterances extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('TWEETS PROPS', this.props);
    let content2 = this.props.utterances_tone.map(function (utterance) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Utterance_Utterance__["a" /* default */], { key: utterance.utterance_id, utterance: utterance, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      },
      content2
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Utterances_css___default.a)(Utterances));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmY3NjMyYmRlM2JmY2Q3NmMzNGExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlcy9VdHRlcmFuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXR0ZXJhbmNlIGZyb20gJy4uL1V0dGVyYW5jZS9VdHRlcmFuY2UnO1xuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1V0dGVyYW5jZXMuY3NzJztcblxuY2xhc3MgVXR0ZXJhbmNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1RXRUVUUyBQUk9QUycsIHRoaXMucHJvcHMpO1xuICAgIGxldCBjb250ZW50MiA9IHRoaXMucHJvcHMudXR0ZXJhbmNlc190b25lLm1hcChmdW5jdGlvbih1dHRlcmFuY2Upe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFV0dGVyYW5jZSBrZXk9e3V0dGVyYW5jZS51dHRlcmFuY2VfaWR9IHV0dGVyYW5jZT17dXR0ZXJhbmNlfSAvPlxuICAgICAgKVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8dWw+e2NvbnRlbnQyfTwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFV0dGVyYW5jZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvd2F0c29uL1V0dGVyYW5jZXMvVXR0ZXJhbmNlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFmQTtBQUNBO0FBaUJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
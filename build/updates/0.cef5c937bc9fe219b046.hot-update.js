require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/watson/Tweets/Tweets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tweet_Tweet__ = __webpack_require__("./src/routes/watson/Tweet/Tweet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tweets_css__ = __webpack_require__("./src/routes/watson/Tweets/Tweets.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tweets_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Tweets_css__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/watson/Tweets/Tweets.js';






class Tweets extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('TWEETS PROPS', this.props);
    let content = this.props.tweets.map(function (tweet) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tweet_Tweet__["a" /* default */], { key: tweet._id, tweet: tweet, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      });
    });
    let content2 = this.props.utterances_tone.map(function (utterance) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Utterance, { key: utterance.utterance_id, tweet: utterance, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: __WEBPACK_IMPORTED_MODULE_3__Tweets_css___default.a.tweets, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      },
      content
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Tweets_css___default.a)(Tweets));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmNlZjVjOTM3YmM5ZmUyMTliMDQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVHdlZXRzL1R3ZWV0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFR3ZWV0Q2xhc3MgZnJvbSAnLi4vVHdlZXQvVHdlZXQnO1xuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1R3ZWV0cy5jc3MnO1xuXG5jbGFzcyBUd2VldHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdUV0VFVFMgUFJPUFMnLCB0aGlzLnByb3BzKTtcbiAgICBsZXQgY29udGVudCA9IHRoaXMucHJvcHMudHdlZXRzLm1hcChmdW5jdGlvbih0d2VldCl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHdlZXRDbGFzcyBrZXk9e3R3ZWV0Ll9pZH0gdHdlZXQ9e3R3ZWV0fSAvPlxuICAgICAgKVxuICAgIH0pO1xuICAgIGxldCBjb250ZW50MiA9IHRoaXMucHJvcHMudXR0ZXJhbmNlc190b25lLm1hcChmdW5jdGlvbih1dHRlcmFuY2Upe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFV0dGVyYW5jZSBrZXk9e3V0dGVyYW5jZS51dHRlcmFuY2VfaWR9IHR3ZWV0PXt1dHRlcmFuY2V9IC8+XG4gICAgICApXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9e3MudHdlZXRzfT57Y29udGVudH08L3VsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShUd2VldHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvd2F0c29uL1R3ZWV0cy9Ud2VldHMuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFwQkE7QUFDQTtBQXNCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
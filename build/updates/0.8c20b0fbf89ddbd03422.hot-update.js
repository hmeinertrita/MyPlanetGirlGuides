require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/twitter/Tweets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tweet__ = __webpack_require__("./src/routes/twitter/Tweet.js");
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/twitter/Tweets.js';



// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Tweet.css';

class Tweets extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let content = this.props.tweets.map(function (tweet) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tweet__["a" /* default */], { key: tweet._id, tweet: tweet, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: 'tweets', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      },
      content
    );
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (Tweets);

/***/ }),

/***/ "./src/routes/twitter/TweetsApp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tweets__ = __webpack_require__("./src/routes/twitter/Tweets.js");
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/twitter/TweetsApp.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




class TweetsApp extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      },
      'YUUUR'
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TweetsApp);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjhjMjBiMGZiZjg5ZGRiZDAzNDIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0cy5qcyIsIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFR3ZWV0IGZyb20gJy4vVHdlZXQnO1xuXG4vLyBpbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG4vLyBpbXBvcnQgcyBmcm9tICcuL1R3ZWV0LmNzcyc7XG5cbmNsYXNzIFR3ZWV0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLnByb3BzLnR3ZWV0cy5tYXAoZnVuY3Rpb24odHdlZXQpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFR3ZWV0IGtleT17dHdlZXQuX2lkfSB0d2VldD17dHdlZXR9IC8+XG4gICAgICApXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0d2VldHNcIj57Y29udGVudH08L3VsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHdlZXRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvdHdpdHRlci9Ud2VldHMuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4vVHdlZXRzJ1xuXG5jbGFzcyBUd2VldHNBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBZVVVVUlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUd2VldHNBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBZEE7QUFDQTtBQWdCQTs7Ozs7Ozs7Ozs7O0FDdkJBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFYQTtBQUNBO0FBYUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
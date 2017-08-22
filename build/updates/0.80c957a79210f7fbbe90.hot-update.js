require("source-map-support").install();
exports.id = 0;
exports.modules = {

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

  showNewTweets() {

    // Retrieve the current application state
    let updated = this.state.tweets;

    updated;
  }

  componentDidMount() {
    let self = this;
    let socket = io.connect();
    socket.on('tweet', function (data) {
      self.addTweet(data);
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      tweets: props.tweets,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
  }

  render() {
    // console.log(this.state);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjgwYzk1N2E3OTIxMGY3ZmJiZTkwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4vVHdlZXRzJ1xuXG5jbGFzcyBUd2VldHNBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHNob3dOZXdUd2VldHMoKSB7XG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBzdGF0ZVxuICAgIGxldCB1cGRhdGVkID0gdGhpcy5zdGF0ZS50d2VldHM7XG5cbiAgICB1cGRhdGVkXG5cblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBzb2NrZXQgPSBpby5jb25uZWN0KCk7XG4gICAgc29ja2V0Lm9uKCd0d2VldCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBzZWxmLmFkZFR3ZWV0KGRhdGEpO1xuICAgIH0pO1xuICAgIFxuICB9XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0d2VldHM6IHByb3BzLnR3ZWV0cyxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2luZzogZmFsc2UsXG4gICAgICBza2lwOiAwLFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBZVVVVUlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUd2VldHNBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQXZDQTtBQUNBO0FBeUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
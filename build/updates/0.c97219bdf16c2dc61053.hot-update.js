require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/watson/Utterance/Utterance.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tweet_css__ = __webpack_require__("./src/routes/watson/Utterance/Tweet.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tweet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Tweet_css__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/watson/Utterance/Utterance.js';



// import { Tweet } from 'react-twitter-widgets';
// var TweetWidget = require('react-twitter-widgets').Tweet;

class Utterance extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let utterance = this.props.utterance;
    console.log('utterance', utterance);
    let utteranceTone = utterance.tones[0];
    let utteranceTones = utterance.tones.map(function (tone, i) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          tone.utterance_text
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          'SCORE: ',
          tone.score
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          'TONE: ',
          tone.tone_id
        )
      );
    });
    console.log(utteranceTones);
    // console.log('utterance', utterance.tones);
    return { utteranceTones };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a)(Utterance));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmM5NzIxOWJkZjE2YzJkYzYxMDUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlL1V0dGVyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ud2VldC5jc3MnO1xuLy8gaW1wb3J0IHsgVHdlZXQgfSBmcm9tICdyZWFjdC10d2l0dGVyLXdpZGdldHMnO1xuLy8gdmFyIFR3ZWV0V2lkZ2V0ID0gcmVxdWlyZSgncmVhY3QtdHdpdHRlci13aWRnZXRzJykuVHdlZXQ7XG5cbmNsYXNzIFV0dGVyYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHV0dGVyYW5jZSA9IHRoaXMucHJvcHMudXR0ZXJhbmNlO1xuICAgIGNvbnNvbGUubG9nKCd1dHRlcmFuY2UnLCB1dHRlcmFuY2UpO1xuICAgIGxldCB1dHRlcmFuY2VUb25lID0gdXR0ZXJhbmNlLnRvbmVzWzBdXG4gICAgbGV0IHV0dGVyYW5jZVRvbmVzID0gdXR0ZXJhbmNlLnRvbmVzLm1hcChmdW5jdGlvbih0b25lLCBpKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgIDxzcGFuPnt0b25lLnV0dGVyYW5jZV90ZXh0fTwvc3Bhbj5cbiAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICA8c3Bhbj5TQ09SRToge3RvbmUuc2NvcmV9PC9zcGFuPlxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxzcGFuPlRPTkU6IHt0b25lLnRvbmVfaWR9PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHV0dGVyYW5jZVRvbmVzKVxuICAgIC8vIGNvbnNvbGUubG9nKCd1dHRlcmFuY2UnLCB1dHRlcmFuY2UudG9uZXMpO1xuICAgIHJldHVybiAoXG4gICAgICB7dXR0ZXJhbmNlVG9uZXN9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFV0dGVyYW5jZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlL1V0dGVyYW5jZS5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBekJBO0FBQ0E7QUEyQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
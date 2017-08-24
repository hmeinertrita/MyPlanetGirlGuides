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
          'SCORE: ',
          tone.score
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
          'TONE: ',
          tone.tone_id
        )
      );
    });
    console.log(utteranceTones);
    // console.log('utterance', utterance.tones);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { style: {
          "padding": '5px'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        },
        'Text: ',
        utterance.utterance_text
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        utteranceTones
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a)(Utterance));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmYzN2FiZWMxMDVhOTVlZDMxODQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlL1V0dGVyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ud2VldC5jc3MnO1xuLy8gaW1wb3J0IHsgVHdlZXQgfSBmcm9tICdyZWFjdC10d2l0dGVyLXdpZGdldHMnO1xuLy8gdmFyIFR3ZWV0V2lkZ2V0ID0gcmVxdWlyZSgncmVhY3QtdHdpdHRlci13aWRnZXRzJykuVHdlZXQ7XG5cbmNsYXNzIFV0dGVyYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHV0dGVyYW5jZSA9IHRoaXMucHJvcHMudXR0ZXJhbmNlO1xuICAgIGNvbnNvbGUubG9nKCd1dHRlcmFuY2UnLCB1dHRlcmFuY2UpO1xuICAgIGxldCB1dHRlcmFuY2VUb25lID0gdXR0ZXJhbmNlLnRvbmVzWzBdXG4gICAgbGV0IHV0dGVyYW5jZVRvbmVzID0gdXR0ZXJhbmNlLnRvbmVzLm1hcChmdW5jdGlvbih0b25lLCBpKXtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgIDxzcGFuPlNDT1JFOiB7dG9uZS5zY29yZX08L3NwYW4+XG4gICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgPHNwYW4+VE9ORToge3RvbmUudG9uZV9pZH08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICApXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codXR0ZXJhbmNlVG9uZXMpXG4gICAgLy8gY29uc29sZS5sb2coJ3V0dGVyYW5jZScsIHV0dGVyYW5jZS50b25lcyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBzdHlsZT17e1xuICAgICAgICBcInBhZGRpbmdcIjogJzVweCdcbiAgICAgIH19PlxuICAgICAgPGRpdj5UZXh0OiB7dXR0ZXJhbmNlLnV0dGVyYW5jZV90ZXh0fTwvZGl2PlxuICAgICAgPHVsPnt1dHRlcmFuY2VUb25lc308L3VsPlxuICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFV0dGVyYW5jZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlL1V0dGVyYW5jZS5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBNUJBO0FBQ0E7QUE4QkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
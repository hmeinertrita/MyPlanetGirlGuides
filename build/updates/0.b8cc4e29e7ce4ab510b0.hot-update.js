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
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: "tweet" + (tweet.active ? ' active' : ''), __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'blockquote',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'cite',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a.screenname, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            '@',
            utterance.tones[0].score
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a)(Utterance));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmI4Y2M0ZTI5ZTdjZTRhYjUxMGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlL1V0dGVyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ud2VldC5jc3MnO1xuLy8gaW1wb3J0IHsgVHdlZXQgfSBmcm9tICdyZWFjdC10d2l0dGVyLXdpZGdldHMnO1xuLy8gdmFyIFR3ZWV0V2lkZ2V0ID0gcmVxdWlyZSgncmVhY3QtdHdpdHRlci13aWRnZXRzJykuVHdlZXQ7XG5cbmNsYXNzIFV0dGVyYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHV0dGVyYW5jZSA9IHRoaXMucHJvcHMudXR0ZXJhbmNlO1xuICAgIGNvbnNvbGUubG9nKCd1dHRlcmFuY2UnLCB1dHRlcmFuY2UpO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtcInR3ZWV0XCIgKyAodHdlZXQuYWN0aXZlID8gJyBhY3RpdmUnIDogJycpfT5cbiAgICAgICAgey8qIDxpbWcgc3JjPXt0d2VldC5hdmF0YXJ9IGNsYXNzTmFtZT1cImF2YXRhclwiLz4gKi99XG4gICAgICAgIDxibG9ja3F1b3RlPlxuICAgICAgICAgIDxjaXRlPlxuICAgICAgICAgICAgey8qIDxhIGhyZWY9e1wiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9cIiArIHR3ZWV0LnNjcmVlbm5hbWV9Pnt0d2VldC5hdXRob3J9PC9hPiAqL31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zY3JlZW5uYW1lfT5Ae3V0dGVyYW5jZS50b25lc1swXS5zY29yZX08L3NwYW4+XG4gICAgICAgICAgPC9jaXRlPlxuICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9e3MuY29udGVudH0+e3R3ZWV0LmJvZHl9PC9zcGFuPiAqL31cbiAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoVXR0ZXJhbmNlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3dhdHNvbi9VdHRlcmFuY2UvVXR0ZXJhbmNlLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUZBO0FBV0E7QUFwQkE7QUFDQTtBQXNCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
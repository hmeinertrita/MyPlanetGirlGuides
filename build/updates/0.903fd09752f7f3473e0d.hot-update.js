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
      { className: '', __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjkwM2ZkMDk3NTJmN2YzNDczZTBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlL1V0dGVyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ud2VldC5jc3MnO1xuLy8gaW1wb3J0IHsgVHdlZXQgfSBmcm9tICdyZWFjdC10d2l0dGVyLXdpZGdldHMnO1xuLy8gdmFyIFR3ZWV0V2lkZ2V0ID0gcmVxdWlyZSgncmVhY3QtdHdpdHRlci13aWRnZXRzJykuVHdlZXQ7XG5cbmNsYXNzIFV0dGVyYW5jZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHV0dGVyYW5jZSA9IHRoaXMucHJvcHMudXR0ZXJhbmNlO1xuICAgIGNvbnNvbGUubG9nKCd1dHRlcmFuY2UnLCB1dHRlcmFuY2UpO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIHsvKiA8aW1nIHNyYz17dHdlZXQuYXZhdGFyfSBjbGFzc05hbWU9XCJhdmF0YXJcIi8+ICovfVxuICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICA8Y2l0ZT5cbiAgICAgICAgICAgIHsvKiA8YSBocmVmPXtcImh0dHA6Ly93d3cudHdpdHRlci5jb20vXCIgKyB0d2VldC5zY3JlZW5uYW1lfT57dHdlZXQuYXV0aG9yfTwvYT4gKi99XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc2NyZWVubmFtZX0+QHt1dHRlcmFuY2UudG9uZXNbMF0uc2NvcmV9PC9zcGFuPlxuICAgICAgICAgIDwvY2l0ZT5cbiAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPXtzLmNvbnRlbnR9Pnt0d2VldC5ib2R5fTwvc3Bhbj4gKi99XG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFV0dGVyYW5jZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlL1V0dGVyYW5jZS5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFGQTtBQVdBO0FBcEJBO0FBQ0E7QUFzQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
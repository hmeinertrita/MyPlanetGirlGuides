require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/twitter/Tweet/Tweet.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tweet_css__ = __webpack_require__("./src/routes/twitter/Tweet/Tweet.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tweet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Tweet_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_twitter_widgets__ = __webpack_require__("react-twitter-widgets");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_twitter_widgets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_twitter_widgets__);
var _jsxFileName = '/Users/jxm/Downloads/MyPlanetGirlGuides/src/routes/twitter/Tweet/Tweet.js';




// import { Tweet }  from 'react-twitter-widgets'
// var TweetWidget = require('react-twitter-widgets').Tweet;

class TweetClass extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let tweet = this.props.tweet;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: "tweet" + (tweet.active ? ' active' : ''), __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: tweet.avatar, className: 'avatar', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }),
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
            'a',
            { href: "http://www.twitter.com/" + tweet.screenname, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            tweet.author
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { className: __WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a.screenname, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            '@',
            tweet.screenname
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a.content, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          tweet.body
        )
      )
    )

    // <Tweet
    //   tweetId={tweet.twid}
    //   options={{
    //     cards: "hidden"
    //   }}
    // />

    ;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a)(TweetClass));

/***/ }),

/***/ "./src/routes/twitter/Tweets/Tweets.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tweet_Tweet__ = __webpack_require__("./src/routes/twitter/Tweet/Tweet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tweets_css__ = __webpack_require__("./src/routes/twitter/Tweets/Tweets.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tweets_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Tweets_css__);
var _jsxFileName = '/Users/jxm/Downloads/MyPlanetGirlGuides/src/routes/twitter/Tweets/Tweets.js';






class Tweets extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let content = this.props.tweets.map(function (tweet) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tweet_Tweet__["a" /* default */], { key: tweet._id, tweet: tweet, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      { className: __WEBPACK_IMPORTED_MODULE_3__Tweets_css___default.a.tweets, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmM4ZjgyNzBhMWE1YTgzMWYxNjVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXQvVHdlZXQuanMiLCIvVXNlcnMvanhtL0Rvd25sb2Fkcy9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0cy9Ud2VldHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVHdlZXQuY3NzJztcbmltcG9ydCB7IFR3ZWV0IH0gZnJvbSAncmVhY3QtdHdpdHRlci13aWRnZXRzJztcbi8vIGltcG9ydCB7IFR3ZWV0IH0gIGZyb20gJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cydcbi8vIHZhciBUd2VldFdpZGdldCA9IHJlcXVpcmUoJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cycpLlR3ZWV0O1xuXG5jbGFzcyBUd2VldENsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdHdlZXQgPSB0aGlzLnByb3BzLnR3ZWV0O1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtcInR3ZWV0XCIgKyAodHdlZXQuYWN0aXZlID8gJyBhY3RpdmUnIDogJycpfT5cbiAgICAgICAgPGltZyBzcmM9e3R3ZWV0LmF2YXRhcn0gY2xhc3NOYW1lPVwiYXZhdGFyXCIvPlxuICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICA8Y2l0ZT5cbiAgICAgICAgICAgIDxhIGhyZWY9e1wiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9cIiArIHR3ZWV0LnNjcmVlbm5hbWV9Pnt0d2VldC5hdXRob3J9PC9hPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNjcmVlbm5hbWV9PkB7dHdlZXQuc2NyZWVubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9jaXRlPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jb250ZW50fT57dHdlZXQuYm9keX08L3NwYW4+XG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvbGk+XG5cbiAgICAgIC8vIDxUd2VldFxuICAgICAgLy8gICB0d2VldElkPXt0d2VldC50d2lkfVxuICAgICAgLy8gICBvcHRpb25zPXt7XG4gICAgICAvLyAgICAgY2FyZHM6IFwiaGlkZGVuXCJcbiAgICAgIC8vICAgfX1cbiAgICAgIC8vIC8+XG4gICAgICBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoVHdlZXRDbGFzcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0L1R3ZWV0LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUd2VldENsYXNzIGZyb20gJy4uL1R3ZWV0L1R3ZWV0JztcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ud2VldHMuY3NzJztcblxuY2xhc3MgVHdlZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY29udGVudCA9IHRoaXMucHJvcHMudHdlZXRzLm1hcChmdW5jdGlvbih0d2VldCl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHdlZXRDbGFzcyBrZXk9e3R3ZWV0Ll9pZH0gdHdlZXQ9e3R3ZWV0fSAvPlxuICAgICAgKVxuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzLnR3ZWV0c30+e2NvbnRlbnR9PC91bD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoVHdlZXRzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXRzL1R3ZWV0cy5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFGQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUEzQkE7QUFDQTtBQTZCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQWRBO0FBQ0E7QUFnQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
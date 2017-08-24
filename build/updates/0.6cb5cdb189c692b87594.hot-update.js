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

/***/ }),

/***/ "./src/routes/watson/WatsonApp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tweets_Tweets__ = __webpack_require__("./src/routes/watson/Tweets/Tweets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/watson/WatsonApp.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class WatsonApp extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  // -----------------------------------------
  // TEST CODE FOR TWEETS
  // -----------------------------------------

  // addTweet(tweet) {
  //   let updated = this.state.tweets;
  //   let count = this.state.count + 1;
  //   let skip = this.state.skip + 1;
  //   updated.unshift(tweet);
  //   this.setState({tweets: updated, count: count, skip: skip});
  // }
  //
  // showNewTweets() {
  //   // Retrieve the current application state
  //   let updated = this.state.tweets;
  //   updated.forEach(function(tweet){
  //     tweet.active = true;
  //   });
  //   this.setState({tweets: updated, count: 0});
  // }
  //
  // loadPagedTweets(tweets) {
  //   let self = this;
  //   if(tweets.length > 0) {
  //     let updated = this.state.tweets;
  //     tweets.forEach(function(tweet){
  //       updated.push(tweet);
  //     });
  //     setTimeout(function(){
  //       self.setState({tweets:updated, paging: false});
  //     }, 1000);
  //   } else {
  //     this.setState({done: true, paging: false});
  //   }
  // }

  //   checkWindowScroll(){
  //
  //   // Get scroll pos & window data
  //   var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  //   var s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
  //   var scrolled = (h + s) > document.body.offsetHeight;
  //
  //   // If scrolled enough, not currently paging and not complete...
  //   if(scrolled && !this.state.paging && !this.state.done) {
  //
  //     // Set application state (Paging, Increment page)
  //     this.setState({paging: true, page: this.state.page + 1});
  //
  //     // Get the next page of tweets from the server
  //     this.getPage(this.state.page);
  //
  //   }
  // }

  // Axios get request to hit the API
  getPage() {
    let self = this;
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(`/page/${this.state.page}/${this.state.skip}`).then(function (response) {
      // return response.data;
      console.log(response.data);
      // }.then(function(response.data) {
      self.setState({ tweets: response.data.tweets });
      // });
    }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getPage();
  }

  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
  }

  render() {
    console.log(this.state);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tweets_Tweets__["a" /* default */], { tweets: this.state.tweets, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (WatsonApp);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjZjYjVjZGIxODljNjkyYjg3NTk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVHdlZXRzL1R3ZWV0cy5qcyIsIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vV2F0c29uQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHdlZXRDbGFzcyBmcm9tICcuLi9Ud2VldC9Ud2VldCc7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVHdlZXRzLmNzcyc7XG5cbmNsYXNzIFR3ZWV0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLnByb3BzLnR3ZWV0cy5tYXAoZnVuY3Rpb24odHdlZXQpe1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFR3ZWV0Q2xhc3Mga2V5PXt0d2VldC5faWR9IHR3ZWV0PXt0d2VldH0gLz5cbiAgICAgIClcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT17cy50d2VldHN9Pntjb250ZW50fTwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFR3ZWV0cyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy93YXRzb24vVHdlZXRzL1R3ZWV0cy5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUd2VldHMgZnJvbSAnLi9Ud2VldHMvVHdlZXRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFdhdHNvbkFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBURVNUIENPREUgRk9SIFRXRUVUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBhZGRUd2VldCh0d2VldCkge1xuICAvLyAgIGxldCB1cGRhdGVkID0gdGhpcy5zdGF0ZS50d2VldHM7XG4gIC8vICAgbGV0IGNvdW50ID0gdGhpcy5zdGF0ZS5jb3VudCArIDE7XG4gIC8vICAgbGV0IHNraXAgPSB0aGlzLnN0YXRlLnNraXAgKyAxO1xuICAvLyAgIHVwZGF0ZWQudW5zaGlmdCh0d2VldCk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7dHdlZXRzOiB1cGRhdGVkLCBjb3VudDogY291bnQsIHNraXA6IHNraXB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyBzaG93TmV3VHdlZXRzKCkge1xuICAvLyAgIC8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlXG4gIC8vICAgbGV0IHVwZGF0ZWQgPSB0aGlzLnN0YXRlLnR3ZWV0cztcbiAgLy8gICB1cGRhdGVkLmZvckVhY2goZnVuY3Rpb24odHdlZXQpe1xuICAvLyAgICAgdHdlZXQuYWN0aXZlID0gdHJ1ZTtcbiAgLy8gICB9KTtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHt0d2VldHM6IHVwZGF0ZWQsIGNvdW50OiAwfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gbG9hZFBhZ2VkVHdlZXRzKHR3ZWV0cykge1xuICAvLyAgIGxldCBzZWxmID0gdGhpcztcbiAgLy8gICBpZih0d2VldHMubGVuZ3RoID4gMCkge1xuICAvLyAgICAgbGV0IHVwZGF0ZWQgPSB0aGlzLnN0YXRlLnR3ZWV0cztcbiAgLy8gICAgIHR3ZWV0cy5mb3JFYWNoKGZ1bmN0aW9uKHR3ZWV0KXtcbiAgLy8gICAgICAgdXBkYXRlZC5wdXNoKHR3ZWV0KTtcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAvLyAgICAgICBzZWxmLnNldFN0YXRlKHt0d2VldHM6dXBkYXRlZCwgcGFnaW5nOiBmYWxzZX0pO1xuICAvLyAgICAgfSwgMTAwMCk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe2RvbmU6IHRydWUsIHBhZ2luZzogZmFsc2V9KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyAgIGNoZWNrV2luZG93U2Nyb2xsKCl7XG4gIC8vXG4gIC8vICAgLy8gR2V0IHNjcm9sbCBwb3MgJiB3aW5kb3cgZGF0YVxuICAvLyAgIHZhciBoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAvLyAgIHZhciBzID0gKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgMCk7XG4gIC8vICAgdmFyIHNjcm9sbGVkID0gKGggKyBzKSA+IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuICAvL1xuICAvLyAgIC8vIElmIHNjcm9sbGVkIGVub3VnaCwgbm90IGN1cnJlbnRseSBwYWdpbmcgYW5kIG5vdCBjb21wbGV0ZS4uLlxuICAvLyAgIGlmKHNjcm9sbGVkICYmICF0aGlzLnN0YXRlLnBhZ2luZyAmJiAhdGhpcy5zdGF0ZS5kb25lKSB7XG4gIC8vXG4gIC8vICAgICAvLyBTZXQgYXBwbGljYXRpb24gc3RhdGUgKFBhZ2luZywgSW5jcmVtZW50IHBhZ2UpXG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtwYWdpbmc6IHRydWUsIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDF9KTtcbiAgLy9cbiAgLy8gICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIG9mIHR3ZWV0cyBmcm9tIHRoZSBzZXJ2ZXJcbiAgLy8gICAgIHRoaXMuZ2V0UGFnZSh0aGlzLnN0YXRlLnBhZ2UpO1xuICAvL1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIEF4aW9zIGdldCByZXF1ZXN0IHRvIGhpdCB0aGUgQVBJXG4gIGdldFBhZ2UoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXhpb3MuZ2V0KGAvcGFnZS8ke3RoaXMuc3RhdGUucGFnZX0vJHt0aGlzLnN0YXRlLnNraXB9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIC8vIH0udGhlbihmdW5jdGlvbihyZXNwb25zZS5kYXRhKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHt0d2VldHM6IHJlc3BvbnNlLmRhdGEudHdlZXRzfSk7XG4gICAgICAvLyB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRQYWdlKClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0d2VldHM6IFtdLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBwYWdlOiAwLFxuICAgICAgcGFnaW5nOiBmYWxzZSxcbiAgICAgIHNraXA6IDAsXG4gICAgICBkb25lOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUd2VldHMgdHdlZXRzPXt0aGlzLnN0YXRlLnR3ZWV0c30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRzb25BcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy93YXRzb24vV2F0c29uQXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBZEE7QUFDQTtBQWdCQTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUE5RkE7QUFDQTtBQWdHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
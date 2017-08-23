require("source-map-support").install();
exports.id = 1;
exports.modules = {

/***/ "./src/routes/twitter/TweetsApp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tweets__ = __webpack_require__("./src/routes/twitter/Tweets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
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

  // Method to get JSON from server by page
  getPage() {
    let self = this;
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(`/page/${this.state.page}/${this.state.skip}`).then(function (response) {
      // return response.data;
      console.log(response.data);
      // }.then(function(response.data) {
      self.setState({ tweets: response.data });
      // });
    }).catch(function (error) {
      console.log(error);
    });
  }

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
          lineNumber: 100
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tweets__["a" /* default */], { tweets: this.state.tweets, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TweetsApp);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLmY2YWVhZWExYzlkYzFlMzNhMjRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4vVHdlZXRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFR3ZWV0c0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gYWRkVHdlZXQodHdlZXQpIHtcbiAgLy8gICBsZXQgdXBkYXRlZCA9IHRoaXMuc3RhdGUudHdlZXRzO1xuICAvLyAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuICAvLyAgIGxldCBza2lwID0gdGhpcy5zdGF0ZS5za2lwICsgMTtcbiAgLy8gICB1cGRhdGVkLnVuc2hpZnQodHdlZXQpO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoe3R3ZWV0czogdXBkYXRlZCwgY291bnQ6IGNvdW50LCBza2lwOiBza2lwfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2hvd05ld1R3ZWV0cygpIHtcbiAgLy8gICAvLyBSZXRyaWV2ZSB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBzdGF0ZVxuICAvLyAgIGxldCB1cGRhdGVkID0gdGhpcy5zdGF0ZS50d2VldHM7XG4gIC8vICAgdXBkYXRlZC5mb3JFYWNoKGZ1bmN0aW9uKHR3ZWV0KXtcbiAgLy8gICAgIHR3ZWV0LmFjdGl2ZSA9IHRydWU7XG4gIC8vICAgfSk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7dHdlZXRzOiB1cGRhdGVkLCBjb3VudDogMH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIGxvYWRQYWdlZFR3ZWV0cyh0d2VldHMpIHtcbiAgLy8gICBsZXQgc2VsZiA9IHRoaXM7XG4gIC8vICAgaWYodHdlZXRzLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgIGxldCB1cGRhdGVkID0gdGhpcy5zdGF0ZS50d2VldHM7XG4gIC8vICAgICB0d2VldHMuZm9yRWFjaChmdW5jdGlvbih0d2VldCl7XG4gIC8vICAgICAgIHVwZGF0ZWQucHVzaCh0d2VldCk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgLy8gICAgICAgc2VsZi5zZXRTdGF0ZSh7dHdlZXRzOnVwZGF0ZWQsIHBhZ2luZzogZmFsc2V9KTtcbiAgLy8gICAgIH0sIDEwMDApO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtkb25lOiB0cnVlLCBwYWdpbmc6IGZhbHNlfSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gTWV0aG9kIHRvIGdldCBKU09OIGZyb20gc2VydmVyIGJ5IHBhZ2VcbiAgZ2V0UGFnZSgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBheGlvcy5nZXQoYC9wYWdlLyR7dGhpcy5zdGF0ZS5wYWdlfS8ke3RoaXMuc3RhdGUuc2tpcH1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAvLyByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgIC8vIH0udGhlbihmdW5jdGlvbihyZXNwb25zZS5kYXRhKSB7XG4gICAgICBzZWxmLnNldFN0YXRlKHsgdHdlZXRzOiByZXNwb25zZS5kYXRhIH0pO1xuICAgIC8vIH0pO1xuICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbi8vICAgY2hlY2tXaW5kb3dTY3JvbGwoKXtcbi8vXG4vLyAgIC8vIEdldCBzY3JvbGwgcG9zICYgd2luZG93IGRhdGFcbi8vICAgdmFyIGggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4vLyAgIHZhciBzID0gKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgMCk7XG4vLyAgIHZhciBzY3JvbGxlZCA9IChoICsgcykgPiBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcbi8vXG4vLyAgIC8vIElmIHNjcm9sbGVkIGVub3VnaCwgbm90IGN1cnJlbnRseSBwYWdpbmcgYW5kIG5vdCBjb21wbGV0ZS4uLlxuLy8gICBpZihzY3JvbGxlZCAmJiAhdGhpcy5zdGF0ZS5wYWdpbmcgJiYgIXRoaXMuc3RhdGUuZG9uZSkge1xuLy9cbi8vICAgICAvLyBTZXQgYXBwbGljYXRpb24gc3RhdGUgKFBhZ2luZywgSW5jcmVtZW50IHBhZ2UpXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnaW5nOiB0cnVlLCBwYWdlOiB0aGlzLnN0YXRlLnBhZ2UgKyAxfSk7XG4vL1xuLy8gICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIG9mIHR3ZWV0cyBmcm9tIHRoZSBzZXJ2ZXJcbi8vICAgICB0aGlzLmdldFBhZ2UodGhpcy5zdGF0ZS5wYWdlKTtcbi8vXG4vLyAgIH1cbi8vIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFBhZ2UoKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR3ZWV0czogW10sXG4gICAgICBjb3VudDogMCxcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdpbmc6IGZhbHNlLFxuICAgICAgc2tpcDogMCxcbiAgICAgIGRvbmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFR3ZWV0cyB0d2VldHM9e3RoaXMuc3RhdGUudHdlZXRzfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0c0FwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXRzQXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUExRkE7QUFDQTtBQTRGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
require("source-map-support").install();
exports.id = 0;
exports.modules = {

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
      'WATSON FAM'
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (WatsonApp);

/***/ }),

/***/ "./src/routes/watson/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./src/components/Layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__WatsonApp__ = __webpack_require__("./src/routes/watson/WatsonApp.js");
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/watson/index.js';




const title = 'Watson';

function action() {
  return {
    chunks: ['welcome'],
    title,
    component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__WatsonApp__["a" /* default */], { title: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })
    )
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjcyNTE1NDdmMWJiYjBiZjQzOTdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vV2F0c29uQXBwLmpzIiwiL1VzZXJzL2NkaHUvbXlwbGFuZXRmZWxsb3dzaGlwL015UGxhbmV0R2lybEd1aWRlcy9zcmMvcm91dGVzL3dhdHNvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4vVHdlZXRzL1R3ZWV0cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBXYXRzb25BcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVEVTVCBDT0RFIEZPUiBUV0VFVFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gYWRkVHdlZXQodHdlZXQpIHtcbiAgLy8gICBsZXQgdXBkYXRlZCA9IHRoaXMuc3RhdGUudHdlZXRzO1xuICAvLyAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuICAvLyAgIGxldCBza2lwID0gdGhpcy5zdGF0ZS5za2lwICsgMTtcbiAgLy8gICB1cGRhdGVkLnVuc2hpZnQodHdlZXQpO1xuICAvLyAgIHRoaXMuc2V0U3RhdGUoe3R3ZWV0czogdXBkYXRlZCwgY291bnQ6IGNvdW50LCBza2lwOiBza2lwfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gc2hvd05ld1R3ZWV0cygpIHtcbiAgLy8gICAvLyBSZXRyaWV2ZSB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBzdGF0ZVxuICAvLyAgIGxldCB1cGRhdGVkID0gdGhpcy5zdGF0ZS50d2VldHM7XG4gIC8vICAgdXBkYXRlZC5mb3JFYWNoKGZ1bmN0aW9uKHR3ZWV0KXtcbiAgLy8gICAgIHR3ZWV0LmFjdGl2ZSA9IHRydWU7XG4gIC8vICAgfSk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7dHdlZXRzOiB1cGRhdGVkLCBjb3VudDogMH0pO1xuICAvLyB9XG4gIC8vXG4gIC8vIGxvYWRQYWdlZFR3ZWV0cyh0d2VldHMpIHtcbiAgLy8gICBsZXQgc2VsZiA9IHRoaXM7XG4gIC8vICAgaWYodHdlZXRzLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgIGxldCB1cGRhdGVkID0gdGhpcy5zdGF0ZS50d2VldHM7XG4gIC8vICAgICB0d2VldHMuZm9yRWFjaChmdW5jdGlvbih0d2VldCl7XG4gIC8vICAgICAgIHVwZGF0ZWQucHVzaCh0d2VldCk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgLy8gICAgICAgc2VsZi5zZXRTdGF0ZSh7dHdlZXRzOnVwZGF0ZWQsIHBhZ2luZzogZmFsc2V9KTtcbiAgLy8gICAgIH0sIDEwMDApO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtkb25lOiB0cnVlLCBwYWdpbmc6IGZhbHNlfSk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gICBjaGVja1dpbmRvd1Njcm9sbCgpe1xuICAvL1xuICAvLyAgIC8vIEdldCBzY3JvbGwgcG9zICYgd2luZG93IGRhdGFcbiAgLy8gICB2YXIgaCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgLy8gICB2YXIgcyA9IChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IDApO1xuICAvLyAgIHZhciBzY3JvbGxlZCA9IChoICsgcykgPiBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcbiAgLy9cbiAgLy8gICAvLyBJZiBzY3JvbGxlZCBlbm91Z2gsIG5vdCBjdXJyZW50bHkgcGFnaW5nIGFuZCBub3QgY29tcGxldGUuLi5cbiAgLy8gICBpZihzY3JvbGxlZCAmJiAhdGhpcy5zdGF0ZS5wYWdpbmcgJiYgIXRoaXMuc3RhdGUuZG9uZSkge1xuICAvL1xuICAvLyAgICAgLy8gU2V0IGFwcGxpY2F0aW9uIHN0YXRlIChQYWdpbmcsIEluY3JlbWVudCBwYWdlKVxuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7cGFnaW5nOiB0cnVlLCBwYWdlOiB0aGlzLnN0YXRlLnBhZ2UgKyAxfSk7XG4gIC8vXG4gIC8vICAgICAvLyBHZXQgdGhlIG5leHQgcGFnZSBvZiB0d2VldHMgZnJvbSB0aGUgc2VydmVyXG4gIC8vICAgICB0aGlzLmdldFBhZ2UodGhpcy5zdGF0ZS5wYWdlKTtcbiAgLy9cbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBBeGlvcyBnZXQgcmVxdWVzdCB0byBoaXQgdGhlIEFQSVxuICBnZXRQYWdlKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGF4aW9zLmdldChgL3BhZ2UvJHt0aGlzLnN0YXRlLnBhZ2V9LyR7dGhpcy5zdGF0ZS5za2lwfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIC8vIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAvLyB9LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UuZGF0YSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dHdlZXRzOiByZXNwb25zZS5kYXRhLnR3ZWV0c30pO1xuICAgICAgLy8gfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0UGFnZSgpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHdlZXRzOiBbXSxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2luZzogZmFsc2UsXG4gICAgICBza2lwOiAwLFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBXQVRTT04gRkFNXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhdHNvbkFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3dhdHNvbi9XYXRzb25BcHAuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgV2F0c29uQXBwIGZyb20gJy4vV2F0c29uQXBwJztcblxuY29uc3QgdGl0bGUgPSAnV2F0c29uJztcblxuZnVuY3Rpb24gYWN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIGNodW5rczogWyd3ZWxjb21lJ10sXG4gICAgdGl0bGUsXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8V2F0c29uQXBwIHRpdGxlPXt0aXRsZX0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3dhdHNvbi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQTlGQTtBQUNBO0FBZ0dBOzs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSkE7QUFTQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
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

  addTweet(tweet) {
    let updated = this.state.tweets;
    let count = this.state.count + 1;
    let skip = this.state.skip + 1;
    updated.unshift(tweet);
    this.setState({ tweets: updated, count: count, skip: skip });
  }

  showNewTweets() {
    // Retrieve the current application state
    let updated = this.state.tweets;
    updated.forEach(function (tweet) {
      tweet.active = true;
    });
    this.setState({ tweets: updated, count: 0 });
  }

  loadPagedTweets(tweets) {
    let self = this;
    if (tweets.length > 0) {
      let updated = this.state.tweets;
      tweets.forEach(function (tweet) {
        updated.push(tweet);
      });
      setTimeout(function () {
        self.setState({ tweets: updated, paging: false });
      }, 1000);
    } else {
      this.setState({ done: true, paging: false });
    }
  }

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
      tweets: props.tweets,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
    this.getPage = this.getPage.bind(this);
  }

  render() {
    console.log(this.state);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TweetsApp);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjA3MWQ4NzJmMTg0MDkwNzFmN2E5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4vVHdlZXRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFR3ZWV0c0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgYWRkVHdlZXQodHdlZXQpIHtcbiAgICBsZXQgdXBkYXRlZCA9IHRoaXMuc3RhdGUudHdlZXRzO1xuICAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuICAgIGxldCBza2lwID0gdGhpcy5zdGF0ZS5za2lwICsgMTtcbiAgICB1cGRhdGVkLnVuc2hpZnQodHdlZXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3R3ZWV0czogdXBkYXRlZCwgY291bnQ6IGNvdW50LCBza2lwOiBza2lwfSk7XG4gIH1cblxuICBzaG93TmV3VHdlZXRzKCkge1xuICAgIC8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlXG4gICAgbGV0IHVwZGF0ZWQgPSB0aGlzLnN0YXRlLnR3ZWV0cztcbiAgICB1cGRhdGVkLmZvckVhY2goZnVuY3Rpb24odHdlZXQpe1xuICAgICAgdHdlZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt0d2VldHM6IHVwZGF0ZWQsIGNvdW50OiAwfSk7XG4gIH1cblxuICBsb2FkUGFnZWRUd2VldHModHdlZXRzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmKHR3ZWV0cy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdXBkYXRlZCA9IHRoaXMuc3RhdGUudHdlZXRzO1xuICAgICAgdHdlZXRzLmZvckVhY2goZnVuY3Rpb24odHdlZXQpe1xuICAgICAgICB1cGRhdGVkLnB1c2godHdlZXQpO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe3R3ZWV0czp1cGRhdGVkLCBwYWdpbmc6IGZhbHNlfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZG9uZTogdHJ1ZSwgcGFnaW5nOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byBnZXQgSlNPTiBmcm9tIHNlcnZlciBieSBwYWdlXG4gIGdldFBhZ2UoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXhpb3MuZ2V0KGAvcGFnZS8ke3RoaXMuc3RhdGUucGFnZX0vJHt0aGlzLnN0YXRlLnNraXB9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAvLyB9LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UuZGF0YSkge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7IHR3ZWV0czogcmVzcG9uc2UuZGF0YSB9KTtcbiAgICAvLyB9KTtcbiAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4vLyAgIGNoZWNrV2luZG93U2Nyb2xsKCl7XG4vL1xuLy8gICAvLyBHZXQgc2Nyb2xsIHBvcyAmIHdpbmRvdyBkYXRhXG4vLyAgIHZhciBoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuLy8gICB2YXIgcyA9IChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IDApO1xuLy8gICB2YXIgc2Nyb2xsZWQgPSAoaCArIHMpID4gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XG4vL1xuLy8gICAvLyBJZiBzY3JvbGxlZCBlbm91Z2gsIG5vdCBjdXJyZW50bHkgcGFnaW5nIGFuZCBub3QgY29tcGxldGUuLi5cbi8vICAgaWYoc2Nyb2xsZWQgJiYgIXRoaXMuc3RhdGUucGFnaW5nICYmICF0aGlzLnN0YXRlLmRvbmUpIHtcbi8vXG4vLyAgICAgLy8gU2V0IGFwcGxpY2F0aW9uIHN0YXRlIChQYWdpbmcsIEluY3JlbWVudCBwYWdlKVxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe3BhZ2luZzogdHJ1ZSwgcGFnZTogdGhpcy5zdGF0ZS5wYWdlICsgMX0pO1xuLy9cbi8vICAgICAvLyBHZXQgdGhlIG5leHQgcGFnZSBvZiB0d2VldHMgZnJvbSB0aGUgc2VydmVyXG4vLyAgICAgdGhpcy5nZXRQYWdlKHRoaXMuc3RhdGUucGFnZSk7XG4vL1xuLy8gICB9XG4vLyB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRQYWdlKClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0d2VldHM6IHByb3BzLnR3ZWV0cyxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2luZzogZmFsc2UsXG4gICAgICBza2lwOiAwLFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICAgIHRoaXMuZ2V0UGFnZSA9IHRoaXMuZ2V0UGFnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogPFR3ZWV0cyB0d2VldHM9e3RoaXMuc3RhdGUudHdlZXRzfS8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUd2VldHNBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUEzRkE7QUFDQTtBQTZGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
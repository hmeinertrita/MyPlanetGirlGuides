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
  getPage(page) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(`/page/${page}/${this.state.skip}`).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });

    // Setup our ajax request
    var request = new XMLHttpRequest(),
        self = this;
    request.open('GET', 'page/' + page + "/" + this.state.skip, true);
    request.onload = function () {
      console.log('YEET');

      // If everything is cool...
      if (request.status >= 200 && request.status < 400) {
        console.log(request.responseText);

        // Load our next page
        self.loadPagedTweets(JSON.parse(request.responseText));
      } else {

        // Set application state (Not paging, paging complete)
        self.setState({ paging: false, done: true });
      }
    };

    // Fire!
    request.send();
  }

  checkWindowScroll() {

    // Get scroll pos & window data
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var s = document.body.scrollTop || document.documentElement.scrollTop || 0;
    var scrolled = h + s > document.body.offsetHeight;

    // If scrolled enough, not currently paging and not complete...
    if (scrolled && !this.state.paging && !this.state.done) {

      // Set application state (Paging, Increment page)
      this.setState({ paging: true, page: this.state.page + 1 });

      // Get the next page of tweets from the server
      this.getPage(this.state.page);
    }
  }

  componentDidMount() {
    //   // Preserve self reference
    //   var self = this;
    //   // Initialize socket.io
    //   var socket = io.connect('http://localhost:3002');
    //   socket.on('tweet', function (data) {
    //     console.log('DATA',data)
    //   // Add a tweet to our queue
    //   self.addTweet(data);
    //   });
    //   //
    //   // // Attach scroll event to the window for infinity paging
    window.addEventListener('scroll', this.checkWindowScroll);
    //
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
    console.log(this.state);
    console.log;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TweetsApp);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjllZDA0MjM2NDMxZTVhMGQxZTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4vVHdlZXRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFR3ZWV0c0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgYWRkVHdlZXQodHdlZXQpIHtcbiAgICBsZXQgdXBkYXRlZCA9IHRoaXMuc3RhdGUudHdlZXRzO1xuICAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuICAgIGxldCBza2lwID0gdGhpcy5zdGF0ZS5za2lwICsgMTtcbiAgICB1cGRhdGVkLnVuc2hpZnQodHdlZXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3R3ZWV0czogdXBkYXRlZCwgY291bnQ6IGNvdW50LCBza2lwOiBza2lwfSk7XG4gIH1cblxuICBzaG93TmV3VHdlZXRzKCkge1xuICAgIC8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlXG4gICAgbGV0IHVwZGF0ZWQgPSB0aGlzLnN0YXRlLnR3ZWV0cztcbiAgICB1cGRhdGVkLmZvckVhY2goZnVuY3Rpb24odHdlZXQpe1xuICAgICAgdHdlZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt0d2VldHM6IHVwZGF0ZWQsIGNvdW50OiAwfSk7XG4gIH1cblxuICBsb2FkUGFnZWRUd2VldHModHdlZXRzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmKHR3ZWV0cy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdXBkYXRlZCA9IHRoaXMuc3RhdGUudHdlZXRzO1xuICAgICAgdHdlZXRzLmZvckVhY2goZnVuY3Rpb24odHdlZXQpe1xuICAgICAgICB1cGRhdGVkLnB1c2godHdlZXQpO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe3R3ZWV0czp1cGRhdGVkLCBwYWdpbmc6IGZhbHNlfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZG9uZTogdHJ1ZSwgcGFnaW5nOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byBnZXQgSlNPTiBmcm9tIHNlcnZlciBieSBwYWdlXG4gIGdldFBhZ2UocGFnZSkge1xuICAgIGF4aW9zLmdldChgL3BhZ2UvJHtwYWdlfS8ke3RoaXMuc3RhdGUuc2tpcH1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxuXG4gICAgLy8gU2V0dXAgb3VyIGFqYXggcmVxdWVzdFxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHNlbGYgPSB0aGlzO1xuICAgIHJlcXVlc3Qub3BlbignR0VUJywgJ3BhZ2UvJyArIHBhZ2UgKyBcIi9cIiArIHRoaXMuc3RhdGUuc2tpcCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZRUVUJylcblxuICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyBjb29sLi4uXG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKXtcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuXG4gICAgICAgIC8vIExvYWQgb3VyIG5leHQgcGFnZVxuICAgICAgICBzZWxmLmxvYWRQYWdlZFR3ZWV0cyhKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KSk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gU2V0IGFwcGxpY2F0aW9uIHN0YXRlIChOb3QgcGFnaW5nLCBwYWdpbmcgY29tcGxldGUpXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe3BhZ2luZzogZmFsc2UsIGRvbmU6IHRydWV9KTtcblxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBGaXJlIVxuICAgIHJlcXVlc3Quc2VuZCgpO1xuXG4gIH1cblxuICBjaGVja1dpbmRvd1Njcm9sbCgpe1xuXG4gIC8vIEdldCBzY3JvbGwgcG9zICYgd2luZG93IGRhdGFcbiAgdmFyIGggPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4gIHZhciBzID0gKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgMCk7XG4gIHZhciBzY3JvbGxlZCA9IChoICsgcykgPiBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcblxuICAvLyBJZiBzY3JvbGxlZCBlbm91Z2gsIG5vdCBjdXJyZW50bHkgcGFnaW5nIGFuZCBub3QgY29tcGxldGUuLi5cbiAgaWYoc2Nyb2xsZWQgJiYgIXRoaXMuc3RhdGUucGFnaW5nICYmICF0aGlzLnN0YXRlLmRvbmUpIHtcblxuICAgIC8vIFNldCBhcHBsaWNhdGlvbiBzdGF0ZSAoUGFnaW5nLCBJbmNyZW1lbnQgcGFnZSlcbiAgICB0aGlzLnNldFN0YXRlKHtwYWdpbmc6IHRydWUsIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDF9KTtcblxuICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIG9mIHR3ZWV0cyBmcm9tIHRoZSBzZXJ2ZXJcbiAgICB0aGlzLmdldFBhZ2UodGhpcy5zdGF0ZS5wYWdlKTtcblxuICB9XG59XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgLy8gUHJlc2VydmUgc2VsZiByZWZlcmVuY2VcbiAgLy8gICB2YXIgc2VsZiA9IHRoaXM7XG4gIC8vICAgLy8gSW5pdGlhbGl6ZSBzb2NrZXQuaW9cbiAgLy8gICB2YXIgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDozMDAyJyk7XG4gIC8vICAgc29ja2V0Lm9uKCd0d2VldCcsIGZ1bmN0aW9uIChkYXRhKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZygnREFUQScsZGF0YSlcbiAgLy8gICAvLyBBZGQgYSB0d2VldCB0byBvdXIgcXVldWVcbiAgLy8gICBzZWxmLmFkZFR3ZWV0KGRhdGEpO1xuICAvLyAgIH0pO1xuICAvLyAgIC8vXG4gIC8vICAgLy8gLy8gQXR0YWNoIHNjcm9sbCBldmVudCB0byB0aGUgd2luZG93IGZvciBpbmZpbml0eSBwYWdpbmdcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jaGVja1dpbmRvd1Njcm9sbCk7XG4gIC8vXG4gICAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0d2VldHM6IHByb3BzLnR3ZWV0cyxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgcGFnZTogMCxcbiAgICAgIHBhZ2luZzogZmFsc2UsXG4gICAgICBza2lwOiAwLFxuICAgICAgZG9uZTogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIGNvbnNvbGUubG9nXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiA8VHdlZXRzIHR3ZWV0cz17dGhpcy5zdGF0ZS50d2VldHN9Lz4gKi99XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0c0FwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXRzQXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUE1SEE7QUFDQTtBQThIQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
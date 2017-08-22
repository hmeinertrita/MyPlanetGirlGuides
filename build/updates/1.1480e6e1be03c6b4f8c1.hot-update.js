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
  }

  //   // Setup our ajax request
  //   var request = new XMLHttpRequest(), self = this;
  //   request.open('GET', 'page/' + page + "/" + this.state.skip, true);
  //   request.onload = function() {
  //     console.log('YEET')
  //
  //     // If everything is cool...
  //     if (request.status >= 200 && request.status < 400){
  //       console.log(request.responseText);
  //
  //       // Load our next page
  //       self.loadPagedTweets(JSON.parse(request.responseText));
  //
  //     } else {
  //
  //       // Set application state (Not paging, paging complete)
  //       self.setState({paging: false, done: true});
  //
  //     }
  //   };
  //
  //   // Fire!
  //   request.send();
  //
  // }

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
        lineNumber: 135
      },
      __self: this
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TweetsApp);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjE0ODBlNmUxYmUwM2M2YjRmOGMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4vVHdlZXRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFR3ZWV0c0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgYWRkVHdlZXQodHdlZXQpIHtcbiAgICBsZXQgdXBkYXRlZCA9IHRoaXMuc3RhdGUudHdlZXRzO1xuICAgIGxldCBjb3VudCA9IHRoaXMuc3RhdGUuY291bnQgKyAxO1xuICAgIGxldCBza2lwID0gdGhpcy5zdGF0ZS5za2lwICsgMTtcbiAgICB1cGRhdGVkLnVuc2hpZnQodHdlZXQpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3R3ZWV0czogdXBkYXRlZCwgY291bnQ6IGNvdW50LCBza2lwOiBza2lwfSk7XG4gIH1cblxuICBzaG93TmV3VHdlZXRzKCkge1xuICAgIC8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlXG4gICAgbGV0IHVwZGF0ZWQgPSB0aGlzLnN0YXRlLnR3ZWV0cztcbiAgICB1cGRhdGVkLmZvckVhY2goZnVuY3Rpb24odHdlZXQpe1xuICAgICAgdHdlZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt0d2VldHM6IHVwZGF0ZWQsIGNvdW50OiAwfSk7XG4gIH1cblxuICBsb2FkUGFnZWRUd2VldHModHdlZXRzKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGlmKHR3ZWV0cy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdXBkYXRlZCA9IHRoaXMuc3RhdGUudHdlZXRzO1xuICAgICAgdHdlZXRzLmZvckVhY2goZnVuY3Rpb24odHdlZXQpe1xuICAgICAgICB1cGRhdGVkLnB1c2godHdlZXQpO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe3R3ZWV0czp1cGRhdGVkLCBwYWdpbmc6IGZhbHNlfSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZG9uZTogdHJ1ZSwgcGFnaW5nOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ldGhvZCB0byBnZXQgSlNPTiBmcm9tIHNlcnZlciBieSBwYWdlXG4gIGdldFBhZ2UocGFnZSkge1xuICAgIGF4aW9zLmdldChgL3BhZ2UvJHtwYWdlfS8ke3RoaXMuc3RhdGUuc2tpcH1gKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vICAgLy8gU2V0dXAgb3VyIGFqYXggcmVxdWVzdFxuICAvLyAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHNlbGYgPSB0aGlzO1xuICAvLyAgIHJlcXVlc3Qub3BlbignR0VUJywgJ3BhZ2UvJyArIHBhZ2UgKyBcIi9cIiArIHRoaXMuc3RhdGUuc2tpcCwgdHJ1ZSk7XG4gIC8vICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdZRUVUJylcbiAgLy9cbiAgLy8gICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgY29vbC4uLlxuICAvLyAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCl7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiAgLy9cbiAgLy8gICAgICAgLy8gTG9hZCBvdXIgbmV4dCBwYWdlXG4gIC8vICAgICAgIHNlbGYubG9hZFBhZ2VkVHdlZXRzKEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpKTtcbiAgLy9cbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vXG4gIC8vICAgICAgIC8vIFNldCBhcHBsaWNhdGlvbiBzdGF0ZSAoTm90IHBhZ2luZywgcGFnaW5nIGNvbXBsZXRlKVxuICAvLyAgICAgICBzZWxmLnNldFN0YXRlKHtwYWdpbmc6IGZhbHNlLCBkb25lOiB0cnVlfSk7XG4gIC8vXG4gIC8vICAgICB9XG4gIC8vICAgfTtcbiAgLy9cbiAgLy8gICAvLyBGaXJlIVxuICAvLyAgIHJlcXVlc3Quc2VuZCgpO1xuICAvL1xuICAvLyB9XG5cbiAgY2hlY2tXaW5kb3dTY3JvbGwoKXtcblxuICAvLyBHZXQgc2Nyb2xsIHBvcyAmIHdpbmRvdyBkYXRhXG4gIHZhciBoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICB2YXIgcyA9IChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IDApO1xuICB2YXIgc2Nyb2xsZWQgPSAoaCArIHMpID4gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XG5cbiAgLy8gSWYgc2Nyb2xsZWQgZW5vdWdoLCBub3QgY3VycmVudGx5IHBhZ2luZyBhbmQgbm90IGNvbXBsZXRlLi4uXG4gIGlmKHNjcm9sbGVkICYmICF0aGlzLnN0YXRlLnBhZ2luZyAmJiAhdGhpcy5zdGF0ZS5kb25lKSB7XG5cbiAgICAvLyBTZXQgYXBwbGljYXRpb24gc3RhdGUgKFBhZ2luZywgSW5jcmVtZW50IHBhZ2UpXG4gICAgdGhpcy5zZXRTdGF0ZSh7cGFnaW5nOiB0cnVlLCBwYWdlOiB0aGlzLnN0YXRlLnBhZ2UgKyAxfSk7XG5cbiAgICAvLyBHZXQgdGhlIG5leHQgcGFnZSBvZiB0d2VldHMgZnJvbSB0aGUgc2VydmVyXG4gICAgdGhpcy5nZXRQYWdlKHRoaXMuc3RhdGUucGFnZSk7XG5cbiAgfVxufVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIC8vIFByZXNlcnZlIHNlbGYgcmVmZXJlbmNlXG4gIC8vICAgdmFyIHNlbGYgPSB0aGlzO1xuICAvLyAgIC8vIEluaXRpYWxpemUgc29ja2V0LmlvXG4gIC8vICAgdmFyIHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMicpO1xuICAvLyAgIHNvY2tldC5vbigndHdlZXQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAvLyAgICAgY29uc29sZS5sb2coJ0RBVEEnLGRhdGEpXG4gIC8vICAgLy8gQWRkIGEgdHdlZXQgdG8gb3VyIHF1ZXVlXG4gIC8vICAgc2VsZi5hZGRUd2VldChkYXRhKTtcbiAgLy8gICB9KTtcbiAgLy8gICAvL1xuICAvLyAgIC8vIC8vIEF0dGFjaCBzY3JvbGwgZXZlbnQgdG8gdGhlIHdpbmRvdyBmb3IgaW5maW5pdHkgcGFnaW5nXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuY2hlY2tXaW5kb3dTY3JvbGwpO1xuICAvL1xuICAgIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdHdlZXRzOiBwcm9wcy50d2VldHMsXG4gICAgICBjb3VudDogMCxcbiAgICAgIHBhZ2U6IDAsXG4gICAgICBwYWdpbmc6IGZhbHNlLFxuICAgICAgc2tpcDogMCxcbiAgICAgIGRvbmU6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICBjb25zb2xlLmxvZ1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogPFR3ZWV0cyB0d2VldHM9e3RoaXMuc3RhdGUudHdlZXRzfS8+ICovfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUd2VldHNBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0c0FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBN0hBO0FBQ0E7QUErSEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
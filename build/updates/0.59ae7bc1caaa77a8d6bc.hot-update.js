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
      console.log('response data', response.data);
      // }.then(function(response.data) {
      self.setState({
        tweets: response.data.tweets,
        utterances_tone: response.data.utterances_tone
      });
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
      utterances_tone: [],
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
  }

  render() {
    console.log('state', this.state);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Tweets_Tweets__["a" /* default */], { tweets: this.state.tweets, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (WatsonApp);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjU5YWU3YmMxY2FhYTc3YThkNmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vV2F0c29uQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUd2VldHMgZnJvbSAnLi9Ud2VldHMvVHdlZXRzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFdhdHNvbkFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBURVNUIENPREUgRk9SIFRXRUVUU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBhZGRUd2VldCh0d2VldCkge1xuICAvLyAgIGxldCB1cGRhdGVkID0gdGhpcy5zdGF0ZS50d2VldHM7XG4gIC8vICAgbGV0IGNvdW50ID0gdGhpcy5zdGF0ZS5jb3VudCArIDE7XG4gIC8vICAgbGV0IHNraXAgPSB0aGlzLnN0YXRlLnNraXAgKyAxO1xuICAvLyAgIHVwZGF0ZWQudW5zaGlmdCh0d2VldCk7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7dHdlZXRzOiB1cGRhdGVkLCBjb3VudDogY291bnQsIHNraXA6IHNraXB9KTtcbiAgLy8gfVxuICAvL1xuICAvLyBzaG93TmV3VHdlZXRzKCkge1xuICAvLyAgIC8vIFJldHJpZXZlIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlXG4gIC8vICAgbGV0IHVwZGF0ZWQgPSB0aGlzLnN0YXRlLnR3ZWV0cztcbiAgLy8gICB1cGRhdGVkLmZvckVhY2goZnVuY3Rpb24odHdlZXQpe1xuICAvLyAgICAgdHdlZXQuYWN0aXZlID0gdHJ1ZTtcbiAgLy8gICB9KTtcbiAgLy8gICB0aGlzLnNldFN0YXRlKHt0d2VldHM6IHVwZGF0ZWQsIGNvdW50OiAwfSk7XG4gIC8vIH1cbiAgLy9cbiAgLy8gbG9hZFBhZ2VkVHdlZXRzKHR3ZWV0cykge1xuICAvLyAgIGxldCBzZWxmID0gdGhpcztcbiAgLy8gICBpZih0d2VldHMubGVuZ3RoID4gMCkge1xuICAvLyAgICAgbGV0IHVwZGF0ZWQgPSB0aGlzLnN0YXRlLnR3ZWV0cztcbiAgLy8gICAgIHR3ZWV0cy5mb3JFYWNoKGZ1bmN0aW9uKHR3ZWV0KXtcbiAgLy8gICAgICAgdXBkYXRlZC5wdXNoKHR3ZWV0KTtcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAvLyAgICAgICBzZWxmLnNldFN0YXRlKHt0d2VldHM6dXBkYXRlZCwgcGFnaW5nOiBmYWxzZX0pO1xuICAvLyAgICAgfSwgMTAwMCk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe2RvbmU6IHRydWUsIHBhZ2luZzogZmFsc2V9KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyAgIGNoZWNrV2luZG93U2Nyb2xsKCl7XG4gIC8vXG4gIC8vICAgLy8gR2V0IHNjcm9sbCBwb3MgJiB3aW5kb3cgZGF0YVxuICAvLyAgIHZhciBoID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAvLyAgIHZhciBzID0gKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgMCk7XG4gIC8vICAgdmFyIHNjcm9sbGVkID0gKGggKyBzKSA+IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuICAvL1xuICAvLyAgIC8vIElmIHNjcm9sbGVkIGVub3VnaCwgbm90IGN1cnJlbnRseSBwYWdpbmcgYW5kIG5vdCBjb21wbGV0ZS4uLlxuICAvLyAgIGlmKHNjcm9sbGVkICYmICF0aGlzLnN0YXRlLnBhZ2luZyAmJiAhdGhpcy5zdGF0ZS5kb25lKSB7XG4gIC8vXG4gIC8vICAgICAvLyBTZXQgYXBwbGljYXRpb24gc3RhdGUgKFBhZ2luZywgSW5jcmVtZW50IHBhZ2UpXG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtwYWdpbmc6IHRydWUsIHBhZ2U6IHRoaXMuc3RhdGUucGFnZSArIDF9KTtcbiAgLy9cbiAgLy8gICAgIC8vIEdldCB0aGUgbmV4dCBwYWdlIG9mIHR3ZWV0cyBmcm9tIHRoZSBzZXJ2ZXJcbiAgLy8gICAgIHRoaXMuZ2V0UGFnZSh0aGlzLnN0YXRlLnBhZ2UpO1xuICAvL1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIEF4aW9zIGdldCByZXF1ZXN0IHRvIGhpdCB0aGUgQVBJXG4gIGdldFBhZ2UoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXhpb3MuZ2V0KGAvcGFnZS8ke3RoaXMuc3RhdGUucGFnZX0vJHt0aGlzLnN0YXRlLnNraXB9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgZGF0YScsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgLy8gfS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICB0d2VldHM6IHJlc3BvbnNlLmRhdGEudHdlZXRzLFxuICAgICAgICB1dHRlcmFuY2VzX3RvbmU6IHJlc3BvbnNlLmRhdGEudXR0ZXJhbmNlc190b25lXG4gICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFBhZ2UoKVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHR3ZWV0czogW10sXG4gICAgICB1dHRlcmFuY2VzX3RvbmU6IFtdLFxuICAgICAgY291bnQ6IDAsXG4gICAgICBwYWdlOiAwLFxuICAgICAgcGFnaW5nOiBmYWxzZSxcbiAgICAgIHNraXA6IDAsXG4gICAgICBkb25lOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ3N0YXRlJywgdGhpcy5zdGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxUd2VldHMgdHdlZXRzPXt0aGlzLnN0YXRlLnR3ZWV0c30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXYXRzb25BcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy93YXRzb24vV2F0c29uQXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBbEdBO0FBQ0E7QUFvR0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
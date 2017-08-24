require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/search/TweetFilter/TweetFilter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StringList_StringList__ = __webpack_require__("./src/routes/search/StringList/StringList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__ = __webpack_require__("./src/routes/search/DomainSelector/TwitterSelector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__twitter_Tweets_Tweets__ = __webpack_require__("./src/routes/twitter/Tweets/Tweets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TweetFilter_css__ = __webpack_require__("./src/routes/search/TweetFilter/TweetFilter.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TweetFilter_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__TweetFilter_css__);
var _jsxFileName = '/Users/hmeinertrita/Documents/MyPlanet/GirlGuides/src/routes/search/TweetFilter/TweetFilter.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */












class TweetFilter extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      includedWords: [],
      includedUsers: [],
      includedHastags: [],
      tweets: [],
      filteredTweets: []
    };
    this.getWords = this.getWords.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getHashtags = this.getHashtags.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.filter = this.filter.bind(this);
  }

  getWords(words) {
    this.setState({
      includedWords: words
    });
  }

  getUsers(users) {
    this.setState({
      includedUsers: users
    });
  }

  getHashtags(hashtags) {
    this.setState({
      includedHastags: hashtags
    });
  }

  getTweets() {
    const self = this;
    __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get(`/page/${this.state.page}/${this.state.skip}`).then(response => {
      console.log(response.data);
      self.setState({ tweets: response.data });
    }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTweets();
  }

  filter() {
    const tweets = this.state.tweets.filter(tweet => {
      let words = false;
      if (this.state.includedWords.length > 0) {
        for (var i = 0; i < this.state.includedWords.length; i++) {
          if (tweet.body.toLowerCase().includes(this.state.includedWords[i].toLowerCase())) {
            words = true;
            break;
          }
        }
      } else {
        words = true;
      }

      let users = false;
      if (this.state.includedUsers.length > 0) {
        for (var i = 0; i < this.state.includedUsers.length; i++) {
          if (tweet.screenname.toLowerCase() === this.state.includedUsers[i].toLowerCase()) {
            users = true;
            break;
          }
        }
      } else {
        users = true;
      }

      let hashtags = false;
      if (this.state.includedHastags.length > 0) {
        for (var i = 0; i < this.state.includedHastags.length; i++) {
          if (tweet.body.toLowerCase().includes(`#${this.state.includedHastags[i].toLowerCase()}`)) {
            hashtags = true;
            break;
          }
        }
      } else {
        hashtags = true;
      }

      return users && words && hashtags;
    });
    this.setState({
      filteredTweets: tweets
    });
  }

  render() {
    console.log('filteredTweets:', this.state.filteredTweets);
    console.log('tweets:', this.state.tweets);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_7__TweetFilter_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__TweetFilter_css___default.a.searches, __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StringList_StringList__["a" /* default */], { returnList: this.getWords, __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__["a" /* default */], { returnUsers: this.getUsers, returnHashtags: this.getHashtags, __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.filter, __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        },
        'Go!'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_7__TweetFilter_css___default.a.tweets, __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__twitter_Tweets_Tweets__["a" /* default */], { tweets: this.state.filteredTweets, __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_6_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_7__TweetFilter_css___default.a)(TweetFilter));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjllY2FjNTcwNTc4ZjBhNGIyZDRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTdHJpbmdMaXN0IGZyb20gJy4uL1N0cmluZ0xpc3QvU3RyaW5nTGlzdCc7XG5pbXBvcnQgVHdpdHRlclNlbGVjdG9yIGZyb20gJy4uL0RvbWFpblNlbGVjdG9yL1R3aXR0ZXJTZWxlY3Rvcic7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4uLy4uL3R3aXR0ZXIvVHdlZXRzL1R3ZWV0cyc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVHdlZXRGaWx0ZXIuY3NzJztcblxuY2xhc3MgVHdlZXRGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5jbHVkZWRXb3JkczogW10sXG4gICAgICBpbmNsdWRlZFVzZXJzOiBbXSxcbiAgICAgIGluY2x1ZGVkSGFzdGFnczogW10sXG4gICAgICB0d2VldHM6IFtdLFxuICAgICAgZmlsdGVyZWRUd2VldHM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5nZXRXb3JkcyA9IHRoaXMuZ2V0V29yZHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFVzZXJzID0gdGhpcy5nZXRVc2Vycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0SGFzaHRhZ3MgPSB0aGlzLmdldEhhc2h0YWdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUd2VldHMgPSB0aGlzLmdldFR3ZWV0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldFdvcmRzKHdvcmRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmNsdWRlZFdvcmRzOiB3b3JkcyxcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXJzKHVzZXJzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmNsdWRlZFVzZXJzOiB1c2VycyxcbiAgICB9KTtcbiAgfVxuXG4gIGdldEhhc2h0YWdzKGhhc2h0YWdzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmNsdWRlZEhhc3RhZ3M6IGhhc2h0YWdzLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VHdlZXRzKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGF4aW9zLmdldChgL3BhZ2UvJHt0aGlzLnN0YXRlLnBhZ2V9LyR7dGhpcy5zdGF0ZS5za2lwfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIHNlbGYuc2V0U3RhdGUoeyB0d2VldHM6IHJlc3BvbnNlLmRhdGEgfSk7XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldFR3ZWV0cygpO1xuICB9XG5cbiAgZmlsdGVyKCkge1xuICAgIGNvbnN0IHR3ZWV0cyA9IHRoaXMuc3RhdGUudHdlZXRzLmZpbHRlcigodHdlZXQpID0+IHtcbiAgICAgIGxldCB3b3JkcyA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaW5jbHVkZWRXb3Jkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5pbmNsdWRlZFdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR3ZWV0LmJvZHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLmluY2x1ZGVkV29yZHNbaV0udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHdvcmRzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd29yZHMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXNlcnMgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluY2x1ZGVkVXNlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUuaW5jbHVkZWRVc2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0d2VldC5zY3JlZW5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuc3RhdGUuaW5jbHVkZWRVc2Vyc1tpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICB1c2VycyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVzZXJzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IGhhc2h0YWdzID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbmNsdWRlZEhhc3RhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUuaW5jbHVkZWRIYXN0YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR3ZWV0LmJvZHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhgIyR7dGhpcy5zdGF0ZS5pbmNsdWRlZEhhc3RhZ3NbaV0udG9Mb3dlckNhc2UoKX1gKSkge1xuICAgICAgICAgICAgaGFzaHRhZ3MgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNodGFncyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAodXNlcnMgJiYgd29yZHMgJiYgaGFzaHRhZ3MpO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsdGVyZWRUd2VldHM6IHR3ZWV0cyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyZWRUd2VldHM6JywgdGhpcy5zdGF0ZS5maWx0ZXJlZFR3ZWV0cyk7XG4gICAgY29uc29sZS5sb2coJ3R3ZWV0czonLCB0aGlzLnN0YXRlLnR3ZWV0cyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zZWFyY2hlc30+XG4gICAgICAgICAgPFN0cmluZ0xpc3QgcmV0dXJuTGlzdD17dGhpcy5nZXRXb3Jkc30gLz5cbiAgICAgICAgICA8VHdpdHRlclNlbGVjdG9yIHJldHVyblVzZXJzPXt0aGlzLmdldFVzZXJzfSByZXR1cm5IYXNodGFncz17dGhpcy5nZXRIYXNodGFnc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5maWx0ZXJ9PkdvITwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50d2VldHN9PlxuICAgICAgICAgIDxUd2VldHMgdHdlZXRzPXt0aGlzLnN0YXRlLmZpbHRlcmVkVHdlZXRzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShUd2VldEZpbHRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU5BO0FBV0E7QUE3R0E7QUFDQTtBQStHQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
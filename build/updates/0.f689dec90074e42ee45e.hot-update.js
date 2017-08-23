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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
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
    let self = this;
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(`/page/${this.state.page}/${this.state.skip}`).then(function (response) {
      console.log(response.data);
      self.setState({ tweets: response.data });
    }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTweets();
  }

  filter() {
    const tweets = this.state.tweets.filter(tweet => {

      let words = true;
      if (this.state.includedWords.length > 0) {
        for (var i = 0; i < this.state.includedWords.length; i++) {
          if (tweet.body.toLowerCase().includes(this.state.includedWords[i].toLowerCase())) {
            words = true;
            break;
          }
        }
        words = false;
      }

      let users = true;
      if (this.state.includedUsers.length > 0) {
        for (var i = 0; i < this.state.includedUsers.length; i++) {
          if (tweet.screenname.toLowerCase() === this.state.includedUsers[i].toLowerCase()) {
            users = true;
            break;
          }
        }
        users = false;
      }

      let hashtags = true;
      if (this.state.includedHastags.length > 0) {
        for (var i = 0; i < this.state.includedHastags.length; i++) {
          if (tweet.body.toLowerCase().includes('#' + this.state.includedHastags[i].toLowerCase())) {
            hashtags = true;
            break;
          }
        }
        hashtags = false;
      }
      return users && words && hashtags;
    });
    this.setState({
      filteredTweets: tweets
    });
  }

  render() {
    console.log('filteredTweets:', this.state.filteredTweets);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StringList_StringList__["a" /* default */], { returnList: this.getWords, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__["a" /* default */], { returnUsers: this.getUsers, returnHashtags: this.getHashtags, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.filter, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        },
        'Go!'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (TweetFilter);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmY2ODlkZWM5MDA3NGU0MmVlNDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU3RyaW5nTGlzdCBmcm9tICcuLi9TdHJpbmdMaXN0L1N0cmluZ0xpc3QnXG5pbXBvcnQgVHdpdHRlclNlbGVjdG9yIGZyb20gJy4uL0RvbWFpblNlbGVjdG9yL1R3aXR0ZXJTZWxlY3RvcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFR3ZWV0RmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluY2x1ZGVkV29yZHM6IFtdLFxuICAgICAgaW5jbHVkZWRVc2VyczogW10sXG4gICAgICBpbmNsdWRlZEhhc3RhZ3M6IFtdLFxuICAgICAgdHdlZXRzOiBbXSxcbiAgICAgIGZpbHRlcmVkVHdlZXRzOiBbXVxuICAgIH07XG4gICAgdGhpcy5nZXRXb3JkcyA9IHRoaXMuZ2V0V29yZHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFVzZXJzID0gdGhpcy5nZXRVc2Vycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0SGFzaHRhZ3MgPSB0aGlzLmdldEhhc2h0YWdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUd2VldHMgPSB0aGlzLmdldFR3ZWV0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldFdvcmRzKHdvcmRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmNsdWRlZFdvcmRzOiB3b3Jkc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlcnModXNlcnMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkVXNlcnM6IHVzZXJzXG4gICAgfSk7XG4gIH1cblxuICBnZXRIYXNodGFncyhoYXNodGFncykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5jbHVkZWRIYXN0YWdzOiBoYXNodGFnc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VHdlZXRzKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGF4aW9zLmdldChgL3BhZ2UvJHt0aGlzLnN0YXRlLnBhZ2V9LyR7dGhpcy5zdGF0ZS5za2lwfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dHdlZXRzOiByZXNwb25zZS5kYXRhfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0VHdlZXRzKCk7XG4gIH1cblxuICBmaWx0ZXIoKSB7XG4gICAgY29uc3QgdHdlZXRzID0gdGhpcy5zdGF0ZS50d2VldHMuZmlsdGVyKCh0d2VldCkgPT4ge1xuXG4gICAgICBsZXQgd29yZHM9dHJ1ZTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluY2x1ZGVkV29yZHMubGVuZ3RoPjApIHtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHRoaXMuc3RhdGUuaW5jbHVkZWRXb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0d2VldC5ib2R5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbmNsdWRlZFdvcmRzW2ldLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICB3b3Jkcz10cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdvcmRzPWZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdXNlcnM9dHJ1ZTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluY2x1ZGVkVXNlcnMubGVuZ3RoPjApIHtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHRoaXMuc3RhdGUuaW5jbHVkZWRVc2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0d2VldC5zY3JlZW5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRoaXMuc3RhdGUuaW5jbHVkZWRVc2Vyc1tpXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICB1c2Vycz10cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHVzZXJzPWZhbHNlO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGFzaHRhZ3M9dHJ1ZTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluY2x1ZGVkSGFzdGFncy5sZW5ndGg+MCkge1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8dGhpcy5zdGF0ZS5pbmNsdWRlZEhhc3RhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHdlZXQuYm9keS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCcjJyt0aGlzLnN0YXRlLmluY2x1ZGVkSGFzdGFnc1tpXS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgaGFzaHRhZ3M9dHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoYXNodGFncz1mYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAodXNlcnMgJiYgd29yZHMgJiYgaGFzaHRhZ3MpO1xuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsdGVyZWRUd2VldHM6dHdlZXRzXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ2ZpbHRlcmVkVHdlZXRzOicsdGhpcy5zdGF0ZS5maWx0ZXJlZFR3ZWV0cyk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTdHJpbmdMaXN0IHJldHVybkxpc3Q9e3RoaXMuZ2V0V29yZHN9Lz5cbiAgICAgICAgPFR3aXR0ZXJTZWxlY3RvciByZXR1cm5Vc2Vycz17dGhpcy5nZXRVc2Vyc30gcmV0dXJuSGFzaHRhZ3M9e3RoaXMuZ2V0SGFzaHRhZ3N9Lz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZpbHRlcn0+R28hPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL1R3ZWV0RmlsdGVyL1R3ZWV0RmlsdGVyLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBcEdBO0FBQ0E7QUFzR0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
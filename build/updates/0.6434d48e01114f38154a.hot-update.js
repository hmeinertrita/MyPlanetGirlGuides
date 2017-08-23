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

      let words = false;
      if (this.state.includedWords.length > 0) {
        for (var i = 0; i < this.state.includedWords.length; i++) {
          if (tweet.body.toLowerCase().includes(this.state.includedWords[i].toLowerCase())) {
            words = true;
            break;
          }
        }
      }

      let users = false;
      if (this.state.includedUsers.length > 0) {
        for (var i = 0; i < this.state.includedUsers.length; i++) {
          if (tweet.screenname.toLowerCase() === this.state.includedUsers[i].toLowerCase()) {
            users = true;
            break;
          }
        }
      }

      let hashtags = false;
      if (this.state.includedHastags.length > 0) {
        for (var i = 0; i < this.state.includedHastags.length; i++) {
          if (tweet.body.toLowerCase().includes('#' + this.state.includedHastags[i].toLowerCase())) {
            hashtags = true;
            break;
          }
        }
      }
      return users && (words || hashtags);
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
          lineNumber: 107
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StringList_StringList__["a" /* default */], { returnList: this.getWords, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__["a" /* default */], { returnUsers: this.getUsers, returnHashtags: this.getHashtags, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.filter, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjY0MzRkNDhlMDExMTRmMzgxNTRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU3RyaW5nTGlzdCBmcm9tICcuLi9TdHJpbmdMaXN0L1N0cmluZ0xpc3QnXG5pbXBvcnQgVHdpdHRlclNlbGVjdG9yIGZyb20gJy4uL0RvbWFpblNlbGVjdG9yL1R3aXR0ZXJTZWxlY3RvcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFR3ZWV0RmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluY2x1ZGVkV29yZHM6IFtdLFxuICAgICAgaW5jbHVkZWRVc2VyczogW10sXG4gICAgICBpbmNsdWRlZEhhc3RhZ3M6IFtdLFxuICAgICAgdHdlZXRzOiBbXSxcbiAgICAgIGZpbHRlcmVkVHdlZXRzOiBbXVxuICAgIH07XG4gICAgdGhpcy5nZXRXb3JkcyA9IHRoaXMuZ2V0V29yZHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFVzZXJzID0gdGhpcy5nZXRVc2Vycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0SGFzaHRhZ3MgPSB0aGlzLmdldEhhc2h0YWdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUd2VldHMgPSB0aGlzLmdldFR3ZWV0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldFdvcmRzKHdvcmRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmNsdWRlZFdvcmRzOiB3b3Jkc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlcnModXNlcnMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkVXNlcnM6IHVzZXJzXG4gICAgfSk7XG4gIH1cblxuICBnZXRIYXNodGFncyhoYXNodGFncykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5jbHVkZWRIYXN0YWdzOiBoYXNodGFnc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VHdlZXRzKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGF4aW9zLmdldChgL3BhZ2UvJHt0aGlzLnN0YXRlLnBhZ2V9LyR7dGhpcy5zdGF0ZS5za2lwfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dHdlZXRzOiByZXNwb25zZS5kYXRhfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0VHdlZXRzKCk7XG4gIH1cblxuICBmaWx0ZXIoKSB7XG4gICAgY29uc3QgdHdlZXRzID0gdGhpcy5zdGF0ZS50d2VldHMuZmlsdGVyKCh0d2VldCkgPT4ge1xuXG4gICAgICBsZXQgd29yZHM9ZmFsc2U7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbmNsdWRlZFdvcmRzLmxlbmd0aD4wKSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx0aGlzLnN0YXRlLmluY2x1ZGVkV29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHdlZXQuYm9keS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuaW5jbHVkZWRXb3Jkc1tpXS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgd29yZHM9dHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgdXNlcnM9ZmFsc2U7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbmNsdWRlZFVzZXJzLmxlbmd0aD4wKSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx0aGlzLnN0YXRlLmluY2x1ZGVkVXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHdlZXQuc2NyZWVubmFtZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnN0YXRlLmluY2x1ZGVkVXNlcnNbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgdXNlcnM9dHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgaGFzaHRhZ3M9ZmFsc2U7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbmNsdWRlZEhhc3RhZ3MubGVuZ3RoPjApIHtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHRoaXMuc3RhdGUuaW5jbHVkZWRIYXN0YWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR3ZWV0LmJvZHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnIycrdGhpcy5zdGF0ZS5pbmNsdWRlZEhhc3RhZ3NbaV0udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGhhc2h0YWdzPXRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAodXNlcnMgJiYgKHdvcmRzIHx8IGhhc2h0YWdzKSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJlZFR3ZWV0czp0d2VldHNcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyZWRUd2VldHM6Jyx0aGlzLnN0YXRlLmZpbHRlcmVkVHdlZXRzKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFN0cmluZ0xpc3QgcmV0dXJuTGlzdD17dGhpcy5nZXRXb3Jkc30vPlxuICAgICAgICA8VHdpdHRlclNlbGVjdG9yIHJldHVyblVzZXJzPXt0aGlzLmdldFVzZXJzfSByZXR1cm5IYXNodGFncz17dGhpcy5nZXRIYXNodGFnc30vPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmlsdGVyfT5HbyE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHdlZXRGaWx0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFqR0E7QUFDQTtBQW1HQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
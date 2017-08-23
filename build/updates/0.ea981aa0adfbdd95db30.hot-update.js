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
      tweets: [],
      filteredTweets: []
    };
    this.getWords = this.getWords.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.filter = this.filter.bind(this);
  }

  getWords(words) {
    this.setState({
      includedWords: words
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
    const tweets = this.state.tweets.map(tweet => {
      if (this.state.includedWords.length > 0) {
        for (var i = 0; i < this.state.includedWords.length; i++) {
          if (tweet.body.includes(this.state.includedWords[i])) {
            return tweet;
          }
        }
      }
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
          lineNumber: 67
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StringList_StringList__["a" /* default */], { returnList: this.getWords, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.filter, __source: {
            fileName: _jsxFileName,
            lineNumber: 70
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmVhOTgxYWEwYWRmYmRkOTVkYjMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU3RyaW5nTGlzdCBmcm9tICcuLi9TdHJpbmdMaXN0L1N0cmluZ0xpc3QnXG5pbXBvcnQgVHdpdHRlclNlbGVjdG9yIGZyb20gJy4uL0RvbWFpblNlbGVjdG9yL1R3aXR0ZXJTZWxlY3RvcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIFR3ZWV0RmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluY2x1ZGVkV29yZHM6IFtdLFxuICAgICAgdHdlZXRzOiBbXSxcbiAgICAgIGZpbHRlcmVkVHdlZXRzOiBbXVxuICAgIH07XG4gICAgdGhpcy5nZXRXb3JkcyA9IHRoaXMuZ2V0V29yZHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFR3ZWV0cyA9IHRoaXMuZ2V0VHdlZXRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0V29yZHMod29yZHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkV29yZHM6IHdvcmRzXG4gICAgfSk7XG4gIH1cblxuICBnZXRUd2VldHMoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgYXhpb3MuZ2V0KGAvcGFnZS8ke3RoaXMuc3RhdGUucGFnZX0vJHt0aGlzLnN0YXRlLnNraXB9YCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICBzZWxmLnNldFN0YXRlKHt0d2VldHM6IHJlc3BvbnNlLmRhdGF9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRUd2VldHMoKTtcbiAgfVxuXG4gIGZpbHRlcigpIHtcbiAgICBjb25zdCB0d2VldHMgPSB0aGlzLnN0YXRlLnR3ZWV0cy5tYXAoKHR3ZWV0KSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbmNsdWRlZFdvcmRzLmxlbmd0aD4wKSB7XG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx0aGlzLnN0YXRlLmluY2x1ZGVkV29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHdlZXQuYm9keS5pbmNsdWRlcyh0aGlzLnN0YXRlLmluY2x1ZGVkV29yZHNbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHdlZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBmaWx0ZXJlZFR3ZWV0czp0d2VldHNcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnZmlsdGVyZWRUd2VldHM6Jyx0aGlzLnN0YXRlLmZpbHRlcmVkVHdlZXRzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U3RyaW5nTGlzdCByZXR1cm5MaXN0PXt0aGlzLmdldFdvcmRzfS8+XG4gICAgICAgIDxUd2l0dGVyU2VsZWN0b3IgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZpbHRlcn0+R28hPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL1R3ZWV0RmlsdGVyL1R3ZWV0RmlsdGVyLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBekRBO0FBQ0E7QUEyREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
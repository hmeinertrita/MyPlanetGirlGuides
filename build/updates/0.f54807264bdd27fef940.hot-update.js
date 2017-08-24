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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tone_analysis_ToneBox_ToneBox__ = __webpack_require__("./src/routes/tone-analysis/ToneBox/ToneBox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css__ = __webpack_require__("./src/routes/search/TweetFilter/TweetFilter.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__TweetFilter_css__);
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
      utterances: [],
      filteredTweets: [],
      averageTones: []
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
    __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(`/page/${this.state.page}/${this.state.skip}`).then(response => {
      console.log(response.data);
      self.setState({ tweets: response.data.tweets });
    }).catch(error => {
      console.log(error);
    });
  }

  getUtterances() {
    const self = this;
    __WEBPACK_IMPORTED_MODULE_6_axios___default.a.get(`/page/${this.state.page}/${this.state.skip}`).then(response => {
      console.log(response.data);
      self.setState({ utterances: response.data.utterancesTone.utterances_tone });
    }).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTweets();
    this.getUtterances();
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

    const utterances = tweets.map(tweet => {
      return this.state.utterances[this.state.tweets.indexOf(tweet)];
    });

    let tones = [];
    for (var i = 0; i < utterances.length; i++) {
      for (var j = 0; j < utterances[i].tones.length; j++) {
        let idx = -1;
        for (var k = 0; k < tones.length; k++) {
          console.log('hey');
          if (tones[k].tone_name === utterances[i].tones[j].tone_name) {
            let idx = k;
            break;
          }
        }

        if (idx !== -1) {
          tones[idx].scores.push(utterances[i].tones[j].score);
        } else {
          tones.push({
            tone_name: utterances[i].tones[j].tone_name,
            scores: [utterances[i].tones[j].score]
          });
        }
      }
    }

    const averageTones = tones.map(tone => {
      let score = 0;
      for (var i = 0; i < tone.scores.length; i++) {
        score += tone.scores[i];
      }
      score = score / tone.scores.length;

      return {
        tone_name: tone.tone_name,
        score: score
      };
    });

    this.setState({
      filteredTweets: tweets,
      averageTones: averageTones
    });
  }

  render() {
    console.log('tweet filter state', this.state);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.params, __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.searches, __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StringList_StringList__["a" /* default */], { returnList: this.getWords, __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__["a" /* default */], { returnUsers: this.getUsers, returnHashtags: this.getHashtags, __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.button, onClick: this.filter, __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          },
          'Find Tweets'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.utterances, __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__tone_analysis_ToneBox_ToneBox__["a" /* default */], { utterances: this.state.averageTones, __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.tweets, __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__twitter_Tweets_Tweets__["a" /* default */], { tweets: this.state.filteredTweets, __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_7_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a)(TweetFilter));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmY1NDgwNzI2NGJkZDI3ZmVmOTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTdHJpbmdMaXN0IGZyb20gJy4uL1N0cmluZ0xpc3QvU3RyaW5nTGlzdCc7XG5pbXBvcnQgVHdpdHRlclNlbGVjdG9yIGZyb20gJy4uL0RvbWFpblNlbGVjdG9yL1R3aXR0ZXJTZWxlY3Rvcic7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4uLy4uL3R3aXR0ZXIvVHdlZXRzL1R3ZWV0cyc7XG5pbXBvcnQgVG9uZUJveCBmcm9tICcuLi8uLi90b25lLWFuYWx5c2lzL1RvbmVCb3gvVG9uZUJveCc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVHdlZXRGaWx0ZXIuY3NzJztcblxuY2xhc3MgVHdlZXRGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5jbHVkZWRXb3JkczogW10sXG4gICAgICBpbmNsdWRlZFVzZXJzOiBbXSxcbiAgICAgIGluY2x1ZGVkSGFzdGFnczogW10sXG4gICAgICB0d2VldHM6IFtdLFxuICAgICAgdXR0ZXJhbmNlczogW10sXG4gICAgICBmaWx0ZXJlZFR3ZWV0czogW10sXG4gICAgICBhdmVyYWdlVG9uZXM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmdldFdvcmRzID0gdGhpcy5nZXRXb3Jkcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VXNlcnMgPSB0aGlzLmdldFVzZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRIYXNodGFncyA9IHRoaXMuZ2V0SGFzaHRhZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFR3ZWV0cyA9IHRoaXMuZ2V0VHdlZXRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0V29yZHMod29yZHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkV29yZHM6IHdvcmRzLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlcnModXNlcnMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkVXNlcnM6IHVzZXJzLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0SGFzaHRhZ3MoaGFzaHRhZ3MpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkSGFzdGFnczogaGFzaHRhZ3MsXG4gICAgfSk7XG4gIH1cblxuICBnZXRUd2VldHMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgYXhpb3MuZ2V0KGAvcGFnZS8ke3RoaXMuc3RhdGUucGFnZX0vJHt0aGlzLnN0YXRlLnNraXB9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7IHR3ZWV0czogcmVzcG9uc2UuZGF0YS50d2VldHMgfSk7XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBnZXRVdHRlcmFuY2VzKCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGF4aW9zLmdldChgL3BhZ2UvJHt0aGlzLnN0YXRlLnBhZ2V9LyR7dGhpcy5zdGF0ZS5za2lwfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgIHNlbGYuc2V0U3RhdGUoeyB1dHRlcmFuY2VzOiByZXNwb25zZS5kYXRhLnV0dGVyYW5jZXNUb25lLnV0dGVyYW5jZXNfdG9uZSB9KTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0VHdlZXRzKCk7XG4gICAgdGhpcy5nZXRVdHRlcmFuY2VzKCk7XG4gIH1cblxuICBmaWx0ZXIoKSB7XG4gICAgY29uc3QgdHdlZXRzID0gdGhpcy5zdGF0ZS50d2VldHMuZmlsdGVyKCh0d2VldCkgPT4ge1xuICAgICAgbGV0IHdvcmRzID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbmNsdWRlZFdvcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmluY2x1ZGVkV29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHdlZXQuYm9keS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc3RhdGUuaW5jbHVkZWRXb3Jkc1tpXS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgd29yZHMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3b3JkcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGxldCB1c2VycyA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaW5jbHVkZWRVc2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5pbmNsdWRlZFVzZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR3ZWV0LnNjcmVlbm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5zdGF0ZS5pbmNsdWRlZFVzZXJzW2ldLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHVzZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXNlcnMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgaGFzaHRhZ3MgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluY2x1ZGVkSGFzdGFncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5pbmNsdWRlZEhhc3RhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHdlZXQuYm9keS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGAjJHt0aGlzLnN0YXRlLmluY2x1ZGVkSGFzdGFnc1tpXS50b0xvd2VyQ2FzZSgpfWApKSB7XG4gICAgICAgICAgICBoYXNodGFncyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc2h0YWdzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICh1c2VycyAmJiB3b3JkcyAmJiBoYXNodGFncyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB1dHRlcmFuY2VzPXR3ZWV0cy5tYXAoKHR3ZWV0KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS51dHRlcmFuY2VzW3RoaXMuc3RhdGUudHdlZXRzLmluZGV4T2YodHdlZXQpXTtcbiAgICB9KTtcblxuICAgIGxldCB0b25lcz1bXTtcbiAgICBmb3IgKHZhciBpPTA7aTx1dHRlcmFuY2VzLmxlbmd0aDtpKyspIHtcbiAgICAgIGZvciAodmFyIGo9MDtqPHV0dGVyYW5jZXNbaV0udG9uZXMubGVuZ3RoO2orKykge1xuICAgICAgICBsZXQgaWR4PS0xO1xuICAgICAgICBmb3IgKHZhciBrPTA7azx0b25lcy5sZW5ndGg7aysrKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2hleScpO1xuICAgICAgICAgIGlmICh0b25lc1trXS50b25lX25hbWUgPT09IHV0dGVyYW5jZXNbaV0udG9uZXNbal0udG9uZV9uYW1lKSB7XG4gICAgICAgICAgICBsZXQgaWR4PWs7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgIHRvbmVzW2lkeF0uc2NvcmVzLnB1c2godXR0ZXJhbmNlc1tpXS50b25lc1tqXS5zY29yZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdG9uZXMucHVzaCh7XG4gICAgICAgICAgICB0b25lX25hbWU6IHV0dGVyYW5jZXNbaV0udG9uZXNbal0udG9uZV9uYW1lLFxuICAgICAgICAgICAgc2NvcmVzOiBbdXR0ZXJhbmNlc1tpXS50b25lc1tqXS5zY29yZV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGF2ZXJhZ2VUb25lcyA9IHRvbmVzLm1hcCgodG9uZSkgPT4ge1xuICAgICAgbGV0IHNjb3JlPTA7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8dG9uZS5zY29yZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2NvcmUrPXRvbmUuc2NvcmVzW2ldO1xuICAgICAgfVxuICAgICAgc2NvcmU9c2NvcmUvdG9uZS5zY29yZXMubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gKHtcbiAgICAgICAgdG9uZV9uYW1lOiB0b25lLnRvbmVfbmFtZSxcbiAgICAgICAgc2NvcmU6IHNjb3JlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsdGVyZWRUd2VldHM6IHR3ZWV0cyxcbiAgICAgIGF2ZXJhZ2VUb25lczogYXZlcmFnZVRvbmVzXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ3R3ZWV0IGZpbHRlciBzdGF0ZScsdGhpcy5zdGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wYXJhbXN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNlYXJjaGVzfT5cbiAgICAgICAgICAgIDxTdHJpbmdMaXN0IHJldHVybkxpc3Q9e3RoaXMuZ2V0V29yZHN9IC8+XG4gICAgICAgICAgICA8VHdpdHRlclNlbGVjdG9yIHJldHVyblVzZXJzPXt0aGlzLmdldFVzZXJzfSByZXR1cm5IYXNodGFncz17dGhpcy5nZXRIYXNodGFnc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17cy5idXR0b259IG9uQ2xpY2s9e3RoaXMuZmlsdGVyfT5GaW5kIFR3ZWV0czwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudXR0ZXJhbmNlc30+XG4gICAgICAgICAgPFRvbmVCb3ggdXR0ZXJhbmNlcz17dGhpcy5zdGF0ZS5hdmVyYWdlVG9uZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50d2VldHN9PlxuICAgICAgICAgIDxUd2VldHMgdHdlZXRzPXt0aGlzLnN0YXRlLmZpbHRlcmVkVHdlZXRzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShUd2VldEZpbHRlcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVhBO0FBZ0JBO0FBektBO0FBQ0E7QUEyS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
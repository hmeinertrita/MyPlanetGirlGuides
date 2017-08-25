require("source-map-support").install();
exports.id = 1;
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
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/search/TweetFilter/TweetFilter.js';
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
      console.log('endpoint response data', response.data);
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
          if (tones[k].tone_name === utterances[i].tones[j].tone_name) {
            idx = k;

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
    // console.log('tweet filter state',this.state);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.params, __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.searches, __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StringList_StringList__["a" /* default */], { returnList: this.getWords, __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__["a" /* default */], { returnUsers: this.getUsers, returnHashtags: this.getHashtags, __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.button, onClick: this.filter, __source: {
              fileName: _jsxFileName,
              lineNumber: 182
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
            lineNumber: 184
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__tone_analysis_ToneBox_ToneBox__["a" /* default */], { utterances: this.state.averageTones, __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_8__TweetFilter_css___default.a.tweets, __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__twitter_Tweets_Tweets__["a" /* default */], { tweets: this.state.filteredTweets, __source: {
            fileName: _jsxFileName,
            lineNumber: 188
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLmRlMzNkMjgxOTJmMmVjYWNmMjJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTdHJpbmdMaXN0IGZyb20gJy4uL1N0cmluZ0xpc3QvU3RyaW5nTGlzdCc7XG5pbXBvcnQgVHdpdHRlclNlbGVjdG9yIGZyb20gJy4uL0RvbWFpblNlbGVjdG9yL1R3aXR0ZXJTZWxlY3Rvcic7XG5pbXBvcnQgVHdlZXRzIGZyb20gJy4uLy4uL3R3aXR0ZXIvVHdlZXRzL1R3ZWV0cyc7XG5pbXBvcnQgVG9uZUJveCBmcm9tICcuLi8uLi90b25lLWFuYWx5c2lzL1RvbmVCb3gvVG9uZUJveCc7XG5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVHdlZXRGaWx0ZXIuY3NzJztcblxuY2xhc3MgVHdlZXRGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5jbHVkZWRXb3JkczogW10sXG4gICAgICBpbmNsdWRlZFVzZXJzOiBbXSxcbiAgICAgIGluY2x1ZGVkSGFzdGFnczogW10sXG4gICAgICB0d2VldHM6IFtdLFxuICAgICAgdXR0ZXJhbmNlczogW10sXG4gICAgICBmaWx0ZXJlZFR3ZWV0czogW10sXG4gICAgICBhdmVyYWdlVG9uZXM6IFtdXG4gICAgfTtcbiAgICB0aGlzLmdldFdvcmRzID0gdGhpcy5nZXRXb3Jkcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0VXNlcnMgPSB0aGlzLmdldFVzZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRIYXNodGFncyA9IHRoaXMuZ2V0SGFzaHRhZ3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFR3ZWV0cyA9IHRoaXMuZ2V0VHdlZXRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZ2V0V29yZHMod29yZHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkV29yZHM6IHdvcmRzLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlcnModXNlcnMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkVXNlcnM6IHVzZXJzLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0SGFzaHRhZ3MoaGFzaHRhZ3MpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1ZGVkSGFzdGFnczogaGFzaHRhZ3MsXG4gICAgfSk7XG4gIH1cblxuICBnZXRUd2VldHMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgYXhpb3MuZ2V0KGAvcGFnZS8ke3RoaXMuc3RhdGUucGFnZX0vJHt0aGlzLnN0YXRlLnNraXB9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCByZXNwb25zZSBkYXRhJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICBzZWxmLnNldFN0YXRlKHsgdHdlZXRzOiByZXNwb25zZS5kYXRhLnR3ZWV0cyB9KTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFV0dGVyYW5jZXMoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgYXhpb3MuZ2V0KGAvcGFnZS8ke3RoaXMuc3RhdGUucGFnZX0vJHt0aGlzLnN0YXRlLnNraXB9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7IHV0dGVyYW5jZXM6IHJlc3BvbnNlLmRhdGEudXR0ZXJhbmNlc1RvbmUudXR0ZXJhbmNlc190b25lIH0pO1xuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRUd2VldHMoKTtcbiAgICB0aGlzLmdldFV0dGVyYW5jZXMoKTtcbiAgfVxuXG4gIGZpbHRlcigpIHtcbiAgICBjb25zdCB0d2VldHMgPSB0aGlzLnN0YXRlLnR3ZWV0cy5maWx0ZXIoKHR3ZWV0KSA9PiB7XG4gICAgICBsZXQgd29yZHMgPSBmYWxzZTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmluY2x1ZGVkV29yZHMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RhdGUuaW5jbHVkZWRXb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0d2VldC5ib2R5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5pbmNsdWRlZFdvcmRzW2ldLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICB3b3JkcyA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdvcmRzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHVzZXJzID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5pbmNsdWRlZFVzZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmluY2x1ZGVkVXNlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodHdlZXQuc2NyZWVubmFtZS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnN0YXRlLmluY2x1ZGVkVXNlcnNbaV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgdXNlcnMgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1c2VycyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBoYXNodGFncyA9IGZhbHNlO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaW5jbHVkZWRIYXN0YWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmluY2x1ZGVkSGFzdGFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0d2VldC5ib2R5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYCMke3RoaXMuc3RhdGUuaW5jbHVkZWRIYXN0YWdzW2ldLnRvTG93ZXJDYXNlKCl9YCkpIHtcbiAgICAgICAgICAgIGhhc2h0YWdzID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzaHRhZ3MgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKHVzZXJzICYmIHdvcmRzICYmIGhhc2h0YWdzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHV0dGVyYW5jZXM9dHdlZXRzLm1hcCgodHdlZXQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnV0dGVyYW5jZXNbdGhpcy5zdGF0ZS50d2VldHMuaW5kZXhPZih0d2VldCldO1xuICAgIH0pO1xuXG4gICAgbGV0IHRvbmVzPVtdO1xuXG4gICAgZm9yICh2YXIgaT0wO2k8dXR0ZXJhbmNlcy5sZW5ndGg7aSsrKSB7XG4gICAgICBmb3IgKHZhciBqPTA7ajx1dHRlcmFuY2VzW2ldLnRvbmVzLmxlbmd0aDtqKyspIHtcbiAgICAgICAgbGV0IGlkeD0tMTtcbiAgICAgICAgZm9yICh2YXIgaz0wO2s8dG9uZXMubGVuZ3RoO2srKykge1xuICAgICAgICAgIGlmICh0b25lc1trXS50b25lX25hbWUgPT09IHV0dGVyYW5jZXNbaV0udG9uZXNbal0udG9uZV9uYW1lKSB7XG4gICAgICAgICAgICBpZHg9aztcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICB0b25lc1tpZHhdLnNjb3Jlcy5wdXNoKHV0dGVyYW5jZXNbaV0udG9uZXNbal0uc2NvcmUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRvbmVzLnB1c2goe1xuICAgICAgICAgICAgdG9uZV9uYW1lOiB1dHRlcmFuY2VzW2ldLnRvbmVzW2pdLnRvbmVfbmFtZSxcbiAgICAgICAgICAgIHNjb3JlczogW3V0dGVyYW5jZXNbaV0udG9uZXNbal0uc2NvcmVdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhdmVyYWdlVG9uZXMgPSB0b25lcy5tYXAoKHRvbmUpID0+IHtcbiAgICAgIGxldCBzY29yZT0wO1xuICAgICAgZm9yICh2YXIgaT0wOyBpPHRvbmUuc2NvcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNjb3JlKz10b25lLnNjb3Jlc1tpXTtcbiAgICAgIH1cbiAgICAgIHNjb3JlPXNjb3JlL3RvbmUuc2NvcmVzLmxlbmd0aDtcblxuICAgICAgcmV0dXJuICh7XG4gICAgICAgIHRvbmVfbmFtZTogdG9uZS50b25lX25hbWUsXG4gICAgICAgIHNjb3JlOiBzY29yZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbHRlcmVkVHdlZXRzOiB0d2VldHMsXG4gICAgICBhdmVyYWdlVG9uZXM6IGF2ZXJhZ2VUb25lc1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd0d2VldCBmaWx0ZXIgc3RhdGUnLHRoaXMuc3RhdGUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucGFyYW1zfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zZWFyY2hlc30+XG4gICAgICAgICAgICA8U3RyaW5nTGlzdCByZXR1cm5MaXN0PXt0aGlzLmdldFdvcmRzfSAvPlxuICAgICAgICAgICAgPFR3aXR0ZXJTZWxlY3RvciByZXR1cm5Vc2Vycz17dGhpcy5nZXRVc2Vyc30gcmV0dXJuSGFzaHRhZ3M9e3RoaXMuZ2V0SGFzaHRhZ3N9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3MuYnV0dG9ufSBvbkNsaWNrPXt0aGlzLmZpbHRlcn0+RmluZCBUd2VldHM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnV0dGVyYW5jZXN9PlxuICAgICAgICAgIDxUb25lQm94IHV0dGVyYW5jZXM9e3RoaXMuc3RhdGUuYXZlcmFnZVRvbmVzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudHdlZXRzfT5cbiAgICAgICAgICA8VHdlZXRzIHR3ZWV0cz17dGhpcy5zdGF0ZS5maWx0ZXJlZFR3ZWV0c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoVHdlZXRGaWx0ZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL1R3ZWV0RmlsdGVyL1R3ZWV0RmlsdGVyLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVhBO0FBZ0JBO0FBMUtBO0FBQ0E7QUE0S0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
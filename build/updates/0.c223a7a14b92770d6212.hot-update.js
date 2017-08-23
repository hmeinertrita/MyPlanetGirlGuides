require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/search/DomainSelector/TwitterSelector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png__ = __webpack_require__("./src/routes/search/assets/close-button-small.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png__ = __webpack_require__("./src/routes/search/assets/add-button-small.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css__ = __webpack_require__("./src/routes/search/DomainSelector/DomainSelector.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__DomainSelector_css__);
var _jsxFileName = '/Users/hmeinertrita/Documents/MyPlanet/GirlGuides/src/routes/search/DomainSelector/TwitterSelector.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Image Sources:
 * https://pixabay.com/p-1727490/?no_redirect
*/










class TwitterEntry extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    let leadingChar = '';
    if (this.props.type === 'hashtag') {
      leadingChar = '#';
    } else if (this.props.type === 'user') {
      leadingChar = '@';
    }
    this.state = {
      symbol: leadingChar
    };

    this.deleteSelf = this.deleteSelf.bind(this);
  }

  deleteSelf() {
    this.props.deleteItem(this.props.id, this.props.type);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.entry, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.entrySymbol, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          this.state.symbol
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'label',
          { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.entryLabel, __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          },
          this.props.text
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.deleteButton, type: 'image', src: __WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png___default.a, onClick: this.deleteSelf, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })
    );
  }
}

class TwitterSelector extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      hashtags: [],
      inputValue: '',
      inclusionMode: 'exclusive'
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  deleteItem(id, type) {
    const users = this.state.users.map(i => i);
    const hashtags = this.state.hashtags.map(i => i);

    if (type === 'user') {
      users.splice(id, 1);
    } else if (type === 'hashtag') {
      hashtags.splice(id, 1);
    }

    this.setState({
      users: users,
      hashtags: hastags
    });
  }

  addItem(event) {
    event.preventDefault();

    const users = this.state.users.map(i => i);
    const hashtags = this.state.hashtags.map(i => i);
    var text = this.state.inputValue;

    if (text.charAt(0) === '#') {
      hashtags.splice(0, 0, text.substring(1, text.length));
    } else if (text.charAt(0) === '@') {
      users.splice(0, 0, text.substring(1, text.length));
    }

    this.setState({
      users: users,
      hashtags: hashtags,
      inputValue: ""
    });
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleRadio(event) {
    this.setState({
      inclusionMode: event.currentTarget.value
    });
  }

  render() {
    const users = this.state.users.map((text, idx) => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TwitterEntry, {
        className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.entry,
        id: idx,
        type: 'user',
        text: text,
        deleteItem: this.deleteItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      });
    });
    const hashtags = this.state.hashtags.map((text, idx) => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TwitterEntry, {
        className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.entry,
        id: idx,
        type: 'hashtag',
        text: text,
        deleteItem: this.deleteItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'mode', value: 'exclusive', onChange: this.handleRadio, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }),
      'Exclusive',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'mode', value: 'inclusive', onChange: this.handleRadio, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }),
      'Inclusive',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.addForm, onSubmit: this.addItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.addField, onChange: this.handleChange, value: this.state.inputValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'image', src: __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png___default.a, __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        },
        'Users:',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.users, __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          },
          users
        ),
        'Hashtags:',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.hashtags, __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          },
          hashtags
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a)(TwitterSelector));

/***/ }),

/***/ "./src/routes/search/Search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StringList_StringList__ = __webpack_require__("./src/routes/search/StringList/StringList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__ = __webpack_require__("./src/routes/search/DomainSelector/TwitterSelector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TweetFilter_TweetFilter__ = __webpack_require__("./src/routes/search/TweetFilter/TweetFilter.js");
var _jsxFileName = '/Users/hmeinertrita/Documents/MyPlanet/GirlGuides/src/routes/search/Search.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class Search extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      includedWords: []
    };
    this.getWords = this.getWords.bind(this);
  }

  getWords(words) {
    this.setState({
      includedWords: words
    });
  }

  render() {
    const styles = {
      fontFamily: 'Helvetica Neue',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TweetFilter_TweetFilter__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "./src/routes/search/StringList/StringList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png__ = __webpack_require__("./src/routes/search/assets/close-button-small.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png__ = __webpack_require__("./src/routes/search/assets/add-button-small.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StringList_css__ = __webpack_require__("./src/routes/search/StringList/StringList.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StringList_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__StringList_css__);
var _jsxFileName = '/Users/hmeinertrita/Documents/MyPlanet/GirlGuides/src/routes/search/StringList/StringList.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Image Sources:
 * https://pixabay.com/p-1727490/?no_redirect
*/










class StringEntry extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.deleteSelf = this.deleteSelf.bind(this);
  }

  deleteSelf() {
    this.props.deleteItem(this.props.id);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.entry, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.entryLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        },
        this.props.word
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.deleteButton, type: 'image', src: __WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png___default.a, onClick: this.deleteSelf, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })
    );
  }
}

class StringList extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      strings: [],
      inputValue: ""
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  returnList() {
    this.props.returnList(this.state.strings);
  }

  deleteItem(id) {
    const strings = this.state.strings.map(i => i);

    strings.splice(id, 1);

    this.setState({
      strings: strings
    });
  }

  addItem(event) {
    event.preventDefault();

    const strings = this.state.strings.map(i => i);
    var word = this.state.inputValue;
    word = word.toLowerCase();
    strings.splice(0, 0, word);

    this.setState({
      strings: strings,
      inputValue: ""
    });

    this.props.returnList(strings);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {

    const strings = this.state.strings.map((word, idx) => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StringEntry, {
        className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.entry,
        key: idx,
        id: idx,
        word: word,
        deleteItem: this.deleteItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.addForm, onSubmit: this.addItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.addField, onChange: this.handleChange, value: this.state.inputValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'image', src: __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png___default.a, __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        },
        strings
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a)(StringList));

/***/ }),

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
    const tweets = this.state.tweets.filter(tweet => {
      if (this.state.includedWords.length > 0) {
        for (var i = 0; i < this.state.includedWords.length; i++) {
          if (tweet.body.toLowerCase().includes(this.state.includedWords[i].toLowerCase())) {
            return true;
          }
        }
        return false;
      }
      return true;
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
          lineNumber: 69
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StringList_StringList__["a" /* default */], { returnList: this.getWords, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.filter, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmMyMjNhN2ExNGI5Mjc3MGQ2MjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvRG9tYWluU2VsZWN0b3IvVHdpdHRlclNlbGVjdG9yLmpzIiwiL1VzZXJzL2htZWluZXJ0cml0YS9Eb2N1bWVudHMvTXlQbGFuZXQvR2lybEd1aWRlcy9zcmMvcm91dGVzL3NlYXJjaC9TZWFyY2guanMiLCIvVXNlcnMvaG1laW5lcnRyaXRhL0RvY3VtZW50cy9NeVBsYW5ldC9HaXJsR3VpZGVzL3NyYy9yb3V0ZXMvc2VhcmNoL1N0cmluZ0xpc3QvU3RyaW5nTGlzdC5qcyIsIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4gLyoqXG4gICogSW1hZ2UgU291cmNlczpcbiAgKiBodHRwczovL3BpeGFiYXkuY29tL3AtMTcyNzQ5MC8/bm9fcmVkaXJlY3RcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBjbG9zZVVybCBmcm9tICcuLi9hc3NldHMvY2xvc2UtYnV0dG9uLXNtYWxsLnBuZydcbmltcG9ydCBhZGRVcmwgZnJvbSAnLi4vYXNzZXRzL2FkZC1idXR0b24tc21hbGwucG5nJ1xuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL0RvbWFpblNlbGVjdG9yLmNzcyc7XG5cbmNsYXNzIFR3aXR0ZXJFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGxldCBsZWFkaW5nQ2hhcj0nJztcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSAnaGFzaHRhZycpIHtcbiAgICAgIGxlYWRpbmdDaGFyPScjJztcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSAndXNlcicpIHtcbiAgICAgIGxlYWRpbmdDaGFyPSdAJztcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN5bWJvbDogbGVhZGluZ0NoYXJcbiAgICB9O1xuXG5cbiAgICB0aGlzLmRlbGV0ZVNlbGYgPSB0aGlzLmRlbGV0ZVNlbGYuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZVNlbGYoKSB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVJdGVtKHRoaXMucHJvcHMuaWQsdGhpcy5wcm9wcy50eXBlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZW50cnl9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MuZW50cnlTeW1ib2x9Pnt0aGlzLnN0YXRlLnN5bWJvbH08L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MuZW50cnlMYWJlbH0+e3RoaXMucHJvcHMudGV4dH08L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17cy5kZWxldGVCdXR0b259IHR5cGU9XCJpbWFnZVwiIHNyYz17Y2xvc2VVcmx9IG9uQ2xpY2s9e3RoaXMuZGVsZXRlU2VsZn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgVHdpdHRlclNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJzOltdLFxuICAgICAgaGFzaHRhZ3M6W10sXG4gICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgIGluY2x1c2lvbk1vZGU6ICdleGNsdXNpdmUnXG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlSXRlbSA9IHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkSXRlbSA9IHRoaXMuYWRkSXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVJhZGlvID0gdGhpcy5oYW5kbGVSYWRpby5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZGVsZXRlSXRlbShpZCx0eXBlKSB7XG4gICAgY29uc3QgdXNlcnM9dGhpcy5zdGF0ZS51c2Vycy5tYXAoKGkpID0+IGkpO1xuICAgIGNvbnN0IGhhc2h0YWdzPXRoaXMuc3RhdGUuaGFzaHRhZ3MubWFwKChpKSA9PiBpKTtcblxuICAgIGlmKHR5cGUgPT09ICd1c2VyJykge1xuICAgICAgdXNlcnMuc3BsaWNlKGlkLDEpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnaGFzaHRhZycpIHtcbiAgICAgIGhhc2h0YWdzLnNwbGljZShpZCwxKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJzOiB1c2VycyxcbiAgICAgIGhhc2h0YWdzOiBoYXN0YWdzXG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgY29uc3QgdXNlcnM9dGhpcy5zdGF0ZS51c2Vycy5tYXAoKGkpID0+IGkpO1xuICAgIGNvbnN0IGhhc2h0YWdzPXRoaXMuc3RhdGUuaGFzaHRhZ3MubWFwKChpKSA9PiBpKTtcbiAgICB2YXIgdGV4dD10aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cbiAgICBpZiAodGV4dC5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgaGFzaHRhZ3Muc3BsaWNlKDAsMCx0ZXh0LnN1YnN0cmluZygxLHRleHQubGVuZ3RoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRleHQuY2hhckF0KDApID09PSAnQCcpIHtcbiAgICAgIHVzZXJzLnNwbGljZSgwLDAsdGV4dC5zdWJzdHJpbmcoMSx0ZXh0Lmxlbmd0aCkpO1xuICAgIH1cblxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VyczogdXNlcnMsXG4gICAgICBoYXNodGFnczogaGFzaHRhZ3MsXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUmFkaW8oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1c2lvbk1vZGU6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB1c2Vycz10aGlzLnN0YXRlLnVzZXJzLm1hcCgodGV4dCxpZHgpPT57XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHdpdHRlckVudHJ5XG4gICAgICAgICAgY2xhc3NOYW1lID0ge3MuZW50cnl9XG4gICAgICAgICAgaWQ9e2lkeH1cbiAgICAgICAgICB0eXBlPSd1c2VyJ1xuICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNodGFncz10aGlzLnN0YXRlLmhhc2h0YWdzLm1hcCgodGV4dCxpZHgpPT57XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHdpdHRlckVudHJ5XG4gICAgICAgICAgY2xhc3NOYW1lID0ge3MuZW50cnl9XG4gICAgICAgICAgaWQ9e2lkeH1cbiAgICAgICAgICB0eXBlPSdoYXNodGFnJ1xuICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nbW9kZScgdmFsdWU9J2V4Y2x1c2l2ZScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmFkaW99Lz5FeGNsdXNpdmVcbiAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdtb2RlJyB2YWx1ZT0naW5jbHVzaXZlJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVSYWRpb30vPkluY2x1c2l2ZVxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3MuYWRkRm9ybX0gb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17cy5hZGRGaWVsZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfS8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJpbWFnZVwiIHNyYz17YWRkVXJsfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgVXNlcnM6XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudXNlcnN9Pnt1c2Vyc308L2Rpdj5cbiAgICAgICAgICBIYXNodGFnczpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oYXNodGFnc30+e2hhc2h0YWdzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShUd2l0dGVyU2VsZWN0b3IpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL0RvbWFpblNlbGVjdG9yL1R3aXR0ZXJTZWxlY3Rvci5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN0cmluZ0xpc3QgZnJvbSAnLi9TdHJpbmdMaXN0L1N0cmluZ0xpc3QnXG5pbXBvcnQgVHdpdHRlclNlbGVjdG9yIGZyb20gJy4vRG9tYWluU2VsZWN0b3IvVHdpdHRlclNlbGVjdG9yJ1xuaW1wb3J0IFR3ZWV0RmlsdGVyIGZyb20gJy4vVHdlZXRGaWx0ZXIvVHdlZXRGaWx0ZXInXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmNsdWRlZFdvcmRzOiBbXVxuICAgIH07XG4gICAgdGhpcy5nZXRXb3JkcyA9IHRoaXMuZ2V0V29yZHMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldFdvcmRzKHdvcmRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmNsdWRlZFdvcmRzOiB3b3Jkc1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBsaW5lSGVpZ2h0OiAnMTBweCcsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VHdlZXRGaWx0ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL1NlYXJjaC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIC8qKlxuICAqIEltYWdlIFNvdXJjZXM6XG4gICogaHR0cHM6Ly9waXhhYmF5LmNvbS9wLTE3Mjc0OTAvP25vX3JlZGlyZWN0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgY2xvc2VVcmwgZnJvbSAnLi4vYXNzZXRzL2Nsb3NlLWJ1dHRvbi1zbWFsbC5wbmcnXG5pbXBvcnQgYWRkVXJsIGZyb20gJy4uL2Fzc2V0cy9hZGQtYnV0dG9uLXNtYWxsLnBuZydcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9TdHJpbmdMaXN0LmNzcyc7XG5cbmNsYXNzIFN0cmluZ0VudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmRlbGV0ZVNlbGYgPSB0aGlzLmRlbGV0ZVNlbGYuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZVNlbGYoKSB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVJdGVtKHRoaXMucHJvcHMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5lbnRyeX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MuZW50cnlMYWJlbH0+e3RoaXMucHJvcHMud29yZH08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzLmRlbGV0ZUJ1dHRvbn0gdHlwZT1cImltYWdlXCIgc3JjPXtjbG9zZVVybH0gb25DbGljaz17dGhpcy5kZWxldGVTZWxmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBTdHJpbmdMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0cmluZ3M6IFtdLFxuICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEl0ZW0gPSB0aGlzLmFkZEl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZXR1cm5MaXN0KCkge1xuICAgIHRoaXMucHJvcHMucmV0dXJuTGlzdCh0aGlzLnN0YXRlLnN0cmluZ3MpO1xuICB9XG5cbiAgZGVsZXRlSXRlbShpZCkge1xuICAgIGNvbnN0IHN0cmluZ3M9dGhpcy5zdGF0ZS5zdHJpbmdzLm1hcCgoaSkgPT4gaSk7XG5cbiAgICBzdHJpbmdzLnNwbGljZShpZCwxKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RyaW5nczogc3RyaW5nc1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzdHJpbmdzPXRoaXMuc3RhdGUuc3RyaW5ncy5tYXAoKGkpID0+IGkpO1xuICAgIHZhciB3b3JkPXRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICB3b3JkPXdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICBzdHJpbmdzLnNwbGljZSgwLDAsd29yZCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0cmluZ3M6IHN0cmluZ3MsXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLnJldHVybkxpc3Qoc3RyaW5ncyk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBzdHJpbmdzPXRoaXMuc3RhdGUuc3RyaW5ncy5tYXAoKHdvcmQsaWR4KT0+e1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0cmluZ0VudHJ5XG4gICAgICAgICAgY2xhc3NOYW1lID0ge3MuZW50cnl9XG4gICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgaWQ9e2lkeH1cbiAgICAgICAgICB3b3JkPXt3b3JkfVxuICAgICAgICAgIGRlbGV0ZUl0ZW09e3RoaXMuZGVsZXRlSXRlbX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3MuYWRkRm9ybX0gb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17cy5hZGRGaWVsZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfS8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJpbWFnZVwiIHNyYz17YWRkVXJsfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAge3N0cmluZ3N9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFN0cmluZ0xpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL1N0cmluZ0xpc3QvU3RyaW5nTGlzdC5qcyIsIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN0cmluZ0xpc3QgZnJvbSAnLi4vU3RyaW5nTGlzdC9TdHJpbmdMaXN0J1xuaW1wb3J0IFR3aXR0ZXJTZWxlY3RvciBmcm9tICcuLi9Eb21haW5TZWxlY3Rvci9Ud2l0dGVyU2VsZWN0b3InXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBUd2VldEZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbmNsdWRlZFdvcmRzOiBbXSxcbiAgICAgIHR3ZWV0czogW10sXG4gICAgICBmaWx0ZXJlZFR3ZWV0czogW11cbiAgICB9O1xuICAgIHRoaXMuZ2V0V29yZHMgPSB0aGlzLmdldFdvcmRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRUd2VldHMgPSB0aGlzLmdldFR3ZWV0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldFdvcmRzKHdvcmRzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbmNsdWRlZFdvcmRzOiB3b3Jkc1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VHdlZXRzKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIGF4aW9zLmdldChgL3BhZ2UvJHt0aGlzLnN0YXRlLnBhZ2V9LyR7dGhpcy5zdGF0ZS5za2lwfWApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7dHdlZXRzOiByZXNwb25zZS5kYXRhfSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0VHdlZXRzKCk7XG4gIH1cblxuICBmaWx0ZXIoKSB7XG4gICAgY29uc3QgdHdlZXRzID0gdGhpcy5zdGF0ZS50d2VldHMuZmlsdGVyKCh0d2VldCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaW5jbHVkZWRXb3Jkcy5sZW5ndGg+MCkge1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8dGhpcy5zdGF0ZS5pbmNsdWRlZFdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHR3ZWV0LmJvZHkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnN0YXRlLmluY2x1ZGVkV29yZHNbaV0udG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbHRlcmVkVHdlZXRzOnR3ZWV0c1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJlZFR3ZWV0czonLHRoaXMuc3RhdGUuZmlsdGVyZWRUd2VldHMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U3RyaW5nTGlzdCByZXR1cm5MaXN0PXt0aGlzLmdldFdvcmRzfS8+XG4gICAgICAgIDxUd2l0dGVyU2VsZWN0b3IgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmZpbHRlcn0+R28hPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR3ZWV0RmlsdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL1R3ZWV0RmlsdGVyL1R3ZWV0RmlsdGVyLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBaENBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVBBO0FBZUE7QUEzR0E7QUFDQTtBQTZHQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hLQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQS9CQTtBQUNBO0FBaUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7Ozs7Ozs7OztBQVNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFsQkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQXpFQTtBQUNBO0FBMkVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQTNEQTtBQUNBO0FBNkRBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
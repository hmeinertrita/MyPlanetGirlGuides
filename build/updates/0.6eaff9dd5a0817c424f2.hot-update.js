require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/search/Search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__StringList_StringList__ = __webpack_require__("./src/routes/search/StringList/StringList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__ = __webpack_require__("./src/routes/search/DomainSelector/TwitterSelector.js");
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
    console.log('state:', words);
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__StringList_StringList__["a" /* default */], { returnList: this.getWords, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__DomainSelector_TwitterSelector__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjZlYWZmOWRkNWEwODE3YzQyNGYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvU2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFN0cmluZ0xpc3QgZnJvbSAnLi9TdHJpbmdMaXN0L1N0cmluZ0xpc3QnXG5pbXBvcnQgVHdpdHRlclNlbGVjdG9yIGZyb20gJy4vRG9tYWluU2VsZWN0b3IvVHdpdHRlclNlbGVjdG9yJ1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5jbHVkZWRXb3JkczogW11cbiAgICB9O1xuICAgIHRoaXMuZ2V0V29yZHMgPSB0aGlzLmdldFdvcmRzLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRXb3Jkcyh3b3Jkcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5jbHVkZWRXb3Jkczogd29yZHNcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnc3RhdGU6Jyx3b3Jkcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSBOZXVlJyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMHB4JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTdHJpbmdMaXN0IHJldHVybkxpc3Q9e3RoaXMuZ2V0V29yZHN9Lz5cbiAgICAgICAgPFR3aXR0ZXJTZWxlY3RvciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zZWFyY2gvU2VhcmNoLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFqQ0E7QUFDQTtBQW1DQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
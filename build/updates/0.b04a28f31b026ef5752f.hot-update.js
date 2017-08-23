require("source-map-support").install();
exports.id = 0;
exports.modules = {

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

    this.props.returnList(this.state.strings);
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

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmIwNGEyOGYzMWIwMjZlZjU3NTJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvU3RyaW5nTGlzdC9TdHJpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIC8qKlxuICAqIEltYWdlIFNvdXJjZXM6XG4gICogaHR0cHM6Ly9waXhhYmF5LmNvbS9wLTE3Mjc0OTAvP25vX3JlZGlyZWN0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgY2xvc2VVcmwgZnJvbSAnLi4vYXNzZXRzL2Nsb3NlLWJ1dHRvbi1zbWFsbC5wbmcnXG5pbXBvcnQgYWRkVXJsIGZyb20gJy4uL2Fzc2V0cy9hZGQtYnV0dG9uLXNtYWxsLnBuZydcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9TdHJpbmdMaXN0LmNzcyc7XG5cbmNsYXNzIFN0cmluZ0VudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmRlbGV0ZVNlbGYgPSB0aGlzLmRlbGV0ZVNlbGYuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZVNlbGYoKSB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVJdGVtKHRoaXMucHJvcHMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5lbnRyeX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MuZW50cnlMYWJlbH0+e3RoaXMucHJvcHMud29yZH08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzLmRlbGV0ZUJ1dHRvbn0gdHlwZT1cImltYWdlXCIgc3JjPXtjbG9zZVVybH0gb25DbGljaz17dGhpcy5kZWxldGVTZWxmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBTdHJpbmdMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0cmluZ3M6IFtdLFxuICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEl0ZW0gPSB0aGlzLmFkZEl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZXR1cm5MaXN0KCkge1xuICAgIHRoaXMucHJvcHMucmV0dXJuTGlzdCh0aGlzLnN0YXRlLnN0cmluZ3MpO1xuICB9XG5cbiAgZGVsZXRlSXRlbShpZCkge1xuICAgIGNvbnN0IHN0cmluZ3M9dGhpcy5zdGF0ZS5zdHJpbmdzLm1hcCgoaSkgPT4gaSk7XG5cbiAgICBzdHJpbmdzLnNwbGljZShpZCwxKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RyaW5nczogc3RyaW5nc1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzdHJpbmdzPXRoaXMuc3RhdGUuc3RyaW5ncy5tYXAoKGkpID0+IGkpO1xuICAgIHZhciB3b3JkPXRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICB3b3JkPXdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICBzdHJpbmdzLnNwbGljZSgwLDAsd29yZCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0cmluZ3M6IHN0cmluZ3MsXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiXG4gICAgfSk7XG5cbiAgICB0aGlzLnByb3BzLnJldHVybkxpc3QodGhpcy5zdGF0ZS5zdHJpbmdzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHN0cmluZ3M9dGhpcy5zdGF0ZS5zdHJpbmdzLm1hcCgod29yZCxpZHgpPT57XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3RyaW5nRW50cnlcbiAgICAgICAgICBjbGFzc05hbWUgPSB7cy5lbnRyeX1cbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBpZD17aWR4fVxuICAgICAgICAgIHdvcmQ9e3dvcmR9XG4gICAgICAgICAgZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17cy5hZGRGb3JtfSBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzLmFkZEZpZWxkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9Lz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImltYWdlXCIgc3JjPXthZGRVcmx9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICB7c3RyaW5nc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoU3RyaW5nTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zZWFyY2gvU3RyaW5nTGlzdC9TdHJpbmdMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFsQkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQXpFQTtBQUNBO0FBMkVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
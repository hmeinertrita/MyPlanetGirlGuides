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
    this.state = {
      excluded: ["testword"]
    };

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
          lineNumber: 40
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.entryLabel, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        },
        this.props.word
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.deleteButton, type: 'image', src: __WEBPACK_IMPORTED_MODULE_2__assets_close_button_small_png___default.a, onClick: this.deleteSelf, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
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
      excluded: [],
      inputValue: ""
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteItem(id) {
    const excluded = this.state.excluded.map(i => i);
    /*
    let i;
    for (i=0;i<excluded.length;i++) {
      if (excluded[i].id === id) {
        break;
      }
    } */

    excluded.splice(id, 1);

    this.setState({
      excluded: excluded
    });
  }

  addItem(event) {
    event.preventDefault();

    const excluded = this.state.excluded.map(i => i);
    var word = this.state.inputValue;
    word = word.toLowerCase();
    excluded.splice(0, 0, word);

    this.setState({
      excluded: excluded,
      inputValue: ""
    });
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    const excludedWords = this.state.excluded.map((word, idx) => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StringEntry, {
        className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.entry,
        id: idx,
        word: word,
        deleteItem: this.deleteItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      });
    });
    console.log('state:', this.state);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.addForm, onSubmit: this.addItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.addField, onChange: this.handleChange, value: this.state.inputValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'image', src: __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png___default.a, __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        },
        excludedWords
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a)(StringList));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjg5MTJlYTQ4M2E3MTNkMjVkNWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvU3RyaW5nTGlzdC9TdHJpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIC8qKlxuICAqIEltYWdlIFNvdXJjZXM6XG4gICogaHR0cHM6Ly9waXhhYmF5LmNvbS9wLTE3Mjc0OTAvP25vX3JlZGlyZWN0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgY2xvc2VVcmwgZnJvbSAnLi4vYXNzZXRzL2Nsb3NlLWJ1dHRvbi1zbWFsbC5wbmcnXG5pbXBvcnQgYWRkVXJsIGZyb20gJy4uL2Fzc2V0cy9hZGQtYnV0dG9uLXNtYWxsLnBuZydcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9TdHJpbmdMaXN0LmNzcyc7XG5cbmNsYXNzIFN0cmluZ0VudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4Y2x1ZGVkOiBbXCJ0ZXN0d29yZFwiXVxuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZVNlbGYgPSB0aGlzLmRlbGV0ZVNlbGYuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZVNlbGYoKSB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVJdGVtKHRoaXMucHJvcHMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5lbnRyeX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3MuZW50cnlMYWJlbH0+e3RoaXMucHJvcHMud29yZH08L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzLmRlbGV0ZUJ1dHRvbn0gdHlwZT1cImltYWdlXCIgc3JjPXtjbG9zZVVybH0gb25DbGljaz17dGhpcy5kZWxldGVTZWxmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBTdHJpbmdMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4Y2x1ZGVkOiBbXSxcbiAgICAgIGlucHV0VmFsdWU6IFwiXCJcbiAgICB9O1xuXG4gICAgdGhpcy5kZWxldGVJdGVtID0gdGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRJdGVtID0gdGhpcy5hZGRJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZGVsZXRlSXRlbShpZCkge1xuICAgIGNvbnN0IGV4Y2x1ZGVkPXRoaXMuc3RhdGUuZXhjbHVkZWQubWFwKChpKSA9PiBpKTtcbiAgICAvKlxuICAgIGxldCBpO1xuICAgIGZvciAoaT0wO2k8ZXhjbHVkZWQubGVuZ3RoO2krKykge1xuICAgICAgaWYgKGV4Y2x1ZGVkW2ldLmlkID09PSBpZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9ICovXG5cbiAgICBleGNsdWRlZC5zcGxpY2UoaWQsMSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4Y2x1ZGVkOiBleGNsdWRlZFxuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBleGNsdWRlZD10aGlzLnN0YXRlLmV4Y2x1ZGVkLm1hcCgoaSkgPT4gaSk7XG4gICAgdmFyIHdvcmQ9dGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuICAgIHdvcmQ9d29yZC50b0xvd2VyQ2FzZSgpO1xuICAgIGV4Y2x1ZGVkLnNwbGljZSgwLDAsd29yZCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4Y2x1ZGVkOiBleGNsdWRlZCxcbiAgICAgIGlucHV0VmFsdWU6IFwiXCJcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBleGNsdWRlZFdvcmRzPXRoaXMuc3RhdGUuZXhjbHVkZWQubWFwKCh3b3JkLGlkeCk9PntcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHJpbmdFbnRyeVxuICAgICAgICAgIGNsYXNzTmFtZSA9IHtzLmVudHJ5fVxuICAgICAgICAgIGlkPXtpZHh9XG4gICAgICAgICAgd29yZD17d29yZH1cbiAgICAgICAgICBkZWxldGVJdGVtPXt0aGlzLmRlbGV0ZUl0ZW19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdzdGF0ZTonLHRoaXMuc3RhdGUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3MuYWRkRm9ybX0gb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17cy5hZGRGaWVsZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfS8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJpbWFnZVwiIHNyYz17YWRkVXJsfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAge2V4Y2x1ZGVkV29yZHN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFN0cmluZ0xpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL1N0cmluZ0xpc3QvU3RyaW5nTGlzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBckJBO0FBQ0E7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQXpFQTtBQUNBO0FBMkVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
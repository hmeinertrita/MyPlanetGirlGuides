require("source-map-support").install();
exports.id = 1;
exports.modules = {

/***/ "./src/routes/search/StringList/StringList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__close_button_small_png__ = __webpack_require__("./src/routes/search/StringList/close-button-small.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__close_button_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__close_button_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_button_small_png__ = __webpack_require__("./src/routes/search/StringList/add-button-small.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_button_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__add_button_small_png__);
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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.deleteButton, type: 'image', src: __WEBPACK_IMPORTED_MODULE_2__close_button_small_png___default.a, onClick: this.deleteSelf, __source: {
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
      excluded: ["testword"],
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
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      },
      'Search Set',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.addForm, onSubmit: this.addItem, __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a.addField, onChange: this.handleChange, value: this.state.inputValue, __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'image', src: __WEBPACK_IMPORTED_MODULE_3__add_button_small_png___default.a, __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          })
        ),
        excludedWords
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_5__StringList_css___default.a)(StringList));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8xLjE1NjI0NzQzNmJhZDU1ZWVhZGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvU3RyaW5nTGlzdC9TdHJpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIC8qKlxuICAqIEltYWdlIFNvdXJjZXM6XG4gICogaHR0cHM6Ly9waXhhYmF5LmNvbS9wLTE3Mjc0OTAvP25vX3JlZGlyZWN0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgY2xvc2VVcmwgZnJvbSAnLi9jbG9zZS1idXR0b24tc21hbGwucG5nJ1xuaW1wb3J0IGFkZFVybCBmcm9tICcuL2FkZC1idXR0b24tc21hbGwucG5nJ1xuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1N0cmluZ0xpc3QuY3NzJztcblxuY2xhc3MgU3RyaW5nRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhjbHVkZWQ6IFtcInRlc3R3b3JkXCJdXG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlU2VsZiA9IHRoaXMuZGVsZXRlU2VsZi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZGVsZXRlU2VsZigpIHtcbiAgICB0aGlzLnByb3BzLmRlbGV0ZUl0ZW0odGhpcy5wcm9wcy5pZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmVudHJ5fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5lbnRyeUxhYmVsfT57dGhpcy5wcm9wcy53b3JkfTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3MuZGVsZXRlQnV0dG9ufSB0eXBlPVwiaW1hZ2VcIiBzcmM9e2Nsb3NlVXJsfSBvbkNsaWNrPXt0aGlzLmRlbGV0ZVNlbGZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIFN0cmluZ0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhjbHVkZWQ6IFtcInRlc3R3b3JkXCJdLFxuICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEl0ZW0gPSB0aGlzLmFkZEl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZWxldGVJdGVtKGlkKSB7XG4gICAgY29uc3QgZXhjbHVkZWQ9dGhpcy5zdGF0ZS5leGNsdWRlZC5tYXAoKGkpID0+IGkpO1xuICAgIC8qXG4gICAgbGV0IGk7XG4gICAgZm9yIChpPTA7aTxleGNsdWRlZC5sZW5ndGg7aSsrKSB7XG4gICAgICBpZiAoZXhjbHVkZWRbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gKi9cblxuICAgIGV4Y2x1ZGVkLnNwbGljZShpZCwxKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhjbHVkZWQ6IGV4Y2x1ZGVkXG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGV4Y2x1ZGVkPXRoaXMuc3RhdGUuZXhjbHVkZWQubWFwKChpKSA9PiBpKTtcbiAgICB2YXIgd29yZD10aGlzLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgd29yZD13b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgZXhjbHVkZWQuc3BsaWNlKDAsMCx3b3JkKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhjbHVkZWQ6IGV4Y2x1ZGVkLFxuICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGV4Y2x1ZGVkV29yZHM9dGhpcy5zdGF0ZS5leGNsdWRlZC5tYXAoKHdvcmQsaWR4KT0+e1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0cmluZ0VudHJ5XG4gICAgICAgICAgY2xhc3NOYW1lID0ge3MuZW50cnl9XG4gICAgICAgICAgaWQ9e2lkeH1cbiAgICAgICAgICB3b3JkPXt3b3JkfVxuICAgICAgICAgIGRlbGV0ZUl0ZW09e3RoaXMuZGVsZXRlSXRlbX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICBTZWFyY2ggU2V0XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3MuYWRkRm9ybX0gb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzLmFkZEZpZWxkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9Lz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaW1hZ2VcIiBzcmM9e2FkZFVybH0gLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAge2V4Y2x1ZGVkV29yZHN9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoU3RyaW5nTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zZWFyY2gvU3RyaW5nTGlzdC9TdHJpbmdMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFyQkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBTEE7QUFGQTtBQVdBO0FBekVBO0FBQ0E7QUEyRUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
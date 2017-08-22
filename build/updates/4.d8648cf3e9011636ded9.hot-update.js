require("source-map-support").install();
exports.id = 4;
exports.modules = {

/***/ "./src/routes/search/StringList/StringList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StringList_css__ = __webpack_require__("./src/routes/search/StringList/StringList.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StringList_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__StringList_css__);
var _jsxFileName = '/Users/hmeinertrita/Documents/MyPlanet/GirlGuides/src/routes/search/StringList/StringList.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
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
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        this.props.word
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.deleteSelf, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        },
        'X'
      )
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
    word.toLowerCase();
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
    const styles = {
      fontFamily: 'Helvetica Neue',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    const excludedWords = this.state.excluded.map((word, idx) => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StringEntry, {
        className: 'entry',
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
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      },
      'Search Set',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { onSubmit: this.addItem, __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { onChange: this.handleChange, value: this.state.inputValue, __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 115
              },
              __self: this
            },
            'Add'
          )
        ),
        excludedWords
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__StringList_css___default.a)(StringList));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy80LmQ4NjQ4Y2YzZTkwMTE2MzZkZWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvU3RyaW5nTGlzdC9TdHJpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9TdHJpbmdMaXN0LmNzcyc7XG5cbmNsYXNzIFN0cmluZ0VudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4Y2x1ZGVkOiBbXCJ0ZXN0d29yZFwiXVxuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZVNlbGYgPSB0aGlzLmRlbGV0ZVNlbGYuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZVNlbGYoKSB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVJdGVtKHRoaXMucHJvcHMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMud29yZH08L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZGVsZXRlU2VsZn0+WDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBTdHJpbmdMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4Y2x1ZGVkOiBbXCJ0ZXN0d29yZFwiXSxcbiAgICAgIGlucHV0VmFsdWU6IFwiXCJcbiAgICB9O1xuXG4gICAgdGhpcy5kZWxldGVJdGVtID0gdGhpcy5kZWxldGVJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGRJdGVtID0gdGhpcy5hZGRJdGVtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgZGVsZXRlSXRlbShpZCkge1xuICAgIGNvbnN0IGV4Y2x1ZGVkPXRoaXMuc3RhdGUuZXhjbHVkZWQubWFwKChpKSA9PiBpKTtcbiAgICAvKlxuICAgIGxldCBpO1xuICAgIGZvciAoaT0wO2k8ZXhjbHVkZWQubGVuZ3RoO2krKykge1xuICAgICAgaWYgKGV4Y2x1ZGVkW2ldLmlkID09PSBpZCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9ICovXG5cbiAgICBleGNsdWRlZC5zcGxpY2UoaWQsMSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4Y2x1ZGVkOiBleGNsdWRlZFxuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBleGNsdWRlZD10aGlzLnN0YXRlLmV4Y2x1ZGVkLm1hcCgoaSkgPT4gaSk7XG4gICAgdmFyIHdvcmQ9dGhpcy5zdGF0ZS5pbnB1dFZhbHVlO1xuICAgIHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICBleGNsdWRlZC5zcGxpY2UoMCwwLHdvcmQpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleGNsdWRlZDogZXhjbHVkZWQsXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSBOZXVlJyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMHB4JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfVxuICAgIGNvbnN0IGV4Y2x1ZGVkV29yZHM9dGhpcy5zdGF0ZS5leGNsdWRlZC5tYXAoKHdvcmQsaWR4KT0+e1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0cmluZ0VudHJ5XG4gICAgICAgICAgY2xhc3NOYW1lID0gXCJlbnRyeVwiXG4gICAgICAgICAgaWQ9e2lkeH1cbiAgICAgICAgICB3b3JkPXt3b3JkfVxuICAgICAgICAgIGRlbGV0ZUl0ZW09e3RoaXMuZGVsZXRlSXRlbX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIFNlYXJjaCBTZXRcbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmFkZEl0ZW19PlxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuaW5wdXRWYWx1ZX0vPlxuICAgICAgICAgICAgPGJ1dHRvbj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAge2V4Y2x1ZGVkV29yZHN9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoU3RyaW5nTGlzdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zZWFyY2gvU3RyaW5nTGlzdC9TdHJpbmdMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFyQkE7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFMQTtBQUZBO0FBV0E7QUFsRkE7QUFDQTtBQW9GQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
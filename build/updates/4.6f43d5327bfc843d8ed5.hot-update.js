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
          lineNumber: 29
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'label',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        },
        this.props.word
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'button',
        { onClick: this.deleteSelf, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
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
    excluded.push(word);

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
          lineNumber: 99
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      },
      'Search Set',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        },
        excludedWords,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { onSubmit: this.addItem, __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { onChange: this.handleChange, value: this.state.inputValue, __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            },
            'Add'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (StringList);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy80LjZmNDNkNTMyN2JmYzg0M2Q4ZWQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvU3RyaW5nTGlzdC9TdHJpbmdMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5jbGFzcyBTdHJpbmdFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGNsdWRlZDogW1widGVzdHdvcmRcIl1cbiAgICB9O1xuXG4gICAgdGhpcy5kZWxldGVTZWxmID0gdGhpcy5kZWxldGVTZWxmLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZWxldGVTZWxmKCkge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlSXRlbSh0aGlzLnByb3BzLmlkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLndvcmR9PC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmRlbGV0ZVNlbGZ9Plg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgU3RyaW5nTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGNsdWRlZDogW1widGVzdHdvcmRcIl0sXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiXG4gICAgfTtcblxuICAgIHRoaXMuZGVsZXRlSXRlbSA9IHRoaXMuZGVsZXRlSXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkSXRlbSA9IHRoaXMuYWRkSXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0oaWQpIHtcbiAgICBjb25zdCBleGNsdWRlZD10aGlzLnN0YXRlLmV4Y2x1ZGVkLm1hcCgoaSkgPT4gaSk7XG4gICAgLypcbiAgICBsZXQgaTtcbiAgICBmb3IgKGk9MDtpPGV4Y2x1ZGVkLmxlbmd0aDtpKyspIHtcbiAgICAgIGlmIChleGNsdWRlZFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSAqL1xuXG4gICAgZXhjbHVkZWQuc3BsaWNlKGlkLDEpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleGNsdWRlZDogZXhjbHVkZWRcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZXhjbHVkZWQ9dGhpcy5zdGF0ZS5leGNsdWRlZC5tYXAoKGkpID0+IGkpO1xuICAgIHZhciB3b3JkPXRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcbiAgICB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gICAgZXhjbHVkZWQucHVzaCh3b3JkKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhjbHVkZWQ6IGV4Y2x1ZGVkLFxuICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBsaW5lSGVpZ2h0OiAnMTBweCcsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH1cbiAgICBjb25zdCBleGNsdWRlZFdvcmRzPXRoaXMuc3RhdGUuZXhjbHVkZWQubWFwKCh3b3JkLGlkeCk9PntcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHJpbmdFbnRyeVxuICAgICAgICAgIGNsYXNzTmFtZSA9IFwiZW50cnlcIlxuICAgICAgICAgIGlkPXtpZHh9XG4gICAgICAgICAgd29yZD17d29yZH1cbiAgICAgICAgICBkZWxldGVJdGVtPXt0aGlzLmRlbGV0ZUl0ZW19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBTZWFyY2ggU2V0XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7ZXhjbHVkZWRXb3Jkc31cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9Lz5cbiAgICAgICAgICAgIDxidXR0b24+QWRkPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL1N0cmluZ0xpc3QvU3RyaW5nTGlzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQXJCQTtBQUNBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUZBO0FBRkE7QUFXQTtBQWxGQTtBQUNBO0FBb0ZBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
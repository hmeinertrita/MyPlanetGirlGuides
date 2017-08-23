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

    this.props.returnUsers(users);
    this.props.returnHashtags(hashtags);

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

    this.props.returnUsers(users);
    this.props.returnHashtags(hashtags);

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
        key: idx,
        id: idx,
        type: 'user',
        text: text,
        deleteItem: this.deleteItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      });
    });
    const hashtags = this.state.hashtags.map((text, idx) => {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TwitterEntry, {
        className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.entry,
        key: idx,
        id: idx,
        type: 'hashtag',
        text: text,
        deleteItem: this.deleteItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'mode', value: 'exclusive', onChange: this.handleRadio, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }),
      'Exclusive',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'mode', value: 'inclusive', onChange: this.handleRadio, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }),
      'Inclusive',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.addForm, onSubmit: this.addItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.addField, onChange: this.handleChange, value: this.state.inputValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'image', src: __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png___default.a, __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        },
        'Users:',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.users, __source: {
              fileName: _jsxFileName,
              lineNumber: 168
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
              lineNumber: 170
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

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjk3MDc2MjI3ZDQwNzE0ZmE2ZjZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvRG9tYWluU2VsZWN0b3IvVHdpdHRlclNlbGVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIC8qKlxuICAqIEltYWdlIFNvdXJjZXM6XG4gICogaHR0cHM6Ly9waXhhYmF5LmNvbS9wLTE3Mjc0OTAvP25vX3JlZGlyZWN0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgY2xvc2VVcmwgZnJvbSAnLi4vYXNzZXRzL2Nsb3NlLWJ1dHRvbi1zbWFsbC5wbmcnXG5pbXBvcnQgYWRkVXJsIGZyb20gJy4uL2Fzc2V0cy9hZGQtYnV0dG9uLXNtYWxsLnBuZydcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Eb21haW5TZWxlY3Rvci5jc3MnO1xuXG5jbGFzcyBUd2l0dGVyRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgbGVhZGluZ0NoYXI9Jyc7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2hhc2h0YWcnKSB7XG4gICAgICBsZWFkaW5nQ2hhcj0nIyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICBsZWFkaW5nQ2hhcj0nQCc7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzeW1ib2w6IGxlYWRpbmdDaGFyXG4gICAgfTtcblxuXG4gICAgdGhpcy5kZWxldGVTZWxmID0gdGhpcy5kZWxldGVTZWxmLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZWxldGVTZWxmKCkge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlSXRlbSh0aGlzLnByb3BzLmlkLHRoaXMucHJvcHMudHlwZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmVudHJ5fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmVudHJ5U3ltYm9sfT57dGhpcy5zdGF0ZS5zeW1ib2x9PC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmVudHJ5TGFiZWx9Pnt0aGlzLnByb3BzLnRleHR9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3MuZGVsZXRlQnV0dG9ufSB0eXBlPVwiaW1hZ2VcIiBzcmM9e2Nsb3NlVXJsfSBvbkNsaWNrPXt0aGlzLmRlbGV0ZVNlbGZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIFR3aXR0ZXJTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyczpbXSxcbiAgICAgIGhhc2h0YWdzOltdLFxuICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICBpbmNsdXNpb25Nb2RlOiAnZXhjbHVzaXZlJ1xuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEl0ZW0gPSB0aGlzLmFkZEl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVSYWRpbyA9IHRoaXMuaGFuZGxlUmFkaW8uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0oaWQsdHlwZSkge1xuICAgIGNvbnN0IHVzZXJzPXRoaXMuc3RhdGUudXNlcnMubWFwKChpKSA9PiBpKTtcbiAgICBjb25zdCBoYXNodGFncz10aGlzLnN0YXRlLmhhc2h0YWdzLm1hcCgoaSkgPT4gaSk7XG5cbiAgICBpZih0eXBlID09PSAndXNlcicpIHtcbiAgICAgIHVzZXJzLnNwbGljZShpZCwxKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2hhc2h0YWcnKSB7XG4gICAgICBoYXNodGFncy5zcGxpY2UoaWQsMSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5yZXR1cm5Vc2Vycyh1c2Vycyk7XG4gICAgdGhpcy5wcm9wcy5yZXR1cm5IYXNodGFncyhoYXNodGFncyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXJzOiB1c2VycyxcbiAgICAgIGhhc2h0YWdzOiBoYXN0YWdzXG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG4gICAgY29uc3QgdXNlcnM9dGhpcy5zdGF0ZS51c2Vycy5tYXAoKGkpID0+IGkpO1xuICAgIGNvbnN0IGhhc2h0YWdzPXRoaXMuc3RhdGUuaGFzaHRhZ3MubWFwKChpKSA9PiBpKTtcbiAgICB2YXIgdGV4dD10aGlzLnN0YXRlLmlucHV0VmFsdWU7XG5cbiAgICBpZiAodGV4dC5jaGFyQXQoMCkgPT09ICcjJykge1xuICAgICAgaGFzaHRhZ3Muc3BsaWNlKDAsMCx0ZXh0LnN1YnN0cmluZygxLHRleHQubGVuZ3RoKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRleHQuY2hhckF0KDApID09PSAnQCcpIHtcbiAgICAgIHVzZXJzLnNwbGljZSgwLDAsdGV4dC5zdWJzdHJpbmcoMSx0ZXh0Lmxlbmd0aCkpO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMucmV0dXJuVXNlcnModXNlcnMpO1xuICAgIHRoaXMucHJvcHMucmV0dXJuSGFzaHRhZ3MoaGFzaHRhZ3MpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB1c2VyczogdXNlcnMsXG4gICAgICBoYXNodGFnczogaGFzaHRhZ3MsXG4gICAgICBpbnB1dFZhbHVlOiBcIlwiXG4gICAgfSk7XG4gIH1cblxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5wdXRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVSYWRpbyhldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5jbHVzaW9uTW9kZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHVzZXJzPXRoaXMuc3RhdGUudXNlcnMubWFwKCh0ZXh0LGlkeCk9PntcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUd2l0dGVyRW50cnlcbiAgICAgICAgICBjbGFzc05hbWUgPSB7cy5lbnRyeX1cbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBpZD17aWR4fVxuICAgICAgICAgIHR5cGU9J3VzZXInXG4gICAgICAgICAgdGV4dD17dGV4dH1cbiAgICAgICAgICBkZWxldGVJdGVtPXt0aGlzLmRlbGV0ZUl0ZW19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnN0IGhhc2h0YWdzPXRoaXMuc3RhdGUuaGFzaHRhZ3MubWFwKCh0ZXh0LGlkeCk9PntcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUd2l0dGVyRW50cnlcbiAgICAgICAgICBjbGFzc05hbWUgPSB7cy5lbnRyeX1cbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBpZD17aWR4fVxuICAgICAgICAgIHR5cGU9J2hhc2h0YWcnXG4gICAgICAgICAgdGV4dD17dGV4dH1cbiAgICAgICAgICBkZWxldGVJdGVtPXt0aGlzLmRlbGV0ZUl0ZW19XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdtb2RlJyB2YWx1ZT0nZXhjbHVzaXZlJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVSYWRpb30vPkV4Y2x1c2l2ZVxuICAgICAgICA8aW5wdXQgdHlwZT0ncmFkaW8nIG5hbWU9J21vZGUnIHZhbHVlPSdpbmNsdXNpdmUnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVJhZGlvfS8+SW5jbHVzaXZlXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17cy5hZGRGb3JtfSBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzLmFkZEZpZWxkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmlucHV0VmFsdWV9Lz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImltYWdlXCIgc3JjPXthZGRVcmx9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICBVc2VyczpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy51c2Vyc30+e3VzZXJzfTwvZGl2PlxuICAgICAgICAgIEhhc2h0YWdzOlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhhc2h0YWdzfT57aGFzaHRhZ3N9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFR3aXR0ZXJTZWxlY3Rvcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9zZWFyY2gvRG9tYWluU2VsZWN0b3IvVHdpdHRlclNlbGVjdG9yLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBaENBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFQQTtBQWVBO0FBbkhBO0FBQ0E7QUFxSEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
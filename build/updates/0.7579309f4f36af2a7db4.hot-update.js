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
    //this.props.returnHashtags(hashtags);

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
    //this.props.returnHashtags(hashtags);

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
          lineNumber: 136
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
          lineNumber: 147
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'mode', value: 'exclusive', onChange: this.handleRadio, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }),
      'Exclusive',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'mode', value: 'inclusive', onChange: this.handleRadio, __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }),
      'Inclusive',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.addForm, onSubmit: this.addItem, __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.addField, onChange: this.handleChange, value: this.state.inputValue, __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'image', src: __WEBPACK_IMPORTED_MODULE_3__assets_add_button_small_png___default.a, __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        },
        'Users:',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_5__DomainSelector_css___default.a.users, __source: {
              fileName: _jsxFileName,
              lineNumber: 166
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
              lineNumber: 168
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjc1NzkzMDlmNGYzNmFmMmE3ZGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy9zZWFyY2gvRG9tYWluU2VsZWN0b3IvVHdpdHRlclNlbGVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIC8qKlxuICAqIEltYWdlIFNvdXJjZXM6XG4gICogaHR0cHM6Ly9waXhhYmF5LmNvbS9wLTE3Mjc0OTAvP25vX3JlZGlyZWN0XG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgY2xvc2VVcmwgZnJvbSAnLi4vYXNzZXRzL2Nsb3NlLWJ1dHRvbi1zbWFsbC5wbmcnXG5pbXBvcnQgYWRkVXJsIGZyb20gJy4uL2Fzc2V0cy9hZGQtYnV0dG9uLXNtYWxsLnBuZydcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Eb21haW5TZWxlY3Rvci5jc3MnO1xuXG5jbGFzcyBUd2l0dGVyRW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgbGVhZGluZ0NoYXI9Jyc7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ2hhc2h0YWcnKSB7XG4gICAgICBsZWFkaW5nQ2hhcj0nIyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gJ3VzZXInKSB7XG4gICAgICBsZWFkaW5nQ2hhcj0nQCc7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzeW1ib2w6IGxlYWRpbmdDaGFyXG4gICAgfTtcblxuXG4gICAgdGhpcy5kZWxldGVTZWxmID0gdGhpcy5kZWxldGVTZWxmLmJpbmQodGhpcyk7XG4gIH1cblxuICBkZWxldGVTZWxmKCkge1xuICAgIHRoaXMucHJvcHMuZGVsZXRlSXRlbSh0aGlzLnByb3BzLmlkLHRoaXMucHJvcHMudHlwZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmVudHJ5fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmVudHJ5U3ltYm9sfT57dGhpcy5zdGF0ZS5zeW1ib2x9PC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmVudHJ5TGFiZWx9Pnt0aGlzLnByb3BzLnRleHR9PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3MuZGVsZXRlQnV0dG9ufSB0eXBlPVwiaW1hZ2VcIiBzcmM9e2Nsb3NlVXJsfSBvbkNsaWNrPXt0aGlzLmRlbGV0ZVNlbGZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIFR3aXR0ZXJTZWxlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyczpbXSxcbiAgICAgIGhhc2h0YWdzOltdLFxuICAgICAgaW5wdXRWYWx1ZTogJycsXG4gICAgICBpbmNsdXNpb25Nb2RlOiAnZXhjbHVzaXZlJ1xuICAgIH07XG5cbiAgICB0aGlzLmRlbGV0ZUl0ZW0gPSB0aGlzLmRlbGV0ZUl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZEl0ZW0gPSB0aGlzLmFkZEl0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVSYWRpbyA9IHRoaXMuaGFuZGxlUmFkaW8uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGRlbGV0ZUl0ZW0oaWQsdHlwZSkge1xuICAgIGNvbnN0IHVzZXJzPXRoaXMuc3RhdGUudXNlcnMubWFwKChpKSA9PiBpKTtcbiAgICBjb25zdCBoYXNodGFncz10aGlzLnN0YXRlLmhhc2h0YWdzLm1hcCgoaSkgPT4gaSk7XG5cbiAgICBpZih0eXBlID09PSAndXNlcicpIHtcbiAgICAgIHVzZXJzLnNwbGljZShpZCwxKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2hhc2h0YWcnKSB7XG4gICAgICBoYXNodGFncy5zcGxpY2UoaWQsMSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5yZXR1cm5Vc2Vycyh1c2Vycyk7XG4gICAgLy90aGlzLnByb3BzLnJldHVybkhhc2h0YWdzKGhhc2h0YWdzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcnM6IHVzZXJzLFxuICAgICAgaGFzaHRhZ3M6IGhhc3RhZ3NcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICBjb25zdCB1c2Vycz10aGlzLnN0YXRlLnVzZXJzLm1hcCgoaSkgPT4gaSk7XG4gICAgY29uc3QgaGFzaHRhZ3M9dGhpcy5zdGF0ZS5oYXNodGFncy5tYXAoKGkpID0+IGkpO1xuICAgIHZhciB0ZXh0PXRoaXMuc3RhdGUuaW5wdXRWYWx1ZTtcblxuICAgIGlmICh0ZXh0LmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICBoYXNodGFncy5zcGxpY2UoMCwwLHRleHQuc3Vic3RyaW5nKDEsdGV4dC5sZW5ndGgpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGV4dC5jaGFyQXQoMCkgPT09ICdAJykge1xuICAgICAgdXNlcnMuc3BsaWNlKDAsMCx0ZXh0LnN1YnN0cmluZygxLHRleHQubGVuZ3RoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5yZXR1cm5Vc2Vycyh1c2Vycyk7XG4gICAgLy90aGlzLnByb3BzLnJldHVybkhhc2h0YWdzKGhhc2h0YWdzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcnM6IHVzZXJzLFxuICAgICAgaGFzaHRhZ3M6IGhhc2h0YWdzLFxuICAgICAgaW5wdXRWYWx1ZTogXCJcIlxuICAgIH0pO1xuICB9XG5cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlUmFkaW8oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGluY2x1c2lvbk1vZGU6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB1c2Vycz10aGlzLnN0YXRlLnVzZXJzLm1hcCgodGV4dCxpZHgpPT57XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHdpdHRlckVudHJ5XG4gICAgICAgICAgY2xhc3NOYW1lID0ge3MuZW50cnl9XG4gICAgICAgICAgaWQ9e2lkeH1cbiAgICAgICAgICB0eXBlPSd1c2VyJ1xuICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNodGFncz10aGlzLnN0YXRlLmhhc2h0YWdzLm1hcCgodGV4dCxpZHgpPT57XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VHdpdHRlckVudHJ5XG4gICAgICAgICAgY2xhc3NOYW1lID0ge3MuZW50cnl9XG4gICAgICAgICAgaWQ9e2lkeH1cbiAgICAgICAgICB0eXBlPSdoYXNodGFnJ1xuICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgZGVsZXRlSXRlbT17dGhpcy5kZWxldGVJdGVtfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT0nbW9kZScgdmFsdWU9J2V4Y2x1c2l2ZScgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmFkaW99Lz5FeGNsdXNpdmVcbiAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdtb2RlJyB2YWx1ZT0naW5jbHVzaXZlJyBvbkNoYW5nZT17dGhpcy5oYW5kbGVSYWRpb30vPkluY2x1c2l2ZVxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3MuYWRkRm9ybX0gb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17cy5hZGRGaWVsZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5pbnB1dFZhbHVlfS8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJpbWFnZVwiIHNyYz17YWRkVXJsfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgVXNlcnM6XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudXNlcnN9Pnt1c2Vyc308L2Rpdj5cbiAgICAgICAgICBIYXNodGFnczpcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oYXNodGFnc30+e2hhc2h0YWdzfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShUd2l0dGVyU2VsZWN0b3IpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvc2VhcmNoL0RvbWFpblNlbGVjdG9yL1R3aXR0ZXJTZWxlY3Rvci5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQWhDQTtBQUNBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFQQTtBQWVBO0FBakhBO0FBQ0E7QUFtSEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/components/Navigation/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css__ = __webpack_require__("./src/components/Navigation/Navigation.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Navigation_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__("./src/components/Link/Link.js");
var _jsxFileName = '/Users/jxm/Downloads/MyPlanetGirlGuides/src/components/Navigation/Navigation.js';
/**
* React Starter Kit (https://www.reactstarterkit.com/)
*
* Copyright © 2014-present Kriasoft, LLC. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/







class Navigation extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
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
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.root, role: 'navigation', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.links, this.state.isToggleOn ? __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.show : __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.hide), __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
            { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.highlight), to: '/twitter', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            'Tweets'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
            { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.link, __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.highlight), to: '/search', __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            },
            'Search'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.menu_res, this.state.isToggleOn ? __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.show : __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.hide), onClick: this.toggleMenu, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          })
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a)(Navigation));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjM1MjBhMjY5NzkzZjE0YzNhMWVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbipcbiogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05hdmlnYXRpb24uY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtpc1RvZ2dsZU9uOiBmYWxzZX07XG4gICAgdGhpcy50b2dnbGVNZW51ID0gdGhpcy50b2dnbGVNZW51LmJpbmQodGhpcyk7XG4gIH1cblxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc1RvZ2dsZU9uOiAhcHJldlN0YXRlLmlzVG9nZ2xlT25cbiAgICB9KSk7XG4gIH1cblxuIHJlbmRlcigpIHtcbiAgIHJldHVybiAoXG4gICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fSByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICB7LyogPExpbmsgY2xhc3NOYW1lPXtzLmxpbmt9IHRvPVwiL2Fib3V0XCI+XG4gICAgICAgICAgQWJvdXRcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvY29udGFjdFwiPlxuICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc3BhY2VyfT4gfCA8L3NwYW4+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9sb2dpblwiPlxuICAgICAgICAgIExvZyBpblxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9Pm9yPC9zcGFuPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMubGlua3MsdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uP3Muc2hvdzpzLmhpZGUpfT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2N4KHMubGluaywgcy5oaWdobGlnaHQpfSB0bz1cIi90d2l0dGVyXCI+XG4gICAgICAgICAgICBUd2VldHNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjeChzLmxpbmssIHMuaGlnaGxpZ2h0KX0gdG89XCIvc2VhcmNoXCI+XG4gICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHMubWVudV9yZXMsdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uP3Muc2hvdzpzLmhpZGUpfSBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9PlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gICApO1xuIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShOYXZpZ2F0aW9uKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFyQkE7QUFEQTtBQWdDQTtBQS9DQTtBQUNBO0FBaURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
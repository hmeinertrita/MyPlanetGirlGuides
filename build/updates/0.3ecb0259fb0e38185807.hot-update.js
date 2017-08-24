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
    this.state = { isToggleOn: true };
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
          { className: (__WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.links, this.state.isToggleOn ? 'toggle' : 'hidden'), __source: {
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
          { className: __WEBPACK_IMPORTED_MODULE_3__Navigation_css___default.a.menu_res, onClick: this.toggleMenu, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjNlY2IwMjU5ZmIwZTM4MTg1ODA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvY29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4qIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbipcbiogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL05hdmlnYXRpb24uY3NzJztcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnO1xuXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtpc1RvZ2dsZU9uOiB0cnVlfTtcbiAgICB0aGlzLnRvZ2dsZU1lbnUgPSB0aGlzLnRvZ2dsZU1lbnUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzVG9nZ2xlT246ICFwcmV2U3RhdGUuaXNUb2dnbGVPblxuICAgIH0pKTtcbiAgfVxuXG4gcmVuZGVyKCkge1xuICAgcmV0dXJuIChcbiAgICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9IHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIHsvKiA8TGluayBjbGFzc05hbWU9e3MubGlua30gdG89XCIvYWJvdXRcIj5cbiAgICAgICAgICBBYm91dFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17cy5saW5rfSB0bz1cIi9jb250YWN0XCI+XG4gICAgICAgICAgQ29udGFjdFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zcGFjZXJ9PiB8IDwvc3Bhbj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtzLmxpbmt9IHRvPVwiL2xvZ2luXCI+XG4gICAgICAgICAgTG9nIGluXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNwYWNlcn0+b3I8L3NwYW4+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5saW5rcywgdGhpcy5zdGF0ZS5pc1RvZ2dsZU9uPyd0b2dnbGUnOidoaWRkZW4nfT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2N4KHMubGluaywgcy5oaWdobGlnaHQpfSB0bz1cIi90d2l0dGVyXCI+XG4gICAgICAgICAgICBUd2VldHNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjeChzLmxpbmssIHMuaGlnaGxpZ2h0KX0gdG89XCIvc2VhcmNoXCI+XG4gICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MubWVudV9yZXN9IG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICk7XG4gfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKE5hdmlnYXRpb24pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQXJCQTtBQURBO0FBZ0NBO0FBL0NBO0FBQ0E7QUFpREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
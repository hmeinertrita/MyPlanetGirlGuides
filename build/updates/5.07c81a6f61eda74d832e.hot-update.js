require("source-map-support").install();
exports.id = 5;
exports.modules = {

/***/ "./src/routes/results/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tagcloud__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tagcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_tagcloud__);
var _jsxFileName = '/Users/jxm/Downloads/MyPlanetGirlGuides/src/routes/results/Results.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const data = [{ value: "JavaScript", count: 38 }, { value: "React", count: 30 }, { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 }, { value: "HTML5", count: 33 }, { value: "MongoDB", count: 18 }, { value: "CSS3", count: 20 }];

const options = {
  luminosity: 'light',
  hue: 'blue'
};

class Results extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          lineNumber: 46
        },
        __self: this
      },
      'Results',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_tagcloud__["TagCloud"], { minSize: 12,
        maxSize: 35,
        tags: data,
        onClick: tag => alert(`'${tag.value}' was selected!`), __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Results);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy81LjA3YzgxYTZmNjFlZGE3NGQ4MzJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JvdXRlcy9yZXN1bHRzL1Jlc3VsdHMuanM/YzMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgVGFnQ2xvdWQgfSBmcm9tIFwicmVhY3QtdGFnY2xvdWRcIjtcbiBcbmNvbnN0IGRhdGEgPSBbXG4gIHsgdmFsdWU6IFwiSmF2YVNjcmlwdFwiLCBjb3VudDogMzggfSxcbiAgeyB2YWx1ZTogXCJSZWFjdFwiLCBjb3VudDogMzAgfSxcbiAgeyB2YWx1ZTogXCJOb2RlanNcIiwgY291bnQ6IDI4IH0sXG4gIHsgdmFsdWU6IFwiRXhwcmVzcy5qc1wiLCBjb3VudDogMjUgfSxcbiAgeyB2YWx1ZTogXCJIVE1MNVwiLCBjb3VudDogMzMgfSxcbiAgeyB2YWx1ZTogXCJNb25nb0RCXCIsIGNvdW50OiAxOCB9LFxuICB7IHZhbHVlOiBcIkNTUzNcIiwgY291bnQ6IDIwIH1cbl07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGx1bWlub3NpdHk6ICdsaWdodCcsXG4gIGh1ZTogJ2JsdWUnXG59O1xuXG5jbGFzcyBSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhIE5ldWUnLFxuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbGluZUhlaWdodDogJzEwcHgnLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIFJlc3VsdHNcbiAgICAgICAgPFRhZ0Nsb3VkIG1pblNpemU9ezEyfVxuICAgICAgICAgICAgbWF4U2l6ZT17MzV9XG4gICAgICAgICAgICB0YWdzPXtkYXRhfVxuICAgICAgICAgICAgb25DbGljaz17dGFnID0+IGFsZXJ0KGAnJHt0YWcudmFsdWV9JyB3YXMgc2VsZWN0ZWQhYCl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9yZXN1bHRzL1Jlc3VsdHMuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVFBO0FBeEJBO0FBQ0E7QUEwQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
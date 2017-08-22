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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Results_css__ = __webpack_require__("./src/routes/results/Results.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Results_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Results_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tagcloud__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_tagcloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_tagcloud__);
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

    this.handleClick = () => {
      console.log('this is:', this);
    };

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
      { className: __WEBPACK_IMPORTED_MODULE_3__Results_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      },
      'Results',
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_tagcloud__["TagCloud"], {
        className: __WEBPACK_IMPORTED_MODULE_3__Results_css___default.a.myTagCloud,
        minSize: 20,
        maxSize: 70,
        tags: data,
        colorOptions: options,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })
    );
  }
}

// export default Results;
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Results_css___default.a)(Results));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy81LjM0YjEzNjNjYTljMmEzMTUxYjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3JvdXRlcy9yZXN1bHRzL1Jlc3VsdHMuanM/YzMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vUmVzdWx0cy5jc3MnO1xuXG5pbXBvcnQgeyBUYWdDbG91ZCB9IGZyb20gXCJyZWFjdC10YWdjbG91ZFwiO1xuXG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgdmFsdWU6IFwiSmF2YVNjcmlwdFwiLCBjb3VudDogMzggfSxcbiAgeyB2YWx1ZTogXCJSZWFjdFwiLCBjb3VudDogMzAgfSxcbiAgeyB2YWx1ZTogXCJOb2RlanNcIiwgY291bnQ6IDI4IH0sXG4gIHsgdmFsdWU6IFwiRXhwcmVzcy5qc1wiLCBjb3VudDogMjUgfSxcbiAgeyB2YWx1ZTogXCJIVE1MNVwiLCBjb3VudDogMzMgfSxcbiAgeyB2YWx1ZTogXCJNb25nb0RCXCIsIGNvdW50OiAxOCB9LFxuICB7IHZhbHVlOiBcIkNTUzNcIiwgY291bnQ6IDIwIH1cbl07XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGx1bWlub3NpdHk6ICdsaWdodCcsXG4gIGh1ZTogJ2JsdWUnXG59O1xuXG5jbGFzcyBSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXM6JywgdGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSBOZXVlJyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMHB4JyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgUmVzdWx0c1xuICAgICAgICA8VGFnQ2xvdWQgXG4gICAgICAgICAgY2xhc3NOYW1lPXtzLm15VGFnQ2xvdWR9XG4gICAgICAgICAgbWluU2l6ZT17MjB9XG4gICAgICAgICAgbWF4U2l6ZT17NzB9XG4gICAgICAgICAgdGFncz17ZGF0YX1cbiAgICAgICAgICBjb2xvck9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgUmVzdWx0cztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoUmVzdWx0cyk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3Jlc3VsdHMvUmVzdWx0cy5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFZQTtBQWpDQTtBQUNBO0FBbUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
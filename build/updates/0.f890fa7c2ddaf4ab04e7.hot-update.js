require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/watson/Utterance/Utterance.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utterance_css__ = __webpack_require__("./src/routes/watson/Utterance/Utterance.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utterance_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Utterance_css__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/watson/Utterance/Utterance.js';



// import { Tweet } from 'react-twitter-widgets';
// var TweetWidget = require('react-twitter-widgets').Tweet;

class Utterance extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let utterance = this.props.utterance;
    console.log('utterance', utterance);
    let utteranceTone = utterance.tones[0];
    let utteranceTones = utterance.tones.map(function (tone, i) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          'Score: ',
          tone.score
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'span',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          'Tone: ',
          tone.tone_id
        )
      );
    });
    // console.log(utteranceTones)
    // console.log('utterance', utterance.tones);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { style: {
          "padding": '5px'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        },
        'Text: ',
        utterance.utterance_text
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        },
        utteranceTones
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Utterance_css___default.a)(Utterance));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmY4OTBmYTdjMmRkYWY0YWIwNGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlL1V0dGVyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9VdHRlcmFuY2UuY3NzJztcbi8vIGltcG9ydCB7IFR3ZWV0IH0gZnJvbSAncmVhY3QtdHdpdHRlci13aWRnZXRzJztcbi8vIHZhciBUd2VldFdpZGdldCA9IHJlcXVpcmUoJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cycpLlR3ZWV0O1xuXG5jbGFzcyBVdHRlcmFuY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCB1dHRlcmFuY2UgPSB0aGlzLnByb3BzLnV0dGVyYW5jZTtcbiAgICBjb25zb2xlLmxvZygndXR0ZXJhbmNlJywgdXR0ZXJhbmNlKTtcbiAgICBsZXQgdXR0ZXJhbmNlVG9uZSA9IHV0dGVyYW5jZS50b25lc1swXVxuICAgIGxldCB1dHRlcmFuY2VUb25lcyA9IHV0dGVyYW5jZS50b25lcy5tYXAoZnVuY3Rpb24odG9uZSwgaSl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICA8c3Bhbj5TY29yZToge3RvbmUuc2NvcmV9PC9zcGFuPlxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxzcGFuPlRvbmU6IHt0b25lLnRvbmVfaWR9PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgKVxuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHV0dGVyYW5jZVRvbmVzKVxuICAgIC8vIGNvbnNvbGUubG9nKCd1dHRlcmFuY2UnLCB1dHRlcmFuY2UudG9uZXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgc3R5bGU9e3tcbiAgICAgICAgXCJwYWRkaW5nXCI6ICc1cHgnXG4gICAgICB9fT5cbiAgICAgIDxkaXY+VGV4dDoge3V0dGVyYW5jZS51dHRlcmFuY2VfdGV4dH08L2Rpdj5cbiAgICAgIDx1bD57dXR0ZXJhbmNlVG9uZXN9PC91bD5cbiAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShVdHRlcmFuY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvd2F0c29uL1V0dGVyYW5jZS9VdHRlcmFuY2UuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQTVCQTtBQUNBO0FBOEJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
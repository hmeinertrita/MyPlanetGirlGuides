require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/watson/Utterances/Utterances.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Utterance_Utterance__ = __webpack_require__("./src/routes/watson/Utterance/Utterance.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utterances_css__ = __webpack_require__("./src/routes/watson/Utterances/Utterances.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utterances_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Utterances_css__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/watson/Utterances/Utterances.js';






class Utterances extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('UTTERANCES PROPS', this.props);
    let filteredContent = this.props.utterances_tone.filter(utterance => {
      if (utterance.tones.length !== 0) {
        return true;
      } else {
        return false;
      }
    });

    console.log('filteredContent', filteredContent);
    let processedContent = filteredContent.map(function (utterance) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Utterance_Utterance__["a" /* default */], { key: utterance.utterance_id, utterance: utterance, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      });
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      },
      processedContent
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Utterances_css___default.a)(Utterances));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmI4ODg5YzhkYmFkMzc1YjA5ZmMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3JvdXRlcy93YXRzb24vVXR0ZXJhbmNlcy9VdHRlcmFuY2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXR0ZXJhbmNlIGZyb20gJy4uL1V0dGVyYW5jZS9VdHRlcmFuY2UnO1xuXG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1V0dGVyYW5jZXMuY3NzJztcblxuY2xhc3MgVXR0ZXJhbmNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ1VUVEVSQU5DRVMgUFJPUFMnLCB0aGlzLnByb3BzKTtcbiAgICBsZXQgZmlsdGVyZWRDb250ZW50ID0gdGhpcy5wcm9wcy51dHRlcmFuY2VzX3RvbmUuZmlsdGVyKCh1dHRlcmFuY2UpID0+IHtcbiAgICAgIGlmICh1dHRlcmFuY2UudG9uZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdmaWx0ZXJlZENvbnRlbnQnLCBmaWx0ZXJlZENvbnRlbnQpXG4gICAgbGV0IHByb2Nlc3NlZENvbnRlbnQgPSBmaWx0ZXJlZENvbnRlbnQubWFwKGZ1bmN0aW9uKHV0dGVyYW5jZSl7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VXR0ZXJhbmNlIGtleT17dXR0ZXJhbmNlLnV0dGVyYW5jZV9pZH0gdXR0ZXJhbmNlPXt1dHRlcmFuY2V9IC8+XG4gICAgICApXG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDx1bD57cHJvY2Vzc2VkQ29udGVudH08L3VsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShVdHRlcmFuY2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3dhdHNvbi9VdHRlcmFuY2VzL1V0dGVyYW5jZXMuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBeEJBO0FBQ0E7QUEwQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
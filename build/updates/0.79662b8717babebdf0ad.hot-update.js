require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/twitter/Tweet/Tweet.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tweet_css__ = __webpack_require__("./src/routes/twitter/Tweet/Tweet.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tweet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Tweet_css__);
var _jsxFileName = '/Users/jxm/Downloads/MyPlanetGirlGuides/src/routes/twitter/Tweet/Tweet.js';



// import { Tweet } from 'react-twitter-widgets';
var TweetWidget = __webpack_require__("react-twitter-widgets").Tweet;

class Tweet extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let tweet = this.props.tweet;
    return (
      // <li className={"tweet" + (tweet.active ? ' active' : '')}>
      //   <img src={tweet.avatar} className="avatar"/>
      //   <blockquote>
      //     <cite>
      //       <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>
      //       <span className={s.screenname}>@{tweet.screenname}</span>
      //     </cite>
      //     <span className={s.content}>{tweet.body}</span>
      //   </blockquote>
      // </li>
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TweetWidget, {
        tweetId: tweet.twid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a)(Tweet));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjc5NjYyYjg3MTdiYWJlYmRmMGFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXQvVHdlZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVHdlZXQuY3NzJztcbi8vIGltcG9ydCB7IFR3ZWV0IH0gZnJvbSAncmVhY3QtdHdpdHRlci13aWRnZXRzJztcbnZhciBUd2VldFdpZGdldCA9IHJlcXVpcmUoJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cycpLlR3ZWV0XG5cbmNsYXNzIFR3ZWV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdHdlZXQgPSB0aGlzLnByb3BzLnR3ZWV0O1xuICAgIHJldHVybiAoXG4gICAgICAvLyA8bGkgY2xhc3NOYW1lPXtcInR3ZWV0XCIgKyAodHdlZXQuYWN0aXZlID8gJyBhY3RpdmUnIDogJycpfT5cbiAgICAgIC8vICAgPGltZyBzcmM9e3R3ZWV0LmF2YXRhcn0gY2xhc3NOYW1lPVwiYXZhdGFyXCIvPlxuICAgICAgLy8gICA8YmxvY2txdW90ZT5cbiAgICAgIC8vICAgICA8Y2l0ZT5cbiAgICAgIC8vICAgICAgIDxhIGhyZWY9e1wiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9cIiArIHR3ZWV0LnNjcmVlbm5hbWV9Pnt0d2VldC5hdXRob3J9PC9hPlxuICAgICAgLy8gICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLnNjcmVlbm5hbWV9PkB7dHdlZXQuc2NyZWVubmFtZX08L3NwYW4+XG4gICAgICAvLyAgICAgPC9jaXRlPlxuICAgICAgLy8gICAgIDxzcGFuIGNsYXNzTmFtZT17cy5jb250ZW50fT57dHdlZXQuYm9keX08L3NwYW4+XG4gICAgICAvLyAgIDwvYmxvY2txdW90ZT5cbiAgICAgIC8vIDwvbGk+XG4gICAgICA8VHdlZXRXaWRnZXRcbiAgICAgICAgdHdlZXRJZD17dHdlZXQudHdpZH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFR3ZWV0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXQvVHdlZXQuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFlQTtBQXRCQTtBQUNBO0FBd0JBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
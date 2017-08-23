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



// import { Tweet } from 'react-twitter-widgets';
// var TweetWidget = require('react-twitter-widgets').Tweet
var tw = __webpack_require__("./node_modules/Twitter/lib/twitter.js");

;

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

      // <TweetWidget
      //   tweetId={tweet.twid}
      // />
      tw.widgets.createTweet("20", document.getElementById("tweet-container"), {
        linkColor: "#55acee"
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a)(Tweet));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjYyMWNlYTI3NDg1MjE4Njg4YzdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXQvVHdlZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVHdlZXQuY3NzJztcbi8vIGltcG9ydCB7IFR3ZWV0IH0gZnJvbSAncmVhY3QtdHdpdHRlci13aWRnZXRzJztcbi8vIHZhciBUd2VldFdpZGdldCA9IHJlcXVpcmUoJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cycpLlR3ZWV0XG52YXIgdHcgPSByZXF1aXJlKCdUd2l0dGVyJyk7XG5cbjtcblxuY2xhc3MgVHdlZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCB0d2VldCA9IHRoaXMucHJvcHMudHdlZXQ7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIDxsaSBjbGFzc05hbWU9e1widHdlZXRcIiArICh0d2VldC5hY3RpdmUgPyAnIGFjdGl2ZScgOiAnJyl9PlxuICAgICAgLy8gICA8aW1nIHNyYz17dHdlZXQuYXZhdGFyfSBjbGFzc05hbWU9XCJhdmF0YXJcIi8+XG4gICAgICAvLyAgIDxibG9ja3F1b3RlPlxuICAgICAgLy8gICAgIDxjaXRlPlxuICAgICAgLy8gICAgICAgPGEgaHJlZj17XCJodHRwOi8vd3d3LnR3aXR0ZXIuY29tL1wiICsgdHdlZXQuc2NyZWVubmFtZX0+e3R3ZWV0LmF1dGhvcn08L2E+XG4gICAgICAvLyAgICAgICA8c3BhbiBjbGFzc05hbWU9e3Muc2NyZWVubmFtZX0+QHt0d2VldC5zY3JlZW5uYW1lfTwvc3Bhbj5cbiAgICAgIC8vICAgICA8L2NpdGU+XG4gICAgICAvLyAgICAgPHNwYW4gY2xhc3NOYW1lPXtzLmNvbnRlbnR9Pnt0d2VldC5ib2R5fTwvc3Bhbj5cbiAgICAgIC8vICAgPC9ibG9ja3F1b3RlPlxuICAgICAgLy8gPC9saT5cblxuICAgICAgLy8gPFR3ZWV0V2lkZ2V0XG4gICAgICAvLyAgIHR3ZWV0SWQ9e3R3ZWV0LnR3aWR9XG4gICAgICAvLyAvPlxudHcud2lkZ2V0cy5jcmVhdGVUd2VldChcbiAgXCIyMFwiLFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInR3ZWV0LWNvbnRhaW5lclwiKSxcbiAge1xuICAgIGxpbmtDb2xvcjogXCIjNTVhY2VlXCJcbiAgfVxuKVxuICAgICAgXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFR3ZWV0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXQvVHdlZXQuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQURBO0FBbEJBO0FBd0JBO0FBL0JBO0FBQ0E7QUFpQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmFkY2RkMWM2ZjhkZWZlMjdmOTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXQvVHdlZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vVHdlZXQuY3NzJztcbi8vIGltcG9ydCB7IFR3ZWV0IH0gZnJvbSAncmVhY3QtdHdpdHRlci13aWRnZXRzJztcbi8vIHZhciBUd2VldFdpZGdldCA9IHJlcXVpcmUoJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cycpLlR3ZWV0XG52YXIgdHcgPSByZXF1aXJlKCdUd2l0dGVyJyk7XG5cblxuXG5jbGFzcyBUd2VldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHR3ZWV0ID0gdGhpcy5wcm9wcy50d2VldDtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPGxpIGNsYXNzTmFtZT17XCJ0d2VldFwiICsgKHR3ZWV0LmFjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnKX0+XG4gICAgICAvLyAgIDxpbWcgc3JjPXt0d2VldC5hdmF0YXJ9IGNsYXNzTmFtZT1cImF2YXRhclwiLz5cbiAgICAgIC8vICAgPGJsb2NrcXVvdGU+XG4gICAgICAvLyAgICAgPGNpdGU+XG4gICAgICAvLyAgICAgICA8YSBocmVmPXtcImh0dHA6Ly93d3cudHdpdHRlci5jb20vXCIgKyB0d2VldC5zY3JlZW5uYW1lfT57dHdlZXQuYXV0aG9yfTwvYT5cbiAgICAgIC8vICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zY3JlZW5uYW1lfT5Ae3R3ZWV0LnNjcmVlbm5hbWV9PC9zcGFuPlxuICAgICAgLy8gICAgIDwvY2l0ZT5cbiAgICAgIC8vICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY29udGVudH0+e3R3ZWV0LmJvZHl9PC9zcGFuPlxuICAgICAgLy8gICA8L2Jsb2NrcXVvdGU+XG4gICAgICAvLyA8L2xpPlxuXG4gICAgICAvLyA8VHdlZXRXaWRnZXRcbiAgICAgIC8vICAgdHdlZXRJZD17dHdlZXQudHdpZH1cbiAgICAgIC8vIC8+XG50dy53aWRnZXRzLmNyZWF0ZVR3ZWV0KFxuICBcIjIwXCIsXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHdlZXQtY29udGFpbmVyXCIpLFxuICB7XG4gICAgbGlua0NvbG9yOiBcIiM1NWFjZWVcIlxuICB9XG4pXG4gICAgICBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoVHdlZXQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvdHdpdHRlci9Ud2VldC9Ud2VldC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFEQTtBQWxCQTtBQXdCQTtBQS9CQTtBQUNBO0FBaUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=
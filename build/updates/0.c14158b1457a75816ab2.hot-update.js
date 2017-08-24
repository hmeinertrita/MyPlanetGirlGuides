require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/routes/tone-analysis/ToneBox/ToneBox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ToneBox_css__ = __webpack_require__("./src/routes/tone-analysis/ToneBox/ToneBox.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ToneBox_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ToneBox_css__);
var _jsxFileName = '/Users/hmeinertrita/Documents/MyPlanet/GirlGuides/src/routes/tone-analysis/ToneBox/ToneBox.js';
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







/*class ToneEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tones = this.props.tone.tones.map((i) => {
      return (
        <div className={s.tone}>
          <label>{i.tone_name}</label>
          <label>{i.score}</label>
        </div>
      );
    });


    return (
      <div className={s.entry}>
        <label className={s.entryLabel}>{getTextPreview()}</label>
        {tones}
      </div>
    );
  }
}*/

class ToneBox extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    /*
    let tones=[];
     for (var i=0;i<this.props.utterances.length;i++) {
      for (var j=0;j<this.props.utterances[i].tones.length;j++) {
        let idx=-1;
        for (var k=0;k<tones.length;k++) {
          if (tones[k].tone_name === this.props.utterances[i].tones[j].tone_name) {
            let idx=k;
            break;
          }
        }
         if (idx !== -1) {
          tones[idx].scores.push(this.props.utterances[i].tones[j].score);
        }
        else {
          tones.push({
            tone_name: this.props.utterances[i].tones[j].tone_name,
            scores: [this.props.utterances[i].tones[j].score]
          });
        }
      }
    }
     const averageTones = tones.map((tone) => {
      let score=0;
      for (var i=0; i<tone.scores.length; i++) {
        score+=tone.scores[i];
      }
      score=score/tone.scores.length;
       return ({
        tone_name: tone.tone_name,
        score: score
      });
    });
     console.log('average tones: ',averageTones);*/

    this.state = {
      tones: this.props.utterances
    };
  }

  render() {
    console.log('tonestate: ', this.state.tones);
    let tones = this.state.tones.map((tone, idx) => {
      console.log('tone: ', tone);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        },
        tone.tone_name
      );
    });
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__ToneBox_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      },
      'hello',
      tones
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__ToneBox_css___default.a)(ToneBox));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLmMxNDE1OGIxNDU3YTc1ODE2YWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9obWVpbmVydHJpdGEvRG9jdW1lbnRzL015UGxhbmV0L0dpcmxHdWlkZXMvc3JjL3JvdXRlcy90b25lLWFuYWx5c2lzL1RvbmVCb3gvVG9uZUJveC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiAvKipcbiAgKiBJbWFnZSBTb3VyY2VzOlxuICAqIGh0dHBzOi8vcGl4YWJheS5jb20vcC0xNzI3NDkwLz9ub19yZWRpcmVjdFxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Ub25lQm94LmNzcyc7XG5cbi8qY2xhc3MgVG9uZUVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdG9uZXMgPSB0aGlzLnByb3BzLnRvbmUudG9uZXMubWFwKChpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50b25lfT5cbiAgICAgICAgICA8bGFiZWw+e2kudG9uZV9uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPntpLnNjb3JlfTwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmVudHJ5fT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5lbnRyeUxhYmVsfT57Z2V0VGV4dFByZXZpZXcoKX08L2xhYmVsPlxuICAgICAgICB7dG9uZXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Ki9cblxuY2xhc3MgVG9uZUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8qXG4gICAgbGV0IHRvbmVzPVtdO1xuXG4gICAgZm9yICh2YXIgaT0wO2k8dGhpcy5wcm9wcy51dHRlcmFuY2VzLmxlbmd0aDtpKyspIHtcbiAgICAgIGZvciAodmFyIGo9MDtqPHRoaXMucHJvcHMudXR0ZXJhbmNlc1tpXS50b25lcy5sZW5ndGg7aisrKSB7XG4gICAgICAgIGxldCBpZHg9LTE7XG4gICAgICAgIGZvciAodmFyIGs9MDtrPHRvbmVzLmxlbmd0aDtrKyspIHtcbiAgICAgICAgICBpZiAodG9uZXNba10udG9uZV9uYW1lID09PSB0aGlzLnByb3BzLnV0dGVyYW5jZXNbaV0udG9uZXNbal0udG9uZV9uYW1lKSB7XG4gICAgICAgICAgICBsZXQgaWR4PWs7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgIHRvbmVzW2lkeF0uc2NvcmVzLnB1c2godGhpcy5wcm9wcy51dHRlcmFuY2VzW2ldLnRvbmVzW2pdLnNjb3JlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0b25lcy5wdXNoKHtcbiAgICAgICAgICAgIHRvbmVfbmFtZTogdGhpcy5wcm9wcy51dHRlcmFuY2VzW2ldLnRvbmVzW2pdLnRvbmVfbmFtZSxcbiAgICAgICAgICAgIHNjb3JlczogW3RoaXMucHJvcHMudXR0ZXJhbmNlc1tpXS50b25lc1tqXS5zY29yZV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGF2ZXJhZ2VUb25lcyA9IHRvbmVzLm1hcCgodG9uZSkgPT4ge1xuICAgICAgbGV0IHNjb3JlPTA7XG4gICAgICBmb3IgKHZhciBpPTA7IGk8dG9uZS5zY29yZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2NvcmUrPXRvbmUuc2NvcmVzW2ldO1xuICAgICAgfVxuICAgICAgc2NvcmU9c2NvcmUvdG9uZS5zY29yZXMubGVuZ3RoO1xuXG4gICAgICByZXR1cm4gKHtcbiAgICAgICAgdG9uZV9uYW1lOiB0b25lLnRvbmVfbmFtZSxcbiAgICAgICAgc2NvcmU6IHNjb3JlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdhdmVyYWdlIHRvbmVzOiAnLGF2ZXJhZ2VUb25lcyk7Ki9cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b25lczogdGhpcy5wcm9wcy51dHRlcmFuY2VzXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZygndG9uZXN0YXRlOiAnLHRoaXMuc3RhdGUudG9uZXMpO1xuICAgIGxldCB0b25lcyA9IHRoaXMuc3RhdGUudG9uZXMubWFwKCh0b25lLGlkeCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3RvbmU6ICcsdG9uZSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2Pnt0b25lLnRvbmVfbmFtZX08L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICBoZWxsb1xuICAgICAgICB7dG9uZXN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoVG9uZUJveCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy90b25lLWFuYWx5c2lzL1RvbmVCb3gvVG9uZUJveC5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBS0E7QUE5REE7QUFDQTtBQWdFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
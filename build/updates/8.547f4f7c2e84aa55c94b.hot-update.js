require("source-map-support").install();
exports.id = 8;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__("cookie-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt__ = __webpack_require__("express-jwt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql__ = __webpack_require__("express-graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__ = __webpack_require__("jsonwebtoken");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_node_fetch__ = __webpack_require__("node-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pretty_error__ = __webpack_require__("pretty-error");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_App__ = __webpack_require__("./src/components/App.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Html__ = __webpack_require__("./src/components/Html.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__ = __webpack_require__("./src/routes/error/ErrorPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__ = __webpack_require__("./src/routes/error/ErrorPage.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__createFetch__ = __webpack_require__("./src/createFetch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__passport__ = __webpack_require__("./src/passport.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__router__ = __webpack_require__("./src/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__data_models__ = __webpack_require__("./src/data/models/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_schema__ = __webpack_require__("./src/data/schema.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_json__ = __webpack_require__("./assets.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__store_configureStore__ = __webpack_require__("./src/store/configureStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__actions_runtime__ = __webpack_require__("./src/actions/runtime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config__ = __webpack_require__("./src/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose__ = __webpack_require__("mongoose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_twitter__ = __webpack_require__("twitter");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_twitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_twitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_watson_developer_cloud_tone_analyzer_v3__ = __webpack_require__("watson-developer-cloud/tone-analyzer/v3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_watson_developer_cloud_tone_analyzer_v3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_watson_developer_cloud_tone_analyzer_v3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet__ = __webpack_require__("./src/data/models/mongodb/Tweet.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__data_utils_streamHandler__ = __webpack_require__("./src/data/utils/streamHandler.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__data_utils_streamHandler___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__data_utils_streamHandler__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/server.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





















 // eslint-disable-line import/no-unresolved




// Import Mongoose & twitter



// Import Tone Analyzer Watson API


// Require Tweet Schema



const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tone Analyzer Watson API
// -----------------------------------------------------------------------------
let tone_analyzer = new __WEBPACK_IMPORTED_MODULE_26_watson_developer_cloud_tone_analyzer_v3___default.a(__WEBPACK_IMPORTED_MODULE_23__config___default.a.auth.watson);
//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.resolve(__dirname, 'public')));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(__WEBPACK_IMPORTED_MODULE_4_express_jwt___default()({
  secret: __WEBPACK_IMPORTED_MODULE_23__config___default.a.auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token
}));
// Error handler for express-jwt
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  if (err instanceof __WEBPACK_IMPORTED_MODULE_4_express_jwt__["UnauthorizedError"]) {
    console.error('[express-jwt-error]', req.cookies.id_token);
    // `clearCookie`, otherwise user can't use web-app until cookie expires
    res.clearCookie('id_token');
  }
  next(err);
});

app.use(__WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].initialize());

if (true) {
  app.enable('trust proxy');
}
app.get('/login/facebook', __WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].authenticate('facebook', {
  scope: ['email', 'user_location'],
  session: false
}));
app.get('/login/facebook/return', __WEBPACK_IMPORTED_MODULE_16__passport__["a" /* default */].authenticate('facebook', {
  failureRedirect: '/login',
  session: false
}), (req, res) => {
  const expiresIn = 60 * 60 * 24 * 180; // 180 days
  const token = __WEBPACK_IMPORTED_MODULE_6_jsonwebtoken___default.a.sign(req.user, __WEBPACK_IMPORTED_MODULE_23__config___default.a.auth.jwt.secret, { expiresIn });
  res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
  res.redirect('/');
});

//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', __WEBPACK_IMPORTED_MODULE_5_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_19__data_schema__["a" /* default */],
  graphiql: true,
  rootValue: { request: req },
  pretty: true
})));

//
// Connect to MongoDB
// -----------------------------------------------------------------------------
__WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connect('mongodb://localhost/react-tweets');
let db = __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

//
// Twitter API
// -----------------------------------------------------------------------------
let twit = new __WEBPACK_IMPORTED_MODULE_25_twitter___default.a(__WEBPACK_IMPORTED_MODULE_23__config___default.a.auth.twitter);

// Create twitter stream
twit.stream('statuses/filter', { track: 'girlscouts,girlguidescanada,girlguides,girlguidescookies' }, function (stream) {
  __WEBPACK_IMPORTED_MODULE_28__data_utils_streamHandler___default()(stream);
});

// Twitter and Watson Utterances Tone JSON endpoint
// Go to localhost:3000/page/0/0
app.get('/page/:page/:skip', function (req, res) {
  // console.log(req.params)
  // Fetch tweets by page via param
  __WEBPACK_IMPORTED_MODULE_27__data_models_mongodb_Tweet___default.a.getTweets(0, 0, function (tweets) {
    // console.log('THE TWEETS', tweets);

    // Instantiate new utterancesObj to match required intake params
    // of Watson API
    let utterancesObj = {
      utterances: tweets.map(tweet => ({
        text: tweet.body
      }))
    };

    tone_analyzer.tone_chat(utterancesObj, function (error, response) {
      if (error) console.log('error:', error);
      // res.send(500);
      else
        // console.log(JSON.stringify(response, null, 2));

        var utterancesTone = response;

      // Render as both tweets and utterances tone as JSON
      res.send({ tweets, utterancesTone });
    });
  });
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    try {
      const css = new Set();

      // Universal HTTP client
      const fetch = Object(__WEBPACK_IMPORTED_MODULE_15__createFetch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_7_node_fetch___default.a, {
        baseUrl: __WEBPACK_IMPORTED_MODULE_23__config___default.a.api.serverUrl,
        cookie: req.headers.cookie
      });

      const initialState = {
        user: req.user || null
      };

      const store = Object(__WEBPACK_IMPORTED_MODULE_21__store_configureStore__["a" /* default */])(initialState, {
        fetch
        // I should not use `history` on server.. but how I do redirection? follow universal-router
      });

      store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_22__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        fetch,
        // You can access redux through react-redux connect
        store,
        storeSubscription: null
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_17__router__["default"].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);
      data.children = __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11__components_App__["a" /* default */],
        { context: context, store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: _this
        },
        route.component
      ));
      data.styles = [{ id: 'css', cssText: [...css].join('') }];
      data.scripts = [__WEBPACK_IMPORTED_MODULE_20__assets_json___default.a.vendor.js];
      if (route.chunks) {
        data.scripts.push(...route.chunks.map(function (chunk) {
          return __WEBPACK_IMPORTED_MODULE_20__assets_json___default.a[chunk].js;
        }));
      }
      data.scripts.push(__WEBPACK_IMPORTED_MODULE_20__assets_json___default.a.client.js);
      data.app = {
        apiUrl: __WEBPACK_IMPORTED_MODULE_23__config___default.a.api.clientUrl,
        state: context.store.getState()
      };

      const html = __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Html__["a" /* default */], _extends({}, data, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: _this
      })));
      res.status(route.status || 200);
      res.send(`<!doctype html>${html}`);
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_10_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(pe.render(err));
  const html = __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_12__components_Html__["a" /* default */],
    {
      title: 'Internal Server Error',
      description: err.message,
      styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_14__routes_error_ErrorPage_css___default.a._getCss() }] // eslint-disable-line no-underscore-dangle
      , __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err, __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: _this
    }))
  ));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
const promise = __WEBPACK_IMPORTED_MODULE_18__data_models__["e" /* default */].sync().catch(err => console.error(err.stack));
if (false) {
  promise.then(() => {
    app.listen(config.port, () => {
      console.info(`The server is running at http://localhost:${config.port}/`);
    });
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (true) {
  app.hot = module.hot;
  module.hot.accept("./src/router.js", function() { /* harmony import */ __WEBPACK_IMPORTED_MODULE_17__router__ = __webpack_require__("./src/router.js");  });
}

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy84LjU0N2Y0ZjdjMmU4NGFhNTVjOTRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZGh1L215cGxhbmV0ZmVsbG93c2hpcC9NeVBsYW5ldEdpcmxHdWlkZXMvc3JjL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IGV4cHJlc3NKd3QsIHsgVW5hdXRob3JpemVkRXJyb3IgYXMgSnd0NDAxRXJyb3IgfSBmcm9tICdleHByZXNzLWp3dCc7XG5pbXBvcnQgZXhwcmVzc0dyYXBoUUwgZnJvbSAnZXhwcmVzcy1ncmFwaHFsJztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBub2RlRmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IFByZXR0eUVycm9yIGZyb20gJ3ByZXR0eS1lcnJvcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IEh0bWwgZnJvbSAnLi9jb21wb25lbnRzL0h0bWwnO1xuaW1wb3J0IHsgRXJyb3JQYWdlV2l0aG91dFN0eWxlIH0gZnJvbSAnLi9yb3V0ZXMvZXJyb3IvRXJyb3JQYWdlJztcbmltcG9ydCBlcnJvclBhZ2VTdHlsZSBmcm9tICcuL3JvdXRlcy9lcnJvci9FcnJvclBhZ2UuY3NzJztcbmltcG9ydCBjcmVhdGVGZXRjaCBmcm9tICcuL2NyZWF0ZUZldGNoJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICcuL3Bhc3Nwb3J0JztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IG1vZGVscyBmcm9tICcuL2RhdGEvbW9kZWxzJztcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9kYXRhL3NjaGVtYSc7XG5pbXBvcnQgYXNzZXRzIGZyb20gJy4vYXNzZXRzLmpzb24nOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgeyBzZXRSdW50aW1lVmFyaWFibGUgfSBmcm9tICcuL2FjdGlvbnMvcnVudGltZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcblxuLy8gSW1wb3J0IE1vbmdvb3NlICYgdHdpdHRlclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB0d2l0dGVyIGZyb20gJ3R3aXR0ZXInO1xuXG4vLyBJbXBvcnQgVG9uZSBBbmFseXplciBXYXRzb24gQVBJXG5pbXBvcnQgVG9uZUFuYWx5emVyVjMgZnJvbSAnd2F0c29uLWRldmVsb3Blci1jbG91ZC90b25lLWFuYWx5emVyL3YzJztcblxuLy8gUmVxdWlyZSBUd2VldCBTY2hlbWFcbmltcG9ydCBUd2VldCBmcm9tICcuL2RhdGEvbW9kZWxzL21vbmdvZGIvVHdlZXQnXG5pbXBvcnQgc3RyZWFtSGFuZGxlciBmcm9tICcuL2RhdGEvdXRpbHMvc3RyZWFtSGFuZGxlcic7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuLy9cbi8vIFRvbmUgQW5hbHl6ZXIgV2F0c29uIEFQSVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmxldCB0b25lX2FuYWx5emVyID0gbmV3IFRvbmVBbmFseXplclYzKGNvbmZpZy5hdXRoLndhdHNvbik7XG4vL1xuLy8gVGVsbCBhbnkgQ1NTIHRvb2xpbmcgKHN1Y2ggYXMgTWF0ZXJpYWwgVUkpIHRvIHVzZSBhbGwgdmVuZG9yIHByZWZpeGVzIGlmIHRoZVxuLy8gdXNlciBhZ2VudCBpcyBub3Qga25vd24uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZ2xvYmFsLm5hdmlnYXRvciA9IGdsb2JhbC5uYXZpZ2F0b3IgfHwge307XG5nbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudCA9IGdsb2JhbC5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICdhbGwnO1xuXG4vL1xuLy8gUmVnaXN0ZXIgTm9kZS5qcyBtaWRkbGV3YXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAncHVibGljJykpKTtcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuLy9cbi8vIEF1dGhlbnRpY2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXBwLnVzZShcbiAgZXhwcmVzc0p3dCh7XG4gICAgc2VjcmV0OiBjb25maWcuYXV0aC5qd3Quc2VjcmV0LFxuICAgIGNyZWRlbnRpYWxzUmVxdWlyZWQ6IGZhbHNlLFxuICAgIGdldFRva2VuOiByZXEgPT4gcmVxLmNvb2tpZXMuaWRfdG9rZW4sXG4gIH0pLFxuKTtcbi8vIEVycm9yIGhhbmRsZXIgZm9yIGV4cHJlc3Mtand0XG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgaWYgKGVyciBpbnN0YW5jZW9mIEp3dDQwMUVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignW2V4cHJlc3Mtand0LWVycm9yXScsIHJlcS5jb29raWVzLmlkX3Rva2VuKTtcbiAgICAvLyBgY2xlYXJDb29raWVgLCBvdGhlcndpc2UgdXNlciBjYW4ndCB1c2Ugd2ViLWFwcCB1bnRpbCBjb29raWUgZXhwaXJlc1xuICAgIHJlcy5jbGVhckNvb2tpZSgnaWRfdG9rZW4nKTtcbiAgfVxuICBuZXh0KGVycik7XG59KTtcblxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuXG5pZiAoX19ERVZfXykge1xuICBhcHAuZW5hYmxlKCd0cnVzdCBwcm94eScpO1xufVxuYXBwLmdldChcbiAgJy9sb2dpbi9mYWNlYm9vaycsXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZmFjZWJvb2snLCB7XG4gICAgc2NvcGU6IFsnZW1haWwnLCAndXNlcl9sb2NhdGlvbiddLFxuICAgIHNlc3Npb246IGZhbHNlLFxuICB9KSxcbik7XG5hcHAuZ2V0KFxuICAnL2xvZ2luL2ZhY2Vib29rL3JldHVybicsXG4gIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnZmFjZWJvb2snLCB7XG4gICAgZmFpbHVyZVJlZGlyZWN0OiAnL2xvZ2luJyxcbiAgICBzZXNzaW9uOiBmYWxzZSxcbiAgfSksXG4gIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGV4cGlyZXNJbiA9IDYwICogNjAgKiAyNCAqIDE4MDsgLy8gMTgwIGRheXNcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHJlcS51c2VyLCBjb25maWcuYXV0aC5qd3Quc2VjcmV0LCB7IGV4cGlyZXNJbiB9KTtcbiAgICByZXMuY29va2llKCdpZF90b2tlbicsIHRva2VuLCB7IG1heEFnZTogMTAwMCAqIGV4cGlyZXNJbiwgaHR0cE9ubHk6IHRydWUgfSk7XG4gICAgcmVzLnJlZGlyZWN0KCcvJyk7XG4gIH0sXG4pO1xuXG4vL1xuLy8gUmVnaXN0ZXIgQVBJIG1pZGRsZXdhcmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAudXNlKFxuICAnL2dyYXBocWwnLFxuICBleHByZXNzR3JhcGhRTChyZXEgPT4gKHtcbiAgICBzY2hlbWEsXG4gICAgZ3JhcGhpcWw6IF9fREVWX18sXG4gICAgcm9vdFZhbHVlOiB7IHJlcXVlc3Q6IHJlcSB9LFxuICAgIHByZXR0eTogX19ERVZfXyxcbiAgfSkpLFxuKTtcblxuLy9cbi8vIENvbm5lY3QgdG8gTW9uZ29EQlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9sb2NhbGhvc3QvcmVhY3QtdHdlZXRzJyk7XG5sZXQgZGIgPSBtb25nb29zZS5jb25uZWN0aW9uO1xuXG5kYi5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gIGNvbnNvbGUubG9nKCdNb25nb29zZSBFcnJvcjogJywgZXJyKTtcbn0pO1xuXG5kYi5vbmNlKCdvcGVuJywgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnTW9uZ29vc2UgY29ubmVjdGlvbiBzdWNjZXNzZnVsLicpO1xufSk7XG5cbi8vXG4vLyBUd2l0dGVyIEFQSVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmxldCB0d2l0ID0gbmV3IHR3aXR0ZXIoY29uZmlnLmF1dGgudHdpdHRlcik7XG5cbi8vIENyZWF0ZSB0d2l0dGVyIHN0cmVhbVxudHdpdC5zdHJlYW0oJ3N0YXR1c2VzL2ZpbHRlcicseyB0cmFjazogJ2dpcmxzY291dHMsZ2lybGd1aWRlc2NhbmFkYSxnaXJsZ3VpZGVzLGdpcmxndWlkZXNjb29raWVzJ30sIGZ1bmN0aW9uKHN0cmVhbSl7XG4gIHN0cmVhbUhhbmRsZXIoc3RyZWFtKTtcbn0pO1xuXG4vLyBUd2l0dGVyIGFuZCBXYXRzb24gVXR0ZXJhbmNlcyBUb25lIEpTT04gZW5kcG9pbnRcbi8vIEdvIHRvIGxvY2FsaG9zdDozMDAwL3BhZ2UvMC8wXG5hcHAuZ2V0KCcvcGFnZS86cGFnZS86c2tpcCcsIGZ1bmN0aW9uKHJlcSwgcmVzKSB7XG4gIC8vIGNvbnNvbGUubG9nKHJlcS5wYXJhbXMpXG4gIC8vIEZldGNoIHR3ZWV0cyBieSBwYWdlIHZpYSBwYXJhbVxuICBUd2VldC5nZXRUd2VldHMoMCwgMCwgZnVuY3Rpb24odHdlZXRzKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ1RIRSBUV0VFVFMnLCB0d2VldHMpO1xuXG4gICAgLy8gSW5zdGFudGlhdGUgbmV3IHV0dGVyYW5jZXNPYmogdG8gbWF0Y2ggcmVxdWlyZWQgaW50YWtlIHBhcmFtc1xuICAgIC8vIG9mIFdhdHNvbiBBUElcbiAgICBsZXQgdXR0ZXJhbmNlc09iaiA9IHtcbiAgICAgIHV0dGVyYW5jZXM6IHR3ZWV0cy5tYXAodHdlZXQgPT4gKHtcbiAgICAgICAgdGV4dDogdHdlZXQuYm9keVxuICAgICAgfSkpXG4gICAgfTtcblxuICAgIHRvbmVfYW5hbHl6ZXIudG9uZV9jaGF0KHV0dGVyYW5jZXNPYmosIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSkge1xuICAgICAgaWYgKGVycm9yKVxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAvLyByZXMuc2VuZCg1MDApO1xuICAgICAgZWxzZVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSwgbnVsbCwgMikpO1xuXG4gICAgICAgIHZhciB1dHRlcmFuY2VzVG9uZSA9IHJlc3BvbnNlO1xuXG4gICAgICAgIC8vIFJlbmRlciBhcyBib3RoIHR3ZWV0cyBhbmQgdXR0ZXJhbmNlcyB0b25lIGFzIEpTT05cbiAgICAgICAgcmVzLnNlbmQoe3R3ZWV0cywgdXR0ZXJhbmNlc1RvbmV9KTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcbn0pO1xuXG4vL1xuLy8gUmVnaXN0ZXIgc2VydmVyLXNpZGUgcmVuZGVyaW5nIG1pZGRsZXdhcmVcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hcHAuZ2V0KCcqJywgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY3NzID0gbmV3IFNldCgpO1xuXG4gICAgLy8gVW5pdmVyc2FsIEhUVFAgY2xpZW50XG4gICAgY29uc3QgZmV0Y2ggPSBjcmVhdGVGZXRjaChub2RlRmV0Y2gsIHtcbiAgICAgIGJhc2VVcmw6IGNvbmZpZy5hcGkuc2VydmVyVXJsLFxuICAgICAgY29va2llOiByZXEuaGVhZGVycy5jb29raWUsXG4gICAgfSk7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICB1c2VyOiByZXEudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSwge1xuICAgICAgZmV0Y2gsXG4gICAgICAvLyBJIHNob3VsZCBub3QgdXNlIGBoaXN0b3J5YCBvbiBzZXJ2ZXIuLiBidXQgaG93IEkgZG8gcmVkaXJlY3Rpb24/IGZvbGxvdyB1bml2ZXJzYWwtcm91dGVyXG4gICAgfSk7XG5cbiAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgIHNldFJ1bnRpbWVWYXJpYWJsZSh7XG4gICAgICAgIG5hbWU6ICdpbml0aWFsTm93JyxcbiAgICAgICAgdmFsdWU6IERhdGUubm93KCksXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgLy8gR2xvYmFsIChjb250ZXh0KSB2YXJpYWJsZXMgdGhhdCBjYW4gYmUgZWFzaWx5IGFjY2Vzc2VkIGZyb20gYW55IFJlYWN0IGNvbXBvbmVudFxuICAgIC8vIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvY29udGV4dC5odG1sXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIC8vIEVuYWJsZXMgY3JpdGljYWwgcGF0aCBDU1MgcmVuZGVyaW5nXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20va3JpYXNvZnQvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXJcbiAgICAgIGluc2VydENzczogKC4uLnN0eWxlcykgPT4ge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgc3R5bGVzLmZvckVhY2goc3R5bGUgPT4gY3NzLmFkZChzdHlsZS5fZ2V0Q3NzKCkpKTtcbiAgICAgIH0sXG4gICAgICBmZXRjaCxcbiAgICAgIC8vIFlvdSBjYW4gYWNjZXNzIHJlZHV4IHRocm91Z2ggcmVhY3QtcmVkdXggY29ubmVjdFxuICAgICAgc3RvcmUsXG4gICAgICBzdG9yZVN1YnNjcmlwdGlvbjogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3Qgcm91dGUgPSBhd2FpdCByb3V0ZXIucmVzb2x2ZSh7XG4gICAgICAuLi5jb250ZXh0LFxuICAgICAgcGF0aDogcmVxLnBhdGgsXG4gICAgICBxdWVyeTogcmVxLnF1ZXJ5LFxuICAgIH0pO1xuXG4gICAgaWYgKHJvdXRlLnJlZGlyZWN0KSB7XG4gICAgICByZXMucmVkaXJlY3Qocm91dGUuc3RhdHVzIHx8IDMwMiwgcm91dGUucmVkaXJlY3QpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB7IC4uLnJvdXRlIH07XG4gICAgZGF0YS5jaGlsZHJlbiA9IFJlYWN0RE9NLnJlbmRlclRvU3RyaW5nKFxuICAgICAgPEFwcCBjb250ZXh0PXtjb250ZXh0fSBzdG9yZT17c3RvcmV9PlxuICAgICAgICB7cm91dGUuY29tcG9uZW50fVxuICAgICAgPC9BcHA+LFxuICAgICk7XG4gICAgZGF0YS5zdHlsZXMgPSBbeyBpZDogJ2NzcycsIGNzc1RleHQ6IFsuLi5jc3NdLmpvaW4oJycpIH1dO1xuICAgIGRhdGEuc2NyaXB0cyA9IFthc3NldHMudmVuZG9yLmpzXTtcbiAgICBpZiAocm91dGUuY2h1bmtzKSB7XG4gICAgICBkYXRhLnNjcmlwdHMucHVzaCguLi5yb3V0ZS5jaHVua3MubWFwKGNodW5rID0+IGFzc2V0c1tjaHVua10uanMpKTtcbiAgICB9XG4gICAgZGF0YS5zY3JpcHRzLnB1c2goYXNzZXRzLmNsaWVudC5qcyk7XG4gICAgZGF0YS5hcHAgPSB7XG4gICAgICBhcGlVcmw6IGNvbmZpZy5hcGkuY2xpZW50VXJsLFxuICAgICAgc3RhdGU6IGNvbnRleHQuc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICB9O1xuXG4gICAgY29uc3QgaHRtbCA9IFJlYWN0RE9NLnJlbmRlclRvU3RhdGljTWFya3VwKDxIdG1sIHsuLi5kYXRhfSAvPik7XG4gICAgcmVzLnN0YXR1cyhyb3V0ZS5zdGF0dXMgfHwgMjAwKTtcbiAgICByZXMuc2VuZChgPCFkb2N0eXBlIGh0bWw+JHtodG1sfWApO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBuZXh0KGVycik7XG4gIH1cbn0pO1xuXG4vL1xuLy8gRXJyb3IgaGFuZGxpbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBwZSA9IG5ldyBQcmV0dHlFcnJvcigpO1xucGUuc2tpcE5vZGVGaWxlcygpO1xucGUuc2tpcFBhY2thZ2UoJ2V4cHJlc3MnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IocGUucmVuZGVyKGVycikpO1xuICBjb25zdCBodG1sID0gUmVhY3RET00ucmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgPEh0bWxcbiAgICAgIHRpdGxlPVwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCJcbiAgICAgIGRlc2NyaXB0aW9uPXtlcnIubWVzc2FnZX1cbiAgICAgIHN0eWxlcz17W3sgaWQ6ICdjc3MnLCBjc3NUZXh0OiBlcnJvclBhZ2VTdHlsZS5fZ2V0Q3NzKCkgfV19IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICA+XG4gICAgICB7UmVhY3RET00ucmVuZGVyVG9TdHJpbmcoPEVycm9yUGFnZVdpdGhvdXRTdHlsZSBlcnJvcj17ZXJyfSAvPil9XG4gICAgPC9IdG1sPixcbiAgKTtcbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gIHJlcy5zZW5kKGA8IWRvY3R5cGUgaHRtbD4ke2h0bWx9YCk7XG59KTtcblxuLy9cbi8vIExhdW5jaCB0aGUgc2VydmVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY29uc3QgcHJvbWlzZSA9IG1vZGVscy5zeW5jKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKSk7XG5pZiAoIW1vZHVsZS5ob3QpIHtcbiAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICBhcHAubGlzdGVuKGNvbmZpZy5wb3J0LCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmluZm8oYFRoZSBzZXJ2ZXIgaXMgcnVubmluZyBhdCBodHRwOi8vbG9jYWxob3N0OiR7Y29uZmlnLnBvcnR9L2ApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy9cbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAobW9kdWxlLmhvdCkge1xuICBhcHAuaG90ID0gbW9kdWxlLmhvdDtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcm91dGVyJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VydmVyLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUtBO0FBR0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUVBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQTRFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
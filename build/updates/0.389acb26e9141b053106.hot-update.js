require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./README.md":
/***/ (function(module, exports) {

module.exports = {"html":"<h1>Getting Started - React/Express Boilerplate</h1>\n<h2>Requirements</h2>\n<ul>\n<li>Mac OS X, Windows, or Linux</li>\n<li><a href=\"https://yarnpkg.com/\">Yarn</a> package + <a href=\"https://nodejs.org/\">Node.js</a> v6.5 or newer</li>\n<li>Text editor or IDE pre-configured with React/JSX/Flow/ESlint (<a href=\"./how-to-configure-text-editors.md\">learn more</a>)</li>\n</ul>\n<h2>Directory Layout</h2>\n<p>Before you start, take a moment to see how the project structure looks like:</p>\n<pre><code>.\n├── /build/                     # The folder for compiled output\n├── /docs/                      # Documentation files for the project\n├── /node_modules/              # 3rd-party libraries and utilities\n├── /public/                    # Static files which are copied into the /build/public folder\n├── /src/                       # The source code of the application\n│   ├── /components/            # React components\n│   ├── /data/                  # GraphQL server schema and data models\n│   ├── /routes/                # Page/screen components along with the routing information\n│   ├── /client.js              # Client-side startup script\n│   ├── /config.js              # Global application settings\n│   ├── /server.js              # Server-side startup script\n│   └── ...                     # Other core framework modules\n├── /test/                      # Unit and end-to-end tests\n├── /tools/                     # Build automation scripts and utilities\n│   ├── /lib/                   # Library for utility snippets\n│   ├── /build.js               # Builds the project from source to output (build) folder\n│   ├── /bundle.js              # Bundles the web resources into package(s) through Webpack\n│   ├── /clean.js               # Cleans up the output (build) folder\n│   ├── /copy.js                # Copies static files to output (build) folder\n│   ├── /deploy.js              # Deploys your web application\n│   ├── /postcss.config.js      # Configuration for transforming styles with PostCSS plugins\n│   ├── /run.js                 # Helper function for running build automation tasks\n│   ├── /runServer.js           # Launches (or restarts) Node.js server\n│   ├── /start.js               # Launches the development web server with &quot;live reload&quot;\n│   └── /webpack.config.js      # Configurations for client-side and server-side bundles\n├── Dockerfile                  # Commands for building a Docker image for production\n├── package.json                # The list of 3rd party libraries and utilities\n└── yarn.lock                   # Fixed versions of all the dependencies\n</code></pre>\n<h2>Quick Start</h2>\n<h3>1. Get the latest version</h3>\n<p>You can start by cloning the latest version of this project on your\nlocal machine by running:</p>\n<pre><code class=\"language-shell\">$ git clone \\\n      git@github.com:hmeinertrita/MyPlanetGirlGuides.git\n$ cd MyPlanetGirlGuides\n</code></pre>\n<h3>2. Run <code>yarn install</code></h3>\n<p>This will install both run-time project dependencies and developer tools listed\nin <a href=\"../package.json\">package.json</a> file.</p>\n<h3>3. Run <code>yarn start</code></h3>\n<p>This command will build the app from the source files (<code>/src</code>) into the output\n<code>/build</code> folder. As soon as the initial build completes, it will start the\nNode.js server (<code>node build/server.js</code>) and <a href=\"https://browsersync.io/\">Browsersync</a>\nwith <a href=\"https://webpack.github.io/docs/hot-module-replacement\">HMR</a> on top of it.</p>\n<blockquote>\n<p><a href=\"http://localhost:3000/\">http://localhost:3000/</a> — Node.js server (<code>build/server.js</code>)\nwith Browsersync and HMR enabled<br>\n<a href=\"http://localhost:3000/graphql\">http://localhost:3000/graphql</a> — GraphQL server and IDE<br>\n<a href=\"http://localhost:3001/\">http://localhost:3001/</a> — Browsersync control panel (UI)</p>\n</blockquote>\n<p>Now you can open your web app in a browser, on mobile devices and start\nhacking away. Whenever you modify any of the source files inside the <code>/src</code> folder,\nthe module bundler (<a href=\"http://webpack.github.io/\">Webpack</a>) will recompile the\napp on the fly and refresh all the connected browsers.</p>\n<p>Note that the <code>yarn start</code> command launches the app in <code>development</code> mode,\nthe compiled output files are not optimized and minimized in this case.</p>\n<h2>Additional Resources</h2>\n<ul>\n<li><a href=\"http://facebook.github.io/react/\">Getting Started with React.js</a></li>\n<li><a href=\"http://redux.js.org/\">Getting Started Redux.js</a></li>\n<li><a href=\"https://github.com/kriasoft/universal-router\">About Universal-Router</a></li>\n<li><a href=\"http://stackoverflow.com/questions/tagged/reactjs\">React.js Questions on StackOverflow</a></li>\n<li><a href=\"https://discuss.reactjs.org/\">React.js Discussion Board</a></li>\n<li><a href=\"http://flowtype.org/\">Flow — A static type checker for JavaScript</a></li>\n<li><a href=\"https://github.com/reactjs/react-future\">The Future of React</a></li>\n<li><a href=\"https://babeljs.io/docs/learn-es6/\">Learn ES6</a>, <a href=\"https://github.com/lukehoban/es6features#readme\">ES6 Features</a></li>\n</ul>\n<hr>\n<p>Based off of the <a href=\"https://github.com/kriasoft/react-starter-kit\">react-starter-kit</a></p>\n<p>[rsk]: <a href=\"https://www.reactstarterkit.com\">https://www.reactstarterkit.com</a>\n<br>\n[demo]: <a href=\"http://demo.reactstarterkit.com\">http://demo.reactstarterkit.com</a>\n<br></p>\n"};

/***/ }),

/***/ "./src/components/Page/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Page_css__ = __webpack_require__("./src/components/Page/Page.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Page_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Page_css__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/components/Page/Page.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Page extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, html } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_3__Page_css___default.a.root, style: { minHeight: '80%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_3__Page_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: html },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        })
      )
    );
  }
}

Page.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  html: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
};
/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_3__Page_css___default.a)(Page));

/***/ }),

/***/ "./src/routes/home/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Page__ = __webpack_require__("./src/components/Page/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__README_md__ = __webpack_require__("./README.md");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__README_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__README_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_css__ = __webpack_require__("./src/routes/home/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Home_css__);
var _jsxFileName = '/Users/cdhu/myplanetfellowship/MyPlanetGirlGuides/src/routes/home/Home.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4__Home_css___default.a.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        },
        'Hi'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default.a(__WEBPACK_IMPORTED_MODULE_4__Home_css___default.a)(Home));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjM4OWFjYjI2ZTkxNDFiMDUzMTA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9SRUFETUUubWQ/M2JmMSIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUGFnZS9QYWdlLmpzP2NjOTEiLCJ3ZWJwYWNrOi8vL3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmpzPzQ1MzgiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XCJodG1sXCI6XCI8aDE+R2V0dGluZyBTdGFydGVkIC0gUmVhY3QvRXhwcmVzcyBCb2lsZXJwbGF0ZTwvaDE+XFxuPGgyPlJlcXVpcmVtZW50czwvaDI+XFxuPHVsPlxcbjxsaT5NYWMgT1MgWCwgV2luZG93cywgb3IgTGludXg8L2xpPlxcbjxsaT48YSBocmVmPVxcXCJodHRwczovL3lhcm5wa2cuY29tL1xcXCI+WWFybjwvYT4gcGFja2FnZSArIDxhIGhyZWY9XFxcImh0dHBzOi8vbm9kZWpzLm9yZy9cXFwiPk5vZGUuanM8L2E+IHY2LjUgb3IgbmV3ZXI8L2xpPlxcbjxsaT5UZXh0IGVkaXRvciBvciBJREUgcHJlLWNvbmZpZ3VyZWQgd2l0aCBSZWFjdC9KU1gvRmxvdy9FU2xpbnQgKDxhIGhyZWY9XFxcIi4vaG93LXRvLWNvbmZpZ3VyZS10ZXh0LWVkaXRvcnMubWRcXFwiPmxlYXJuIG1vcmU8L2E+KTwvbGk+XFxuPC91bD5cXG48aDI+RGlyZWN0b3J5IExheW91dDwvaDI+XFxuPHA+QmVmb3JlIHlvdSBzdGFydCwgdGFrZSBhIG1vbWVudCB0byBzZWUgaG93IHRoZSBwcm9qZWN0IHN0cnVjdHVyZSBsb29rcyBsaWtlOjwvcD5cXG48cHJlPjxjb2RlPi5cXG7ilJzilIDilIAgL2J1aWxkLyAgICAgICAgICAgICAgICAgICAgICMgVGhlIGZvbGRlciBmb3IgY29tcGlsZWQgb3V0cHV0XFxu4pSc4pSA4pSAIC9kb2NzLyAgICAgICAgICAgICAgICAgICAgICAjIERvY3VtZW50YXRpb24gZmlsZXMgZm9yIHRoZSBwcm9qZWN0XFxu4pSc4pSA4pSAIC9ub2RlX21vZHVsZXMvICAgICAgICAgICAgICAjIDNyZC1wYXJ0eSBsaWJyYXJpZXMgYW5kIHV0aWxpdGllc1xcbuKUnOKUgOKUgCAvcHVibGljLyAgICAgICAgICAgICAgICAgICAgIyBTdGF0aWMgZmlsZXMgd2hpY2ggYXJlIGNvcGllZCBpbnRvIHRoZSAvYnVpbGQvcHVibGljIGZvbGRlclxcbuKUnOKUgOKUgCAvc3JjLyAgICAgICAgICAgICAgICAgICAgICAgIyBUaGUgc291cmNlIGNvZGUgb2YgdGhlIGFwcGxpY2F0aW9uXFxu4pSCICAg4pSc4pSA4pSAIC9jb21wb25lbnRzLyAgICAgICAgICAgICMgUmVhY3QgY29tcG9uZW50c1xcbuKUgiAgIOKUnOKUgOKUgCAvZGF0YS8gICAgICAgICAgICAgICAgICAjIEdyYXBoUUwgc2VydmVyIHNjaGVtYSBhbmQgZGF0YSBtb2RlbHNcXG7ilIIgICDilJzilIDilIAgL3JvdXRlcy8gICAgICAgICAgICAgICAgIyBQYWdlL3NjcmVlbiBjb21wb25lbnRzIGFsb25nIHdpdGggdGhlIHJvdXRpbmcgaW5mb3JtYXRpb25cXG7ilIIgICDilJzilIDilIAgL2NsaWVudC5qcyAgICAgICAgICAgICAgIyBDbGllbnQtc2lkZSBzdGFydHVwIHNjcmlwdFxcbuKUgiAgIOKUnOKUgOKUgCAvY29uZmlnLmpzICAgICAgICAgICAgICAjIEdsb2JhbCBhcHBsaWNhdGlvbiBzZXR0aW5nc1xcbuKUgiAgIOKUnOKUgOKUgCAvc2VydmVyLmpzICAgICAgICAgICAgICAjIFNlcnZlci1zaWRlIHN0YXJ0dXAgc2NyaXB0XFxu4pSCICAg4pSU4pSA4pSAIC4uLiAgICAgICAgICAgICAgICAgICAgICMgT3RoZXIgY29yZSBmcmFtZXdvcmsgbW9kdWxlc1xcbuKUnOKUgOKUgCAvdGVzdC8gICAgICAgICAgICAgICAgICAgICAgIyBVbml0IGFuZCBlbmQtdG8tZW5kIHRlc3RzXFxu4pSc4pSA4pSAIC90b29scy8gICAgICAgICAgICAgICAgICAgICAjIEJ1aWxkIGF1dG9tYXRpb24gc2NyaXB0cyBhbmQgdXRpbGl0aWVzXFxu4pSCICAg4pSc4pSA4pSAIC9saWIvICAgICAgICAgICAgICAgICAgICMgTGlicmFyeSBmb3IgdXRpbGl0eSBzbmlwcGV0c1xcbuKUgiAgIOKUnOKUgOKUgCAvYnVpbGQuanMgICAgICAgICAgICAgICAjIEJ1aWxkcyB0aGUgcHJvamVjdCBmcm9tIHNvdXJjZSB0byBvdXRwdXQgKGJ1aWxkKSBmb2xkZXJcXG7ilIIgICDilJzilIDilIAgL2J1bmRsZS5qcyAgICAgICAgICAgICAgIyBCdW5kbGVzIHRoZSB3ZWIgcmVzb3VyY2VzIGludG8gcGFja2FnZShzKSB0aHJvdWdoIFdlYnBhY2tcXG7ilIIgICDilJzilIDilIAgL2NsZWFuLmpzICAgICAgICAgICAgICAgIyBDbGVhbnMgdXAgdGhlIG91dHB1dCAoYnVpbGQpIGZvbGRlclxcbuKUgiAgIOKUnOKUgOKUgCAvY29weS5qcyAgICAgICAgICAgICAgICAjIENvcGllcyBzdGF0aWMgZmlsZXMgdG8gb3V0cHV0IChidWlsZCkgZm9sZGVyXFxu4pSCICAg4pSc4pSA4pSAIC9kZXBsb3kuanMgICAgICAgICAgICAgICMgRGVwbG95cyB5b3VyIHdlYiBhcHBsaWNhdGlvblxcbuKUgiAgIOKUnOKUgOKUgCAvcG9zdGNzcy5jb25maWcuanMgICAgICAjIENvbmZpZ3VyYXRpb24gZm9yIHRyYW5zZm9ybWluZyBzdHlsZXMgd2l0aCBQb3N0Q1NTIHBsdWdpbnNcXG7ilIIgICDilJzilIDilIAgL3J1bi5qcyAgICAgICAgICAgICAgICAgIyBIZWxwZXIgZnVuY3Rpb24gZm9yIHJ1bm5pbmcgYnVpbGQgYXV0b21hdGlvbiB0YXNrc1xcbuKUgiAgIOKUnOKUgOKUgCAvcnVuU2VydmVyLmpzICAgICAgICAgICAjIExhdW5jaGVzIChvciByZXN0YXJ0cykgTm9kZS5qcyBzZXJ2ZXJcXG7ilIIgICDilJzilIDilIAgL3N0YXJ0LmpzICAgICAgICAgICAgICAgIyBMYXVuY2hlcyB0aGUgZGV2ZWxvcG1lbnQgd2ViIHNlcnZlciB3aXRoICZxdW90O2xpdmUgcmVsb2FkJnF1b3Q7XFxu4pSCICAg4pSU4pSA4pSAIC93ZWJwYWNrLmNvbmZpZy5qcyAgICAgICMgQ29uZmlndXJhdGlvbnMgZm9yIGNsaWVudC1zaWRlIGFuZCBzZXJ2ZXItc2lkZSBidW5kbGVzXFxu4pSc4pSA4pSAIERvY2tlcmZpbGUgICAgICAgICAgICAgICAgICAjIENvbW1hbmRzIGZvciBidWlsZGluZyBhIERvY2tlciBpbWFnZSBmb3IgcHJvZHVjdGlvblxcbuKUnOKUgOKUgCBwYWNrYWdlLmpzb24gICAgICAgICAgICAgICAgIyBUaGUgbGlzdCBvZiAzcmQgcGFydHkgbGlicmFyaWVzIGFuZCB1dGlsaXRpZXNcXG7ilJTilIDilIAgeWFybi5sb2NrICAgICAgICAgICAgICAgICAgICMgRml4ZWQgdmVyc2lvbnMgb2YgYWxsIHRoZSBkZXBlbmRlbmNpZXNcXG48L2NvZGU+PC9wcmU+XFxuPGgyPlF1aWNrIFN0YXJ0PC9oMj5cXG48aDM+MS4gR2V0IHRoZSBsYXRlc3QgdmVyc2lvbjwvaDM+XFxuPHA+WW91IGNhbiBzdGFydCBieSBjbG9uaW5nIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGlzIHByb2plY3Qgb24geW91clxcbmxvY2FsIG1hY2hpbmUgYnkgcnVubmluZzo8L3A+XFxuPHByZT48Y29kZSBjbGFzcz1cXFwibGFuZ3VhZ2Utc2hlbGxcXFwiPiQgZ2l0IGNsb25lIFxcXFxcXG4gICAgICBnaXRAZ2l0aHViLmNvbTpobWVpbmVydHJpdGEvTXlQbGFuZXRHaXJsR3VpZGVzLmdpdFxcbiQgY2QgTXlQbGFuZXRHaXJsR3VpZGVzXFxuPC9jb2RlPjwvcHJlPlxcbjxoMz4yLiBSdW4gPGNvZGU+eWFybiBpbnN0YWxsPC9jb2RlPjwvaDM+XFxuPHA+VGhpcyB3aWxsIGluc3RhbGwgYm90aCBydW4tdGltZSBwcm9qZWN0IGRlcGVuZGVuY2llcyBhbmQgZGV2ZWxvcGVyIHRvb2xzIGxpc3RlZFxcbmluIDxhIGhyZWY9XFxcIi4uL3BhY2thZ2UuanNvblxcXCI+cGFja2FnZS5qc29uPC9hPiBmaWxlLjwvcD5cXG48aDM+My4gUnVuIDxjb2RlPnlhcm4gc3RhcnQ8L2NvZGU+PC9oMz5cXG48cD5UaGlzIGNvbW1hbmQgd2lsbCBidWlsZCB0aGUgYXBwIGZyb20gdGhlIHNvdXJjZSBmaWxlcyAoPGNvZGU+L3NyYzwvY29kZT4pIGludG8gdGhlIG91dHB1dFxcbjxjb2RlPi9idWlsZDwvY29kZT4gZm9sZGVyLiBBcyBzb29uIGFzIHRoZSBpbml0aWFsIGJ1aWxkIGNvbXBsZXRlcywgaXQgd2lsbCBzdGFydCB0aGVcXG5Ob2RlLmpzIHNlcnZlciAoPGNvZGU+bm9kZSBidWlsZC9zZXJ2ZXIuanM8L2NvZGU+KSBhbmQgPGEgaHJlZj1cXFwiaHR0cHM6Ly9icm93c2Vyc3luYy5pby9cXFwiPkJyb3dzZXJzeW5jPC9hPlxcbndpdGggPGEgaHJlZj1cXFwiaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcXFwiPkhNUjwvYT4gb24gdG9wIG9mIGl0LjwvcD5cXG48YmxvY2txdW90ZT5cXG48cD48YSBocmVmPVxcXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvXFxcIj5odHRwOi8vbG9jYWxob3N0OjMwMDAvPC9hPiDigJQgTm9kZS5qcyBzZXJ2ZXIgKDxjb2RlPmJ1aWxkL3NlcnZlci5qczwvY29kZT4pXFxud2l0aCBCcm93c2Vyc3luYyBhbmQgSE1SIGVuYWJsZWQ8YnI+XFxuPGEgaHJlZj1cXFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyYXBocWxcXFwiPmh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsPC9hPiDigJQgR3JhcGhRTCBzZXJ2ZXIgYW5kIElERTxicj5cXG48YSBocmVmPVxcXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvXFxcIj5odHRwOi8vbG9jYWxob3N0OjMwMDEvPC9hPiDigJQgQnJvd3NlcnN5bmMgY29udHJvbCBwYW5lbCAoVUkpPC9wPlxcbjwvYmxvY2txdW90ZT5cXG48cD5Ob3cgeW91IGNhbiBvcGVuIHlvdXIgd2ViIGFwcCBpbiBhIGJyb3dzZXIsIG9uIG1vYmlsZSBkZXZpY2VzIGFuZCBzdGFydFxcbmhhY2tpbmcgYXdheS4gV2hlbmV2ZXIgeW91IG1vZGlmeSBhbnkgb2YgdGhlIHNvdXJjZSBmaWxlcyBpbnNpZGUgdGhlIDxjb2RlPi9zcmM8L2NvZGU+IGZvbGRlcixcXG50aGUgbW9kdWxlIGJ1bmRsZXIgKDxhIGhyZWY9XFxcImh0dHA6Ly93ZWJwYWNrLmdpdGh1Yi5pby9cXFwiPldlYnBhY2s8L2E+KSB3aWxsIHJlY29tcGlsZSB0aGVcXG5hcHAgb24gdGhlIGZseSBhbmQgcmVmcmVzaCBhbGwgdGhlIGNvbm5lY3RlZCBicm93c2Vycy48L3A+XFxuPHA+Tm90ZSB0aGF0IHRoZSA8Y29kZT55YXJuIHN0YXJ0PC9jb2RlPiBjb21tYW5kIGxhdW5jaGVzIHRoZSBhcHAgaW4gPGNvZGU+ZGV2ZWxvcG1lbnQ8L2NvZGU+IG1vZGUsXFxudGhlIGNvbXBpbGVkIG91dHB1dCBmaWxlcyBhcmUgbm90IG9wdGltaXplZCBhbmQgbWluaW1pemVkIGluIHRoaXMgY2FzZS48L3A+XFxuPGgyPkFkZGl0aW9uYWwgUmVzb3VyY2VzPC9oMj5cXG48dWw+XFxuPGxpPjxhIGhyZWY9XFxcImh0dHA6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvXFxcIj5HZXR0aW5nIFN0YXJ0ZWQgd2l0aCBSZWFjdC5qczwvYT48L2xpPlxcbjxsaT48YSBocmVmPVxcXCJodHRwOi8vcmVkdXguanMub3JnL1xcXCI+R2V0dGluZyBTdGFydGVkIFJlZHV4LmpzPC9hPjwvbGk+XFxuPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9rcmlhc29mdC91bml2ZXJzYWwtcm91dGVyXFxcIj5BYm91dCBVbml2ZXJzYWwtUm91dGVyPC9hPjwvbGk+XFxuPGxpPjxhIGhyZWY9XFxcImh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvdGFnZ2VkL3JlYWN0anNcXFwiPlJlYWN0LmpzIFF1ZXN0aW9ucyBvbiBTdGFja092ZXJmbG93PC9hPjwvbGk+XFxuPGxpPjxhIGhyZWY9XFxcImh0dHBzOi8vZGlzY3Vzcy5yZWFjdGpzLm9yZy9cXFwiPlJlYWN0LmpzIERpc2N1c3Npb24gQm9hcmQ8L2E+PC9saT5cXG48bGk+PGEgaHJlZj1cXFwiaHR0cDovL2Zsb3d0eXBlLm9yZy9cXFwiPkZsb3cg4oCUIEEgc3RhdGljIHR5cGUgY2hlY2tlciBmb3IgSmF2YVNjcmlwdDwvYT48L2xpPlxcbjxsaT48YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1mdXR1cmVcXFwiPlRoZSBGdXR1cmUgb2YgUmVhY3Q8L2E+PC9saT5cXG48bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9iYWJlbGpzLmlvL2RvY3MvbGVhcm4tZXM2L1xcXCI+TGVhcm4gRVM2PC9hPiwgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2x1a2Vob2Jhbi9lczZmZWF0dXJlcyNyZWFkbWVcXFwiPkVTNiBGZWF0dXJlczwvYT48L2xpPlxcbjwvdWw+XFxuPGhyPlxcbjxwPkJhc2VkIG9mZiBvZiB0aGUgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2tyaWFzb2Z0L3JlYWN0LXN0YXJ0ZXIta2l0XFxcIj5yZWFjdC1zdGFydGVyLWtpdDwvYT48L3A+XFxuPHA+W3Jza106IDxhIGhyZWY9XFxcImh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb21cXFwiPmh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb208L2E+XFxuPGJyPlxcbltkZW1vXTogPGEgaHJlZj1cXFwiaHR0cDovL2RlbW8ucmVhY3RzdGFydGVya2l0LmNvbVxcXCI+aHR0cDovL2RlbW8ucmVhY3RzdGFydGVya2l0LmNvbTwvYT5cXG48YnI+PC9wPlxcblwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vUGFnZS5jc3MnO1xuXG5jbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGh0bWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aXRsZSwgaHRtbCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0gc3R5bGU9e3sgbWluSGVpZ2h0OiAnODAlJyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9QYWdlL1BhZ2UuanMiLCIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi4vLi4vLi4vUkVBRE1FLm1kJztcbmltcG9ydCBzIGZyb20gJy4vSG9tZS5jc3MnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICBIaVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShIb21lKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcm91dGVzL2hvbWUvSG9tZS5qcyJdLCJtYXBwaW5ncyI6Ijs7QTs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQVlBO0FBckJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFGQTtBQXVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQVRBO0FBQ0E7QUFXQTs7OztBIiwic291cmNlUm9vdCI6IiJ9
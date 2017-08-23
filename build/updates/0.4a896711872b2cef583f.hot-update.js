require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./node_modules/Twitter/lib/parser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// glorious streaming json parser, built specifically for the twitter streaming api
// assumptions:
//   1) ninjas are mammals
//   2) tweets come in chunks of text, surrounded by {}'s, separated by line breaks
//   3) only one tweet per chunk
//
//   p = new parser.instance()
//   p.addListener('object', function...)
//   p.receive(data)
//   p.receive(data)
//   ...

var EventEmitter = __webpack_require__("events").EventEmitter;

var Parser = module.exports = function Parser() {
  // Make sure we call our parents constructor
  EventEmitter.call(this);
  this.buffer = '';
  return this;
};

// The parser emits events!
Parser.prototype = Object.create(EventEmitter.prototype);

Parser.END        = '\r\n';
Parser.END_LENGTH = 2;

Parser.prototype.receive = function receive(buffer) {
  this.buffer += buffer.toString('utf8');
  var index, json;

  // We have END?
  while ((index = this.buffer.indexOf(Parser.END)) > -1) {
    json = this.buffer.slice(0, index);
    this.buffer = this.buffer.slice(index + Parser.END_LENGTH);
    if (json.length > 0) {
      try {
        json = JSON.parse(json);
        // Event message
        if (json.event !== undefined) {
          // First emit specific event
          this.emit(json.event, json);
          // Now emit catch-all event
          this.emit('event', json);
        }
        // Delete message
        else if (json.delete !== undefined) {
          this.emit('delete', json);
        }
        // Friends message (beginning of stream)
        else if (json.friends !== undefined || json.friends_str !== undefined) {
          this.emit('friends', json);
        }
        // Any other message
        else {
          this.emit('data', json);
        }
      }
      catch (error) {
        error.source = json;
        this.emit('error', error);
      }
    }
    else {
      // Keep Alive
      this.emit('ping');
    }
  }
};


/***/ }),

/***/ "./node_modules/Twitter/lib/twitter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies
 */

var url = __webpack_require__("url");
var Streamparser = __webpack_require__("./node_modules/Twitter/lib/parser.js");
var request = __webpack_require__("request");
var extend = __webpack_require__("deep-extend");

// Package version
var VERSION = __webpack_require__("./node_modules/Twitter/package.json").version;

function Twitter(options) {
  if (!(this instanceof Twitter)) { return new Twitter(options) }

  this.VERSION = VERSION;

  // Merge the default options with the client submitted options
  this.options = extend({
    consumer_key: null,
    consumer_secret: null,
    access_token_key: null,
    access_token_secret: null,
    bearer_token: null,
    rest_base: 'https://api.twitter.com/1.1',
    stream_base: 'https://stream.twitter.com/1.1',
    user_stream_base: 'https://userstream.twitter.com/1.1',
    site_stream_base: 'https://sitestream.twitter.com/1.1',
    media_base: 'https://upload.twitter.com/1.1',
    request_options: {
      headers: {
        Accept: '*/*',
        Connection: 'close',
        'User-Agent': 'node-twitter/' + VERSION
      }
    }
  }, options);

  // Default to user authentication
  var authentication_options = {
    oauth: {
      consumer_key: this.options.consumer_key,
      consumer_secret: this.options.consumer_secret,
      token: this.options.access_token_key,
      token_secret: this.options.access_token_secret
    }
  };

  // Check to see if we are going to use User Authentication or Application Authetication
  if (this.options.bearer_token) {
    authentication_options = {
      headers: {
        Authorization: 'Bearer ' + this.options.bearer_token
      }
    };
  }

  // Configure default request options
  this.request = request.defaults(
    extend(
      this.options.request_options,
      authentication_options
    )
  );

  // Check if Promise present
  this.allow_promise = (typeof Promise === 'function');
}

Twitter.prototype.__buildEndpoint = function(path, base) {
  var bases = {
    'rest': this.options.rest_base,
    'stream': this.options.stream_base,
    'user_stream': this.options.user_stream_base,
    'site_stream': this.options.site_stream_base,
    'media': this.options.media_base
  };
  var endpoint = (bases.hasOwnProperty(base)) ? bases[base] : bases.rest;
  // if full url is specified we use that
  var isFullUrl = (url.parse(path).protocol !== null);
  if (isFullUrl) {
    endpoint = path;
  }
  else {
    // If the path begins with media or /media
    if (path.match(/^(\/)?media/)) {
      endpoint = bases.media;
    }
    endpoint += (path.charAt(0) === '/') ? path : '/' + path;
  }

  // Remove trailing slash
  endpoint = endpoint.replace(/\/$/, '');

  if(!isFullUrl) {
    // Add json extension if not provided in call... only if a full url is not specified
    endpoint += (path.split('.').pop() !== 'json') ? '.json' : '';
  }

  return endpoint;
};

Twitter.prototype.__request = function(method, path, params, callback) {
  var base = 'rest', promise = false;

  // Set the callback if no params are passed
  if (typeof params === 'function') {
    callback = params;
    params = {};
  }
  // Return promise if no callback is passed and promises available
  else if (callback === undefined && this.allow_promise) {
    promise = true;
  }

  // Set API base
  if (typeof params.base !== 'undefined') {
    base = params.base;
    delete params.base;
  }

  // Build the options to pass to our custom request object
  var options = {
    method: method.toLowerCase(),  // Request method - get || post
    url: this.__buildEndpoint(path, base) // Generate url
  };

  // Pass url parameters if get
  if (method === 'get') {
    options.qs = params;
  }

  // Pass form data if post
  if (method === 'post') {
    var formKey = 'form';

    if (typeof params.media !== 'undefined') {
      formKey = 'formData';
    }
    options[formKey] = params;
  }

  // Promisified version
  if (promise) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      _this.request(options, function(error, response, data) {
        // request error
        if (error) {
          return reject(error);
        }

        // JSON parse error or empty strings
        try {
          // An empty string is a valid response
          if (data === '') {
            data = {};
          }
          else {
            data = JSON.parse(data);
          }
        }
        catch(parseError) {
          return reject(new Error('JSON parseError with HTTP Status: ' + response.statusCode + ' ' + response.statusMessage));
        }

        // response object errors
        // This should return an error object not an array of errors
        if (data.errors !== undefined) {
          return reject(data.errors);
        }

        // status code errors
        if(response.statusCode < 200 || response.statusCode > 299) {
          return reject(new Error('HTTP Error: ' + response.statusCode + ' ' + response.statusMessage));
        }

        // no errors
        resolve(data);
      });
    });
  }

  // Callback version
  this.request(options, function(error, response, data) {
    // request error
    if (error) {
      return callback(error, data, response);
    }

    // JSON parse error or empty strings
    try {
      // An empty string is a valid response
      if (data === '') {
        data = {};
      }
      else {
        data = JSON.parse(data);
      }
    }
    catch(parseError) {
      return callback(
        new Error('JSON parseError with HTTP Status: ' + response.statusCode + ' ' + response.statusMessage),
        data,
        response
      );
    }


    // response object errors
    // This should return an error object not an array of errors
    if (data.errors !== undefined) {
      return callback(data.errors, data, response);
    }

    // status code errors
    if(response.statusCode < 200 || response.statusCode > 299) {
      return callback(
        new Error('HTTP Error: ' + response.statusCode + ' ' + response.statusMessage),
        data,
        response
      );
    }
    // no errors
    callback(null, data, response);
  });

};

/**
 * GET
 */
Twitter.prototype.get = function(url, params, callback) {
  return this.__request('get', url, params, callback);
};

/**
 * POST
 */
Twitter.prototype.post = function(url, params, callback) {
  return this.__request('post', url, params, callback);
};

/**
 * STREAM
 */
Twitter.prototype.stream = function(method, params, callback) {
  if (typeof params === 'function') {
    callback = params;
    params = {};
  }

  var base = 'stream';

  if (method === 'user' || method === 'site') {
    base = method + '_' + base;
  }

  var url = this.__buildEndpoint(method, base);
  var request = this.request({url: url, qs: params});
  var stream = new Streamparser();

  stream.destroy = function() {
    // FIXME: should we emit end/close on explicit destroy?
    if ( typeof request.abort === 'function' ) {
      request.abort(); // node v0.4.0
    }
    else {
      request.socket.destroy();
    }
  };

  request.on('response', function(response) {
    if(response.statusCode !== 200) {
      stream.emit('error', new Error('Status Code: ' + response.statusCode));
    }
    else {
      stream.emit('response', response);
    }

    response.on('data', function(chunk) {
      stream.receive(chunk);
    });

    response.on('error', function(error) {
      stream.emit('error', error);
    });

    response.on('end', function() {
      stream.emit('end', response);
    });
  });

  request.on('error', function(error) {
    stream.emit('error', error);
  });
  request.end();

  if (typeof callback === 'function') {
    callback(stream);
  }
  else {
    return stream;
  }
};


module.exports = Twitter;


/***/ }),

/***/ "./node_modules/Twitter/package.json":
/***/ (function(module, exports) {

module.exports = {"name":"twitter","version":"1.7.1","description":"Twitter API client library for node.js","license":"MIT","keywords":["twitter","streaming","oauth"],"homepage":"https://github.com/desmondmorris/node-twitter","author":"Desmond Morris <hi@desmondmorris.com>","repository":{"type":"git","url":"https://github.com/desmondmorris/node-twitter"},"scripts":{"test":"npm run lint && mocha","lint":"./node_modules/.bin/eslint test/*.js lib/*.js"},"dependencies":{"deep-extend":"^0.5.0","request":"^2.72.0"},"devDependencies":{"eslint":"^3.12.0","mocha":"^3.2.0","nock":"^9.0.2"},"main":"./lib/twitter"}

/***/ }),

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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TweetWidget, {
        tweetId: tweet.twid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Tweet_css___default.a)(Tweet));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy8wLjRhODk2NzExODcyYjJjZWY1ODNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9ub2RlX21vZHVsZXMvVHdpdHRlci9saWIvcGFyc2VyLmpzIiwiL1VzZXJzL2p4bS9Eb3dubG9hZHMvTXlQbGFuZXRHaXJsR3VpZGVzL25vZGVfbW9kdWxlcy9Ud2l0dGVyL2xpYi90d2l0dGVyLmpzIiwiL1VzZXJzL2p4bS9Eb3dubG9hZHMvTXlQbGFuZXRHaXJsR3VpZGVzL25vZGVfbW9kdWxlcy9Ud2l0dGVyL3BhY2thZ2UuanNvbiIsIi9Vc2Vycy9qeG0vRG93bmxvYWRzL015UGxhbmV0R2lybEd1aWRlcy9zcmMvcm91dGVzL3R3aXR0ZXIvVHdlZXQvVHdlZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBnbG9yaW91cyBzdHJlYW1pbmcganNvbiBwYXJzZXIsIGJ1aWx0IHNwZWNpZmljYWxseSBmb3IgdGhlIHR3aXR0ZXIgc3RyZWFtaW5nIGFwaVxuLy8gYXNzdW1wdGlvbnM6XG4vLyAgIDEpIG5pbmphcyBhcmUgbWFtbWFsc1xuLy8gICAyKSB0d2VldHMgY29tZSBpbiBjaHVua3Mgb2YgdGV4dCwgc3Vycm91bmRlZCBieSB7fSdzLCBzZXBhcmF0ZWQgYnkgbGluZSBicmVha3Ncbi8vICAgMykgb25seSBvbmUgdHdlZXQgcGVyIGNodW5rXG4vL1xuLy8gICBwID0gbmV3IHBhcnNlci5pbnN0YW5jZSgpXG4vLyAgIHAuYWRkTGlzdGVuZXIoJ29iamVjdCcsIGZ1bmN0aW9uLi4uKVxuLy8gICBwLnJlY2VpdmUoZGF0YSlcbi8vICAgcC5yZWNlaXZlKGRhdGEpXG4vLyAgIC4uLlxuXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuXG52YXIgUGFyc2VyID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBQYXJzZXIoKSB7XG4gIC8vIE1ha2Ugc3VyZSB3ZSBjYWxsIG91ciBwYXJlbnRzIGNvbnN0cnVjdG9yXG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLmJ1ZmZlciA9ICcnO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8vIFRoZSBwYXJzZXIgZW1pdHMgZXZlbnRzIVxuUGFyc2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSk7XG5cblBhcnNlci5FTkQgICAgICAgID0gJ1xcclxcbic7XG5QYXJzZXIuRU5EX0xFTkdUSCA9IDI7XG5cblBhcnNlci5wcm90b3R5cGUucmVjZWl2ZSA9IGZ1bmN0aW9uIHJlY2VpdmUoYnVmZmVyKSB7XG4gIHRoaXMuYnVmZmVyICs9IGJ1ZmZlci50b1N0cmluZygndXRmOCcpO1xuICB2YXIgaW5kZXgsIGpzb247XG5cbiAgLy8gV2UgaGF2ZSBFTkQ/XG4gIHdoaWxlICgoaW5kZXggPSB0aGlzLmJ1ZmZlci5pbmRleE9mKFBhcnNlci5FTkQpKSA+IC0xKSB7XG4gICAganNvbiA9IHRoaXMuYnVmZmVyLnNsaWNlKDAsIGluZGV4KTtcbiAgICB0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLnNsaWNlKGluZGV4ICsgUGFyc2VyLkVORF9MRU5HVEgpO1xuICAgIGlmIChqc29uLmxlbmd0aCA+IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICAvLyBFdmVudCBtZXNzYWdlXG4gICAgICAgIGlmIChqc29uLmV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBGaXJzdCBlbWl0IHNwZWNpZmljIGV2ZW50XG4gICAgICAgICAgdGhpcy5lbWl0KGpzb24uZXZlbnQsIGpzb24pO1xuICAgICAgICAgIC8vIE5vdyBlbWl0IGNhdGNoLWFsbCBldmVudFxuICAgICAgICAgIHRoaXMuZW1pdCgnZXZlbnQnLCBqc29uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEZWxldGUgbWVzc2FnZVxuICAgICAgICBlbHNlIGlmIChqc29uLmRlbGV0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KCdkZWxldGUnLCBqc29uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGcmllbmRzIG1lc3NhZ2UgKGJlZ2lubmluZyBvZiBzdHJlYW0pXG4gICAgICAgIGVsc2UgaWYgKGpzb24uZnJpZW5kcyAhPT0gdW5kZWZpbmVkIHx8IGpzb24uZnJpZW5kc19zdHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuZW1pdCgnZnJpZW5kcycsIGpzb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFueSBvdGhlciBtZXNzYWdlXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuZW1pdCgnZGF0YScsIGpzb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3Iuc291cmNlID0ganNvbjtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBLZWVwIEFsaXZlXG4gICAgICB0aGlzLmVtaXQoJ3BpbmcnKTtcbiAgICB9XG4gIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9Ud2l0dGVyL2xpYi9wYXJzZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL1R3aXR0ZXIvbGliL3BhcnNlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llc1xuICovXG5cbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbnZhciBTdHJlYW1wYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcicpO1xudmFyIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZGVlcC1leHRlbmQnKTtcblxuLy8gUGFja2FnZSB2ZXJzaW9uXG52YXIgVkVSU0lPTiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG5cbmZ1bmN0aW9uIFR3aXR0ZXIob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHdpdHRlcikpIHsgcmV0dXJuIG5ldyBUd2l0dGVyKG9wdGlvbnMpIH1cblxuICB0aGlzLlZFUlNJT04gPSBWRVJTSU9OO1xuXG4gIC8vIE1lcmdlIHRoZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCB0aGUgY2xpZW50IHN1Ym1pdHRlZCBvcHRpb25zXG4gIHRoaXMub3B0aW9ucyA9IGV4dGVuZCh7XG4gICAgY29uc3VtZXJfa2V5OiBudWxsLFxuICAgIGNvbnN1bWVyX3NlY3JldDogbnVsbCxcbiAgICBhY2Nlc3NfdG9rZW5fa2V5OiBudWxsLFxuICAgIGFjY2Vzc190b2tlbl9zZWNyZXQ6IG51bGwsXG4gICAgYmVhcmVyX3Rva2VuOiBudWxsLFxuICAgIHJlc3RfYmFzZTogJ2h0dHBzOi8vYXBpLnR3aXR0ZXIuY29tLzEuMScsXG4gICAgc3RyZWFtX2Jhc2U6ICdodHRwczovL3N0cmVhbS50d2l0dGVyLmNvbS8xLjEnLFxuICAgIHVzZXJfc3RyZWFtX2Jhc2U6ICdodHRwczovL3VzZXJzdHJlYW0udHdpdHRlci5jb20vMS4xJyxcbiAgICBzaXRlX3N0cmVhbV9iYXNlOiAnaHR0cHM6Ly9zaXRlc3RyZWFtLnR3aXR0ZXIuY29tLzEuMScsXG4gICAgbWVkaWFfYmFzZTogJ2h0dHBzOi8vdXBsb2FkLnR3aXR0ZXIuY29tLzEuMScsXG4gICAgcmVxdWVzdF9vcHRpb25zOiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogJyovKicsXG4gICAgICAgIENvbm5lY3Rpb246ICdjbG9zZScsXG4gICAgICAgICdVc2VyLUFnZW50JzogJ25vZGUtdHdpdHRlci8nICsgVkVSU0lPTlxuICAgICAgfVxuICAgIH1cbiAgfSwgb3B0aW9ucyk7XG5cbiAgLy8gRGVmYXVsdCB0byB1c2VyIGF1dGhlbnRpY2F0aW9uXG4gIHZhciBhdXRoZW50aWNhdGlvbl9vcHRpb25zID0ge1xuICAgIG9hdXRoOiB7XG4gICAgICBjb25zdW1lcl9rZXk6IHRoaXMub3B0aW9ucy5jb25zdW1lcl9rZXksXG4gICAgICBjb25zdW1lcl9zZWNyZXQ6IHRoaXMub3B0aW9ucy5jb25zdW1lcl9zZWNyZXQsXG4gICAgICB0b2tlbjogdGhpcy5vcHRpb25zLmFjY2Vzc190b2tlbl9rZXksXG4gICAgICB0b2tlbl9zZWNyZXQ6IHRoaXMub3B0aW9ucy5hY2Nlc3NfdG9rZW5fc2VjcmV0XG4gICAgfVxuICB9O1xuXG4gIC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBhcmUgZ29pbmcgdG8gdXNlIFVzZXIgQXV0aGVudGljYXRpb24gb3IgQXBwbGljYXRpb24gQXV0aGV0aWNhdGlvblxuICBpZiAodGhpcy5vcHRpb25zLmJlYXJlcl90b2tlbikge1xuICAgIGF1dGhlbnRpY2F0aW9uX29wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRoaXMub3B0aW9ucy5iZWFyZXJfdG9rZW5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ29uZmlndXJlIGRlZmF1bHQgcmVxdWVzdCBvcHRpb25zXG4gIHRoaXMucmVxdWVzdCA9IHJlcXVlc3QuZGVmYXVsdHMoXG4gICAgZXh0ZW5kKFxuICAgICAgdGhpcy5vcHRpb25zLnJlcXVlc3Rfb3B0aW9ucyxcbiAgICAgIGF1dGhlbnRpY2F0aW9uX29wdGlvbnNcbiAgICApXG4gICk7XG5cbiAgLy8gQ2hlY2sgaWYgUHJvbWlzZSBwcmVzZW50XG4gIHRoaXMuYWxsb3dfcHJvbWlzZSA9ICh0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5cblR3aXR0ZXIucHJvdG90eXBlLl9fYnVpbGRFbmRwb2ludCA9IGZ1bmN0aW9uKHBhdGgsIGJhc2UpIHtcbiAgdmFyIGJhc2VzID0ge1xuICAgICdyZXN0JzogdGhpcy5vcHRpb25zLnJlc3RfYmFzZSxcbiAgICAnc3RyZWFtJzogdGhpcy5vcHRpb25zLnN0cmVhbV9iYXNlLFxuICAgICd1c2VyX3N0cmVhbSc6IHRoaXMub3B0aW9ucy51c2VyX3N0cmVhbV9iYXNlLFxuICAgICdzaXRlX3N0cmVhbSc6IHRoaXMub3B0aW9ucy5zaXRlX3N0cmVhbV9iYXNlLFxuICAgICdtZWRpYSc6IHRoaXMub3B0aW9ucy5tZWRpYV9iYXNlXG4gIH07XG4gIHZhciBlbmRwb2ludCA9IChiYXNlcy5oYXNPd25Qcm9wZXJ0eShiYXNlKSkgPyBiYXNlc1tiYXNlXSA6IGJhc2VzLnJlc3Q7XG4gIC8vIGlmIGZ1bGwgdXJsIGlzIHNwZWNpZmllZCB3ZSB1c2UgdGhhdFxuICB2YXIgaXNGdWxsVXJsID0gKHVybC5wYXJzZShwYXRoKS5wcm90b2NvbCAhPT0gbnVsbCk7XG4gIGlmIChpc0Z1bGxVcmwpIHtcbiAgICBlbmRwb2ludCA9IHBhdGg7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gSWYgdGhlIHBhdGggYmVnaW5zIHdpdGggbWVkaWEgb3IgL21lZGlhXG4gICAgaWYgKHBhdGgubWF0Y2goL14oXFwvKT9tZWRpYS8pKSB7XG4gICAgICBlbmRwb2ludCA9IGJhc2VzLm1lZGlhO1xuICAgIH1cbiAgICBlbmRwb2ludCArPSAocGF0aC5jaGFyQXQoMCkgPT09ICcvJykgPyBwYXRoIDogJy8nICsgcGF0aDtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICBlbmRwb2ludCA9IGVuZHBvaW50LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgaWYoIWlzRnVsbFVybCkge1xuICAgIC8vIEFkZCBqc29uIGV4dGVuc2lvbiBpZiBub3QgcHJvdmlkZWQgaW4gY2FsbC4uLiBvbmx5IGlmIGEgZnVsbCB1cmwgaXMgbm90IHNwZWNpZmllZFxuICAgIGVuZHBvaW50ICs9IChwYXRoLnNwbGl0KCcuJykucG9wKCkgIT09ICdqc29uJykgPyAnLmpzb24nIDogJyc7XG4gIH1cblxuICByZXR1cm4gZW5kcG9pbnQ7XG59O1xuXG5Ud2l0dGVyLnByb3RvdHlwZS5fX3JlcXVlc3QgPSBmdW5jdGlvbihtZXRob2QsIHBhdGgsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgdmFyIGJhc2UgPSAncmVzdCcsIHByb21pc2UgPSBmYWxzZTtcblxuICAvLyBTZXQgdGhlIGNhbGxiYWNrIGlmIG5vIHBhcmFtcyBhcmUgcGFzc2VkXG4gIGlmICh0eXBlb2YgcGFyYW1zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBwYXJhbXM7XG4gICAgcGFyYW1zID0ge307XG4gIH1cbiAgLy8gUmV0dXJuIHByb21pc2UgaWYgbm8gY2FsbGJhY2sgaXMgcGFzc2VkIGFuZCBwcm9taXNlcyBhdmFpbGFibGVcbiAgZWxzZSBpZiAoY2FsbGJhY2sgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFsbG93X3Byb21pc2UpIHtcbiAgICBwcm9taXNlID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIFNldCBBUEkgYmFzZVxuICBpZiAodHlwZW9mIHBhcmFtcy5iYXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGJhc2UgPSBwYXJhbXMuYmFzZTtcbiAgICBkZWxldGUgcGFyYW1zLmJhc2U7XG4gIH1cblxuICAvLyBCdWlsZCB0aGUgb3B0aW9ucyB0byBwYXNzIHRvIG91ciBjdXN0b20gcmVxdWVzdCBvYmplY3RcbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiBtZXRob2QudG9Mb3dlckNhc2UoKSwgIC8vIFJlcXVlc3QgbWV0aG9kIC0gZ2V0IHx8IHBvc3RcbiAgICB1cmw6IHRoaXMuX19idWlsZEVuZHBvaW50KHBhdGgsIGJhc2UpIC8vIEdlbmVyYXRlIHVybFxuICB9O1xuXG4gIC8vIFBhc3MgdXJsIHBhcmFtZXRlcnMgaWYgZ2V0XG4gIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XG4gICAgb3B0aW9ucy5xcyA9IHBhcmFtcztcbiAgfVxuXG4gIC8vIFBhc3MgZm9ybSBkYXRhIGlmIHBvc3RcbiAgaWYgKG1ldGhvZCA9PT0gJ3Bvc3QnKSB7XG4gICAgdmFyIGZvcm1LZXkgPSAnZm9ybSc7XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5tZWRpYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvcm1LZXkgPSAnZm9ybURhdGEnO1xuICAgIH1cbiAgICBvcHRpb25zW2Zvcm1LZXldID0gcGFyYW1zO1xuICB9XG5cbiAgLy8gUHJvbWlzaWZpZWQgdmVyc2lvblxuICBpZiAocHJvbWlzZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3RoaXMucmVxdWVzdChvcHRpb25zLCBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UsIGRhdGEpIHtcbiAgICAgICAgLy8gcmVxdWVzdCBlcnJvclxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT04gcGFyc2UgZXJyb3Igb3IgZW1wdHkgc3RyaW5nc1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEFuIGVtcHR5IHN0cmluZyBpcyBhIHZhbGlkIHJlc3BvbnNlXG4gICAgICAgICAgaWYgKGRhdGEgPT09ICcnKSB7XG4gICAgICAgICAgICBkYXRhID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcignSlNPTiBwYXJzZUVycm9yIHdpdGggSFRUUCBTdGF0dXM6ICcgKyByZXNwb25zZS5zdGF0dXNDb2RlICsgJyAnICsgcmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzcG9uc2Ugb2JqZWN0IGVycm9yc1xuICAgICAgICAvLyBUaGlzIHNob3VsZCByZXR1cm4gYW4gZXJyb3Igb2JqZWN0IG5vdCBhbiBhcnJheSBvZiBlcnJvcnNcbiAgICAgICAgaWYgKGRhdGEuZXJyb3JzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGRhdGEuZXJyb3JzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0YXR1cyBjb2RlIGVycm9yc1xuICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlIDwgMjAwIHx8IHJlc3BvbnNlLnN0YXR1c0NvZGUgPiAyOTkpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcignSFRUUCBFcnJvcjogJyArIHJlc3BvbnNlLnN0YXR1c0NvZGUgKyAnICcgKyByZXNwb25zZS5zdGF0dXNNZXNzYWdlKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBubyBlcnJvcnNcbiAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gQ2FsbGJhY2sgdmVyc2lvblxuICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlLCBkYXRhKSB7XG4gICAgLy8gcmVxdWVzdCBlcnJvclxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCBkYXRhLCByZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLy8gSlNPTiBwYXJzZSBlcnJvciBvciBlbXB0eSBzdHJpbmdzXG4gICAgdHJ5IHtcbiAgICAgIC8vIEFuIGVtcHR5IHN0cmluZyBpcyBhIHZhbGlkIHJlc3BvbnNlXG4gICAgICBpZiAoZGF0YSA9PT0gJycpIHtcbiAgICAgICAgZGF0YSA9IHt9O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChwYXJzZUVycm9yKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soXG4gICAgICAgIG5ldyBFcnJvcignSlNPTiBwYXJzZUVycm9yIHdpdGggSFRUUCBTdGF0dXM6ICcgKyByZXNwb25zZS5zdGF0dXNDb2RlICsgJyAnICsgcmVzcG9uc2Uuc3RhdHVzTWVzc2FnZSksXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlc3BvbnNlXG4gICAgICApO1xuICAgIH1cblxuXG4gICAgLy8gcmVzcG9uc2Ugb2JqZWN0IGVycm9yc1xuICAgIC8vIFRoaXMgc2hvdWxkIHJldHVybiBhbiBlcnJvciBvYmplY3Qgbm90IGFuIGFycmF5IG9mIGVycm9yc1xuICAgIGlmIChkYXRhLmVycm9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZGF0YS5lcnJvcnMsIGRhdGEsIHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICAvLyBzdGF0dXMgY29kZSBlcnJvcnNcbiAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlIDwgMjAwIHx8IHJlc3BvbnNlLnN0YXR1c0NvZGUgPiAyOTkpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhcbiAgICAgICAgbmV3IEVycm9yKCdIVFRQIEVycm9yOiAnICsgcmVzcG9uc2Uuc3RhdHVzQ29kZSArICcgJyArIHJlc3BvbnNlLnN0YXR1c01lc3NhZ2UpLFxuICAgICAgICBkYXRhLFxuICAgICAgICByZXNwb25zZVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gbm8gZXJyb3JzXG4gICAgY2FsbGJhY2sobnVsbCwgZGF0YSwgcmVzcG9uc2UpO1xuICB9KTtcblxufTtcblxuLyoqXG4gKiBHRVRcbiAqL1xuVHdpdHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGlzLl9fcmVxdWVzdCgnZ2V0JywgdXJsLCBwYXJhbXMsIGNhbGxiYWNrKTtcbn07XG5cbi8qKlxuICogUE9TVFxuICovXG5Ud2l0dGVyLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24odXJsLCBwYXJhbXMsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGlzLl9fcmVxdWVzdCgncG9zdCcsIHVybCwgcGFyYW1zLCBjYWxsYmFjayk7XG59O1xuXG4vKipcbiAqIFNUUkVBTVxuICovXG5Ud2l0dGVyLnByb3RvdHlwZS5zdHJlYW0gPSBmdW5jdGlvbihtZXRob2QsIHBhcmFtcywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHBhcmFtcztcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuXG4gIHZhciBiYXNlID0gJ3N0cmVhbSc7XG5cbiAgaWYgKG1ldGhvZCA9PT0gJ3VzZXInIHx8IG1ldGhvZCA9PT0gJ3NpdGUnKSB7XG4gICAgYmFzZSA9IG1ldGhvZCArICdfJyArIGJhc2U7XG4gIH1cblxuICB2YXIgdXJsID0gdGhpcy5fX2J1aWxkRW5kcG9pbnQobWV0aG9kLCBiYXNlKTtcbiAgdmFyIHJlcXVlc3QgPSB0aGlzLnJlcXVlc3Qoe3VybDogdXJsLCBxczogcGFyYW1zfSk7XG4gIHZhciBzdHJlYW0gPSBuZXcgU3RyZWFtcGFyc2VyKCk7XG5cbiAgc3RyZWFtLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBGSVhNRTogc2hvdWxkIHdlIGVtaXQgZW5kL2Nsb3NlIG9uIGV4cGxpY2l0IGRlc3Ryb3k/XG4gICAgaWYgKCB0eXBlb2YgcmVxdWVzdC5hYm9ydCA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIHJlcXVlc3QuYWJvcnQoKTsgLy8gbm9kZSB2MC40LjBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXF1ZXN0LnNvY2tldC5kZXN0cm95KCk7XG4gICAgfVxuICB9O1xuXG4gIHJlcXVlc3Qub24oJ3Jlc3BvbnNlJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignU3RhdHVzIENvZGU6ICcgKyByZXNwb25zZS5zdGF0dXNDb2RlKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc3RyZWFtLmVtaXQoJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJlc3BvbnNlLm9uKCdkYXRhJywgZnVuY3Rpb24oY2h1bmspIHtcbiAgICAgIHN0cmVhbS5yZWNlaXZlKGNodW5rKTtcbiAgICB9KTtcblxuICAgIHJlc3BvbnNlLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgfSk7XG5cbiAgICByZXNwb25zZS5vbignZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICBzdHJlYW0uZW1pdCgnZW5kJywgcmVzcG9uc2UpO1xuICAgIH0pO1xuICB9KTtcblxuICByZXF1ZXN0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICB9KTtcbiAgcmVxdWVzdC5lbmQoKTtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2soc3RyZWFtKTtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gc3RyZWFtO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gVHdpdHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL1R3aXR0ZXIvbGliL3R3aXR0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL1R3aXR0ZXIvbGliL3R3aXR0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJuYW1lXCI6XCJ0d2l0dGVyXCIsXCJ2ZXJzaW9uXCI6XCIxLjcuMVwiLFwiZGVzY3JpcHRpb25cIjpcIlR3aXR0ZXIgQVBJIGNsaWVudCBsaWJyYXJ5IGZvciBub2RlLmpzXCIsXCJsaWNlbnNlXCI6XCJNSVRcIixcImtleXdvcmRzXCI6W1widHdpdHRlclwiLFwic3RyZWFtaW5nXCIsXCJvYXV0aFwiXSxcImhvbWVwYWdlXCI6XCJodHRwczovL2dpdGh1Yi5jb20vZGVzbW9uZG1vcnJpcy9ub2RlLXR3aXR0ZXJcIixcImF1dGhvclwiOlwiRGVzbW9uZCBNb3JyaXMgPGhpQGRlc21vbmRtb3JyaXMuY29tPlwiLFwicmVwb3NpdG9yeVwiOntcInR5cGVcIjpcImdpdFwiLFwidXJsXCI6XCJodHRwczovL2dpdGh1Yi5jb20vZGVzbW9uZG1vcnJpcy9ub2RlLXR3aXR0ZXJcIn0sXCJzY3JpcHRzXCI6e1widGVzdFwiOlwibnBtIHJ1biBsaW50ICYmIG1vY2hhXCIsXCJsaW50XCI6XCIuL25vZGVfbW9kdWxlcy8uYmluL2VzbGludCB0ZXN0LyouanMgbGliLyouanNcIn0sXCJkZXBlbmRlbmNpZXNcIjp7XCJkZWVwLWV4dGVuZFwiOlwiXjAuNS4wXCIsXCJyZXF1ZXN0XCI6XCJeMi43Mi4wXCJ9LFwiZGV2RGVwZW5kZW5jaWVzXCI6e1wiZXNsaW50XCI6XCJeMy4xMi4wXCIsXCJtb2NoYVwiOlwiXjMuMi4wXCIsXCJub2NrXCI6XCJeOS4wLjJcIn0sXCJtYWluXCI6XCIuL2xpYi90d2l0dGVyXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvVHdpdHRlci9wYWNrYWdlLmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL1R3aXR0ZXIvcGFja2FnZS5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvd2l0aFN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL1R3ZWV0LmNzcyc7XG4vLyBpbXBvcnQgeyBUd2VldCB9IGZyb20gJ3JlYWN0LXR3aXR0ZXItd2lkZ2V0cyc7XG4vLyB2YXIgVHdlZXRXaWRnZXQgPSByZXF1aXJlKCdyZWFjdC10d2l0dGVyLXdpZGdldHMnKS5Ud2VldFxudmFyIHR3ID0gcmVxdWlyZSgnVHdpdHRlcicpO1xuXG5jbGFzcyBUd2VldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHR3ZWV0ID0gdGhpcy5wcm9wcy50d2VldDtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPGxpIGNsYXNzTmFtZT17XCJ0d2VldFwiICsgKHR3ZWV0LmFjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnKX0+XG4gICAgICAvLyAgIDxpbWcgc3JjPXt0d2VldC5hdmF0YXJ9IGNsYXNzTmFtZT1cImF2YXRhclwiLz5cbiAgICAgIC8vICAgPGJsb2NrcXVvdGU+XG4gICAgICAvLyAgICAgPGNpdGU+XG4gICAgICAvLyAgICAgICA8YSBocmVmPXtcImh0dHA6Ly93d3cudHdpdHRlci5jb20vXCIgKyB0d2VldC5zY3JlZW5uYW1lfT57dHdlZXQuYXV0aG9yfTwvYT5cbiAgICAgIC8vICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5zY3JlZW5uYW1lfT5Ae3R3ZWV0LnNjcmVlbm5hbWV9PC9zcGFuPlxuICAgICAgLy8gICAgIDwvY2l0ZT5cbiAgICAgIC8vICAgICA8c3BhbiBjbGFzc05hbWU9e3MuY29udGVudH0+e3R3ZWV0LmJvZHl9PC9zcGFuPlxuICAgICAgLy8gICA8L2Jsb2NrcXVvdGU+XG4gICAgICAvLyA8L2xpPlxuICAgICAgPFR3ZWV0V2lkZ2V0XG4gICAgICAgIHR3ZWV0SWQ9e3R3ZWV0LnR3aWR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzKShUd2VldCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy90d2l0dGVyL1R3ZWV0L1R3ZWV0LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDclRBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWVBO0FBdEJBO0FBQ0E7QUF3QkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
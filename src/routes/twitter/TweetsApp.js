/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Tweets from './Tweets'

class TweetsApp extends React.Component {

  showNewTweets() {

    // Retrieve the current application state
    let updated = this.state.tweets;

    updated


  }

  componentDidMount() {
    let self = this;
    let socket = io.connect();
    socket.on('tweet', function (data) {
      self.addTweet(data);
    });
    // window.addEventListener('scroll', this.checkWindowScroll);
  }

  constructor(props) {
    super(props);
    this.state = {
      tweets: props.tweets,
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        YUUUR
      </div>
    );
  }
}

export default TweetsApp;

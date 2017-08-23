/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {connect} from 'react-redux';
import StringList from '../StringList/StringList'
import TwitterSelector from '../DomainSelector/TwitterSelector'
import axios from 'axios';

class TweetFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      includedWords: [],
      tweets: [],
      filteredTweets: []
    };
    this.getWords = this.getWords.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.filter = this.filter.bind(this);
  }

  getWords(words) {
    this.setState({
      includedWords: words
    });
  }

  getTweets() {
    let self = this
    axios.get(`/page/${this.state.page}/${this.state.skip}`).then(function(response) {
      console.log(response.data);
      self.setState({tweets: response.data});
    }).catch(function(error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTweets();
  }

  filter() {
    const tweets = this.state.tweets.filter((tweet) => {
      if (this.state.includedWords.length>0) {
        for (var i=0; i<this.state.includedWords.length; i++) {
          if (tweet.body.toLowerCase().includes(this.state.includedWords[i].toLowerCase())) {
            return true;
          }
        }
        return false;
      }
      return true;
    });
    this.setState({
      filteredTweets:tweets
    });
  }

  render() {
    console.log('filteredTweets:',this.state.filteredTweets);
    return (
      <div>
        <StringList returnList={this.getWords}/>
        <TwitterSelector />
        <button onClick={this.filter}>Go!</button>
      </div>
    );
  }
}

export default TweetFilter;

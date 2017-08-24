/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import StringList from '../StringList/StringList';
import TwitterSelector from '../DomainSelector/TwitterSelector';
import Tweets from '../../twitter/Tweets/Tweets';

import axios from 'axios';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TweetFilter.css';

class TweetFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      includedWords: [],
      includedUsers: [],
      includedHastags: [],
      tweets: [],
      filteredTweets: [],
    };
    this.getWords = this.getWords.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getHashtags = this.getHashtags.bind(this);
    this.getTweets = this.getTweets.bind(this);
    this.filter = this.filter.bind(this);
  }

  getWords(words) {
    this.setState({
      includedWords: words,
    });
  }

  getUsers(users) {
    this.setState({
      includedUsers: users,
    });
  }

  getHashtags(hashtags) {
    this.setState({
      includedHastags: hashtags,
    });
  }

  getTweets() {
    const self = this;
    axios.get(`/page/${this.state.page}/${this.state.skip}`).then((response) => {
      console.log(response.data);
      self.setState({ tweets: response.data });
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTweets();
  }

  filter() {
    const tweets = this.state.tweets.filter((tweet) => {
      let words = false;
      if (this.state.includedWords.length > 0) {
        for (var i = 0; i < this.state.includedWords.length; i++) {
          if (tweet.body.toLowerCase().includes(this.state.includedWords[i].toLowerCase())) {
            words = true;
            break;
          }
        }
      } else {
        words = true;
      }

      let users = false;
      if (this.state.includedUsers.length > 0) {
        for (var i = 0; i < this.state.includedUsers.length; i++) {
          if (tweet.screenname.toLowerCase() === this.state.includedUsers[i].toLowerCase()) {
            users = true;
            break;
          }
        }
      } else {
        users = true;
      }

      let hashtags = false;
      if (this.state.includedHastags.length > 0) {
        for (var i = 0; i < this.state.includedHastags.length; i++) {
          if (tweet.body.toLowerCase().includes(`#${this.state.includedHastags[i].toLowerCase()}`)) {
            hashtags = true;
            break;
          }
        }
      } else {
        hashtags = true;
      }

      return (users && words && hashtags);
    });
    this.setState({
      filteredTweets: tweets,
    });
  }

  render() {
    console.log('filteredTweets:', this.state.filteredTweets);
    console.log('tweets:', this.state.tweets);
    return (
      <div className={s.root}>
        <div className={s.params}>
          <div className={s.searches}>
            <StringList returnList={this.getWords} />
            <TwitterSelector returnUsers={this.getUsers} returnHashtags={this.getHashtags} />
          </div>
          <button className={s.button} onClick={this.filter}>Find Tweets</button>
        </div>
        <div className={s.tweets}>
          <Tweets tweets={this.state.filteredTweets} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TweetFilter);

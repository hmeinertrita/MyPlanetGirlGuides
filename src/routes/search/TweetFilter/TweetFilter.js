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
import ToneBox from '../../tone-analysis/ToneBox/ToneBox';

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
      utterances: [],
      filteredTweets: [],
      averageTones: []
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
      self.setState({ tweets: response.data.tweets });
    }).catch((error) => {
      console.log(error);
    });
  }

  getUtterances() {
    const self = this;
    axios.get(`/page/${this.state.page}/${this.state.skip}`).then((response) => {
      console.log(response.data);
      self.setState({ utterances: response.data.utterancesTone.utterances_tone });
    }).catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getTweets();
    this.getUtterances();
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

    const utterances=tweets.map((tweet) => {
      return this.state.utterances[this.state.tweets.indexOf(tweet)];
    });

    let tones=[];

    for (var i=0;i<utterances.length;i++) {
      for (var j=0;j<utterances[i].tones.length;j++) {
        let idx=-1;
        for (var k=0;k<tones.length;k++) {
          if (tones[k].tone_name === utterances[i].tones[j].tone_name) {
            idx=k;

            break;
          }
        }

        if (idx !== -1) {
          tones[idx].scores.push(utterances[i].tones[j].score);
        }
        else {
          tones.push({
            tone_name: utterances[i].tones[j].tone_name,
            scores: [utterances[i].tones[j].score]
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

    this.setState({
      filteredTweets: tweets,
      averageTones: averageTones
    });
  }

  render() {
    console.log('tweet filter state',this.state);
    return (
      <div className={s.root}>
        <div className={s.params}>
          <div className={s.searches}>
            <StringList returnList={this.getWords} />
            <TwitterSelector returnUsers={this.getUsers} returnHashtags={this.getHashtags} />
          </div>
          <button className={s.button} onClick={this.filter}>Find Tweets</button>
        </div>
        <div className={s.utterances}>
          <ToneBox utterances={this.state.averageTones} />
        </div>
        <div className={s.tweets}>
          <Tweets tweets={this.state.filteredTweets} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TweetFilter);

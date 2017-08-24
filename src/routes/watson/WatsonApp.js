/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Utterances from './Utterances/Utterances';
import axios from 'axios';

class WatsonApp extends React.Component {

// -----------------------------------------
// TEST CODE FOR TWEETS
// -----------------------------------------

  // addTweet(tweet) {
  //   let updated = this.state.tweets;
  //   let count = this.state.count + 1;
  //   let skip = this.state.skip + 1;
  //   updated.unshift(tweet);
  //   this.setState({tweets: updated, count: count, skip: skip});
  // }
  //
  // showNewTweets() {
  //   // Retrieve the current application state
  //   let updated = this.state.tweets;
  //   updated.forEach(function(tweet){
  //     tweet.active = true;
  //   });
  //   this.setState({tweets: updated, count: 0});
  // }
  //
  // loadPagedTweets(tweets) {
  //   let self = this;
  //   if(tweets.length > 0) {
  //     let updated = this.state.tweets;
  //     tweets.forEach(function(tweet){
  //       updated.push(tweet);
  //     });
  //     setTimeout(function(){
  //       self.setState({tweets:updated, paging: false});
  //     }, 1000);
  //   } else {
  //     this.setState({done: true, paging: false});
  //   }
  // }

  //   checkWindowScroll(){
  //
  //   // Get scroll pos & window data
  //   var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  //   var s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
  //   var scrolled = (h + s) > document.body.offsetHeight;
  //
  //   // If scrolled enough, not currently paging and not complete...
  //   if(scrolled && !this.state.paging && !this.state.done) {
  //
  //     // Set application state (Paging, Increment page)
  //     this.setState({paging: true, page: this.state.page + 1});
  //
  //     // Get the next page of tweets from the server
  //     this.getPage(this.state.page);
  //
  //   }
  // }

  // Axios get request to hit the API
  getPage() {
    let self = this
    axios.get(`/page/${this.state.page}/${this.state.skip}`).then(function(response) {
      // return response.data;
      // console.log('response data', response.data);
      // }.then(function(response.data) {
      self.setState({
        tweets: response.data.tweets,
        utterances_tone: response.data.utterancesTone.utterances_tone
      });
      // });
    }).catch(function(error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getPage()
  }

  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      utterances_tone: [],
      count: 0,
      page: 0,
      paging: false,
      skip: 0,
      done: false
    };
  }

  render() {
    console.log('Watson APP State', this.state);
    return (
      <div>
        <Utterances utterances_tone={this.state.utterances_tone}/>
      </div>
    );
  }
}

export default WatsonApp;

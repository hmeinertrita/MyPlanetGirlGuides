import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tweet.css';
import { Tweet } from 'react-twitter-widgets';
// var TweetWidget = require('react-twitter-widgets').Tweet;

class TweetClass extends React.Component {
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

      <Tweet
        tweetId={tweet.twid}
        options={{
          cards: "hidden"
        }}
      />
      
    );
  }
}

export default withStyles(s)(TweetClass);

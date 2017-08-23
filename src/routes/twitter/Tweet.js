import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tweet.css';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let tweet = this.props.tweet;
    return (
      <li className={"tweet" + (tweet.active ? ' active' : '')}>
        <img src={tweet.avatar} className="avatar"/>
        <blockquote>
          <cite>
            <a href={"http://www.twitter.com/" + tweet.screenname}>{tweet.author}</a>
            <span className="screen-name">@{tweet.screenname}</span>
          </cite>
          <span className="content">{tweet.body}</span>
        </blockquote>
      </li>
    );
  }
}

export default withStyles(s)(Tweet);

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Utterance.css';
// import { Tweet } from 'react-twitter-widgets';
// var TweetWidget = require('react-twitter-widgets').Tweet;

class Utterance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let utterance = this.props.utterance;
    console.log('utterance', utterance);
    let utteranceTone = utterance.tones[0]
    let utteranceTones = utterance.tones.map(function(tone, i){
      return (
        <li key={i}>
          <span>Score: {tone.score}</span>
          <br></br>
          <span>Tone: {tone.tone_id}</span>
        </li>
      )
    });
    // console.log(utteranceTones)
    // console.log('utterance', utterance.tones);
    return (
      <li style={{
        "padding": '5px'
      }}>
      <div>Text: {utterance.utterance_text}</div>
      <ul>{utteranceTones}</ul>
    </li>
    );
  }
}

export default withStyles(s)(Utterance);

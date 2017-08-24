/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /**
  * Image Sources:
  * https://pixabay.com/p-1727490/?no_redirect
 */

import React from 'react';
import {connect} from 'react-redux';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ToneBox.css';

/*class ToneEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tones = this.props.tone.tones.map((i) => {
      return (
        <div className={s.tone}>
          <label>{i.tone_name}</label>
          <label>{i.score}</label>
        </div>
      );
    });


    return (
      <div className={s.entry}>
        <label className={s.entryLabel}>{getTextPreview()}</label>
        {tones}
      </div>
    );
  }
}*/

class ToneBox extends React.Component {
  constructor(props) {
    super(props);
    /*
    let tones=[];

    for (var i=0;i<this.props.utterances.length;i++) {
      for (var j=0;j<this.props.utterances[i].tones.length;j++) {
        let idx=-1;
        for (var k=0;k<tones.length;k++) {
          if (tones[k].tone_name === this.props.utterances[i].tones[j].tone_name) {
            let idx=k;
            break;
          }
        }

        if (idx !== -1) {
          tones[idx].scores.push(this.props.utterances[i].tones[j].score);
        }
        else {
          tones.push({
            tone_name: this.props.utterances[i].tones[j].tone_name,
            scores: [this.props.utterances[i].tones[j].score]
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

    console.log('average tones: ',averageTones);*/

    this.state = {
      tones: this.props.utterances
    };
  }

  render() {
    let tones = this.props.utterances.map((tone,idx) => {
      console.log('tone: ',tone);
      return (
        <div key={idx}>{tone.tone_name+': '+tone.score}</div>
      );
    });
    return (
      <div className={s.root}>
        hello
        {tones}
      </div>
    );
  }
}

export default withStyles(s)(ToneBox);

import React from 'react';
import Utterance from '../Utterance/Utterance';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Utterances.css';

class Utterances extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('UTTERANCES PROPS', this.props);
    let filteredContent = this.props.utterances_tone.filter((utterance) => {
      if (utterance.tones.length !== 0) {
        return true
      } else {
        return false
      }
    });

    // console.log('filteredContent', filteredContent)

    let processedContent = filteredContent.map(function(utterance){
      return (
        <Utterance key={utterance.utterance_id} utterance={utterance} />
      )
    });
    return (
      <ul>{processedContent}</ul>
    );
  }
}

export default withStyles(s)(Utterances);

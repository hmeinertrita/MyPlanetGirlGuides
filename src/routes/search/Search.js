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
import StringList from './StringList/StringList'
import TwitterSelector from './DomainSelector/TwitterSelector'
import TweetFilter from './TweetFilter/TweetFilter'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      includedWords: []
    };
    this.getWords = this.getWords.bind(this);
  }

  getWords(words) {
    this.setState({
      includedWords: words
    });
  }

  render() {
    const styles = {
      fontFamily: 'Helvetica Neue',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <div>
        <TweetFilter />
      </div>
    );
  }
}

export default Search;

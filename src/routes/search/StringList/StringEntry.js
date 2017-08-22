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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StringList.css';

class StringEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <div className={s.entry}>
        {this.props.text}
      </div>
    );
  }
}

export default withStyles(s)(StringEntry);

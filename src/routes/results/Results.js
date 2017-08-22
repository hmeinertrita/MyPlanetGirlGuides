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
import s from './Results.css';

import { TagCloud } from "react-tagcloud";


const data = [
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "MongoDB", count: 18 },
  { value: "CSS3", count: 20 }
];

const options = {
  luminosity: 'light',
  hue: 'blue'
};

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <div className={s.root}>
        <TagCloud 
          className={s.myTagCloud}
          minSize={20}
          maxSize={70}
          tags={data}
          colorOptions={options}
          onClick={tag => console.log(`'${tag.value}' was selected!`)}
        />
      </div>
    );
  }
}

// export default Results;
export default withStyles(s)(Results);


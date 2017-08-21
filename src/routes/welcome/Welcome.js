/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/*eslint-disable */

import React from 'react';
import Parallax from 'react-springy-parallax';
import {connect} from 'react-redux';

// Import Components
import Header from './header/Header';

class Welcome extends React.Component {
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
    // console.log('WELCOME props',this.props.state.username.user_name);
    console.log('welcome props', this.props.username)
    // console.log('WELCOME props',this.state);
    return (
      <Parallax ref="parallax" pages={2}>
        <Parallax.Layer
          offset={0}
          speed={1}
          style={{
            backgroundColor: '#243B4A',
          }}
        />
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{
            backgroundColor: '#F7C613',
          }}
        />

        {/* Header Video */}
        <Parallax.Layer
          offset={0}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(1)}
        >
          <Header {...this.props} />
        </Parallax.Layer>

        {/* Gif */}
        <Parallax.Layer offset={1} speed={1}>
          <img
            src="/school.gif"
            style={{
              display: 'block',
              marginRight: '0%',
            }}
          />
        </Parallax.Layer>

        {/* Second Layer*/}
        <Parallax.Layer
          offset={1}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(0)}
        />
      </Parallax>
    );
  }
}

const mapStateToProps = state => ({username: state.username.user_name});

export default connect(mapStateToProps)(Welcome);

/*eslint-enable */

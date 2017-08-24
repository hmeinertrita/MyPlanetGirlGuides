/**
* React Starter Kit (https://www.reactstarterkit.com/)
*
* Copyright © 2014-present Kriasoft, LLC. All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE.txt file in the root directory of this source tree.
*/

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

 render() {
   return (
     <div>
      <div className={s.root} role="navigation">
        {/* <Link className={s.link} to="/about">
          About
        </Link>
        <Link className={s.link} to="/contact">
          Contact
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/login">
          Log in
        </Link>
        <span className={s.spacer}>or</span> */}
        <div className={cx(s.links,this.state.isToggleOn?s.on:s.off)}>
          <Link className={cx(s.link, s.highlight)} to="/twitter">
            Tweets
          </Link>
          <Link className={cx(s.link, s.highlight)} to="/search">
            Search
          </Link>
        </div>
        
        <div className={cx(s.menu_res,this.state.isToggleOn?s.on:s.off)} onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      
    </div>
   );
 }
}

export default withStyles(s)(Navigation);

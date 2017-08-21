/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './applyboard.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Navigation />
        <Link to="/">
          <img src={logoUrl} width="143" height="42" alt="React" />
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Header);

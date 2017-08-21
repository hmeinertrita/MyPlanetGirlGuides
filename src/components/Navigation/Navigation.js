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
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import logoUrl from './applyboard.png';

class Navigation extends React.Component {
  render() {
    return (
      <nav
        className={'navbar ' + 'navbar-default ' + 'navbar-fixed-top '}
        role="navigation"
      >
        <div className={s.container}>
          {/* <!-- Logo and responsive toggle --> */}
          <div className={`navbar-header ${s.navbarheader}`}>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/">
              <img src={logoUrl} width="143" height="42" alt="React" />
            </Link>
          </div>
          {/* <!-- Navbar links --> */}
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link className={s.link} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link classname={s.link} to="/login">
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /.navbar-collapse --> */}
        {/* <!-- /.container --> */}
      </nav>
    );
  }
}

export default withStyles(s)(Navigation);

 /*eslint-enable */

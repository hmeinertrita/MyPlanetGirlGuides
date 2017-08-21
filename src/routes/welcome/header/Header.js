/*eslint-disable */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={s.homepageheader}>
        <div className="col-md-10 col-md-offset-1">
          <div className={s.headercontent}>
            <div className={s.headercontentinner}>
              <h1>
                HELPING TO CONNECT THE WORLD TO THE STUDENTS OF TOMORROW...
              </h1>
              <h3>
                Apply to the top universities in Canada and the USA through an
                all-in-one platform with a 95% acceptance rate.
              </h3>
              <button type="button" className="btn btn-success">Apply now {this.props.username}!</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);

/*eslint-enable */

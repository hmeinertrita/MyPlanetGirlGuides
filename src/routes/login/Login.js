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
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import { selectUser } from '../../actions/name';
import history from '../../history';
import Autocomplete from 'react-autocomplete'

// Import utils
import { getNames, matchNameToTerm, sortName, styles, inputProps } from './lib/utils'

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      currentName: '',
      clicked: false,
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  setName = (e) => {
    // e.target.value is the text from our input
    this.setState({ currentName: e.target.value });
}

onSubmit(e) {
  e.preventDefault();
  // this.props.selectUser(this.state.currentName).then(
    history.push('/welcome')
  // );
}

  render() {
    console.log('login state',this.state);
    console.log('login props',this.props)
    let buttonClass = s.gofetchbtn;
    if (this.state.clicked) {
      buttonClass += s.onclic;
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            {this.state.title} {this.state.currentName}
          </h1>
          <p className={s.lead}>Log in with your Name</p>
          <form onSubmit={this.onSubmit}>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="name">
                Name
              </label>
              <input
                onChange={this.setName}
                value={this.state.currentName}
                className={s.input}
                id="name"
                type="text"
                name="name"
                placeholder="Username"
                autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                autoComplete="off"
                autoCorrect="off"
                spellCheck="off"
              />
              <Autocomplete
                inputProps={inputProps.placeholder}
                menuStyle={styles.menu}
                value={this.state.currentName}
                items={getNames()}
                getItemValue={(item) => item.name}
                shouldItemRender={matchNameToTerm}
                sortItems={sortName}
                onChange={this.setName}
                onSelect={currentName => this.setState({ currentName})}
                renderItem={(item, isHighlighted) => (
                  <div
                    style={isHighlighted ? styles.highlightedItem : styles.item}
                    key={item.abbr}
                  >{item.name}</div>
                )}
              />
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Password:
              </label>
              <input
                className={s.input}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="off"
              />
            </div>
            <div className={s.formGroup}>
              <button
                className={s.button}
                onClick={() => {
                  this.setState({clicked: true});
                  this.props.selectUser(this.state.currentName);
                }}
                >Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    username: state.username.user_name
});

// Dispatch = call a function
const mapDispatchToProps = dispatch => {
  return {
    selectUser: (user) => dispatch(selectUser(user)),
  };
}

export default connect(
      mapStateToProps, mapDispatchToProps
  )(withStyles(s)(Login));

/*eslint-enable */

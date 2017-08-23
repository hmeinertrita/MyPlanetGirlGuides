/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /**
  * Image Sources:
  * https://pixabay.com/p-1727490/?no_redirect
 */

import React from 'react';
import {connect} from 'react-redux';

import closeUrl from '../assets/close-button-small.png'
import addUrl from '../assets/add-button-small.png'

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StringList.css';

class StringEntry extends React.Component {
  constructor(props) {
    super(props);

    this.deleteSelf = this.deleteSelf.bind(this);
  }

  deleteSelf() {
    this.props.deleteItem(this.props.id);
  }

  render() {
    return (
      <div className={s.entry}>
        <label className={s.entryLabel}>{this.props.word}</label>
        <input className={s.deleteButton} type="image" src={closeUrl} onClick={this.deleteSelf} />
      </div>
    );
  }
}

class StringList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strings: [],
      inputValue: ""
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteItem(id) {
    const strings=this.state.strings.map((i) => i);

    strings.splice(id,1);

    this.props.returnList(strings);

    this.setState({
      strings: strings
    });
  }

  addItem(event) {
    event.preventDefault();

    const strings=this.state.strings.map((i) => i);
    var word=this.state.inputValue;
    word=word.toLowerCase();
    strings.splice(0,0,word);

    this.setState({
      strings: strings,
      inputValue: ""
    });

    this.props.returnList(strings);
  }

  handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }

  render() {

    const strings=this.state.strings.map((word,idx)=>{
      return (
        <StringEntry
          className = {s.entry}
          key={idx}
          id={idx}
          word={word}
          deleteItem={this.deleteItem}
        />
      );
    });
    return (
      <div className={s.root}>
        <form className={s.addForm} onSubmit={this.addItem}>
          <input className={s.addField} onChange={this.handleChange} value={this.state.inputValue}/>
          <input type="image" src={addUrl} />
        </form>
        <div className={s.container}>
          {strings}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(StringList);

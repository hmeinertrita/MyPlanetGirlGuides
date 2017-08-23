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
    this.state = {
      excluded: ["testword"]
    };

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
      excluded: ["testword"],
      inputValue: ""
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteItem(id) {
    const excluded=this.state.excluded.map((i) => i);
    /*
    let i;
    for (i=0;i<excluded.length;i++) {
      if (excluded[i].id === id) {
        break;
      }
    } */

    excluded.splice(id,1);

    this.setState({
      excluded: excluded
    });
  }

  addItem(event) {
    event.preventDefault();

    const excluded=this.state.excluded.map((i) => i);
    var word=this.state.inputValue;
    word=word.toLowerCase();
    excluded.splice(0,0,word);

    this.setState({
      excluded: excluded,
      inputValue: ""
    });
  }

  handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }

  render() {
    const excludedWords=this.state.excluded.map((word,idx)=>{
      return (
        <StringEntry
          className = {s.entry}
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
          {excludedWords}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(StringList);

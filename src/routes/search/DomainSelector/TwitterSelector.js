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
import s from './DomainSelector.css';

class TwitterEntry extends React.Component {
  constructor(props) {
    super(props);
    let leadingChar='';
    if (this.props.type === 'hashtag') {
      leadingChar='#';
    }
    else if (this.props.type === 'user') {
      leadingChar='@';
    }
    this.state = {
      symbol: leadingChar
    };


    this.deleteSelf = this.deleteSelf.bind(this);
  }

  deleteSelf() {
    this.props.deleteItem(this.props.id,this.props.type);
  }

  render() {
    return (
      <div className={s.entry}>
        <div>
          <label className={s.entrySymbol}>{this.state.symbol}</label>
          <label className={s.entryLabel}>{this.props.text}</label>
        </div>
        <input className={s.deleteButton} type="image" src={closeUrl} onClick={this.deleteSelf} />
      </div>
    );
  }
}

class TwitterSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[],
      hashtags:[],
      inputValue: '',
      inclusionMode: 'exclusive'
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
  }

  deleteItem(id,type) {
    const users=this.state.users.map((i) => i);
    const hashtags=this.state.hashtags.map((i) => i);

    if(type === 'user') {
      users.splice(id,1);
    }
    else if (type === 'hashtag') {
      hashtags.splice(id,1);
    }

    this.props.returnUsers(users);
    this.props.returnHashtags(hashtags);

    this.setState({
      users: users,
      hashtags: hashtags
    });
  }

  addItem(event) {
    event.preventDefault();


    const users=this.state.users.map((i) => i);
    const hashtags=this.state.hashtags.map((i) => i);
    var text=this.state.inputValue;

    if (text.charAt(0) === '#') {
      hashtags.splice(0,0,text.substring(1,text.length));
    }
    else if (text.charAt(0) === '@') {
      users.splice(0,0,text.substring(1,text.length));
    }

    this.props.returnUsers(users);
    this.props.returnHashtags(hashtags);

    this.setState({
      users: users,
      hashtags: hashtags,
      inputValue: ""
    });
  }


  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleRadio(event) {
    this.setState({
      inclusionMode: event.currentTarget.value
    });
  }

  render() {
    const users=this.state.users.map((text,idx)=>{
      return (
        <TwitterEntry
          className = {s.entry}
          key={idx}
          id={idx}
          type='user'
          text={text}
          deleteItem={this.deleteItem}
        />
      );
    });
    const hashtags=this.state.hashtags.map((text,idx)=>{
      return (
        <TwitterEntry
          className = {s.entry}
          key={idx}
          id={idx}
          type='hashtag'
          text={text}
          deleteItem={this.deleteItem}
        />
      );
    });
    return (
      <div className={s.root}>
        {/*
        <input type='radio' name='mode' value='exclusive' onChange={this.handleRadio}/>Exclusive
        <input type='radio' name='mode' value='inclusive' onChange={this.handleRadio}/>Inclusive
        */}
        <div className={s.instructions}>use '@' and '#' to filter further</div>

        <form className={s.addForm} onSubmit={this.addItem}>
          <input className={s.addField} onChange={this.handleChange} value={this.state.inputValue}/>
          <input type="image" src={addUrl} />
        </form>
        <div className={s.container}>
          Users:
          <div className={s.users}>{users}</div>
          Hashtags:
          <div className={s.hashtags}>{hashtags}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TwitterSelector);

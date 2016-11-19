/**
 * Created by jahansj on 19/11/2016.
 */
import React, { Component } from 'react';
import s from './Title.css';

export default class Title extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className={ s.wrapper }>
          <h1 className={ s.titleText }>
            {
              this.props.text
            }
          </h1>
        </div>
    )
  }
}
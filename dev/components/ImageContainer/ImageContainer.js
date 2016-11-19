/**
 * Created by jahansj on 19/11/2016.
 */
import React, { Component } from 'react';
import s from './ImageContainer.css';

export default class ImageContainer extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
        <ul className={ s.container }>
          {
              this.props.children
          }
        </ul>
    )
  }
}
/**
 * Created by jahansj on 19/11/2016.
 */
import React, { Component } from 'react';
import s from './ImageContainer.css';

export default (props) => {
  return (
      <ul className={ s.container }>
        {
            props.children
        }
      </ul>
  )
}
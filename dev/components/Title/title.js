/**
 * Created by jahansj on 19/11/2016.
 */
import React, { Component } from 'react';
import s from './Title.css';

export default (props) => {
  return (
      <div>
        <h1 className={ s.titleText }>
          {
            props.text
          }
        </h1>
      </div>
  )
}
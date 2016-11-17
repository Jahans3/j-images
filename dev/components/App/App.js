/**
 * Created by jahansj on 16/11/2016.
 */
import React, { Component } from 'react';
import s from './App.css';

export default class App extends Component {
  constructor() {
    super();

    // Pull out same images each time (see:docs)
    // Use cookies or local storage to remember user's choices
    // get all <content> tags from XML
    // Identify and apply classes

  }

  testApi() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3030/testApi');

    xhr.onload = () => {
      const res = xhr.response;

      if (!res || xhr.status !== 200) {
        return console.log('Bad response');
      }

      console.log(this.parseXML(res));
    };

    xhr.send();
  }

  parseXML(XML) {
    const parser = new DOMParser();

    return parser.parseFromString(XML, 'application/xml');
  }

  render() {
    return (
        <div>
          It's aliiiiiivee
          <button onClick={this.testApi()}>Test API</button>
        </div>
    )
  }
}
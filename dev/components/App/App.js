/**
 * Created by jahansj on 16/11/2016.
 */
import React, { Component } from 'react';
import Title from '../Title/Title';
import ImageContainer from '../ImageContainer/ImageContainer';
import Image from '../Image/Image';
import s from './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      images: []
    };
  }

  flickrApi() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3030/testApi');

    xhr.onload = () => {
      const res = xhr.response;

      if (!res || xhr.status !== 200) {
        return console.log('Bad response');
      }
      
      this.getData(res);
    };

    xhr.send();
  }
  
  getData(response) {
    const obj = JSON.parse(response);

    if (typeof obj !== 'object' || !obj.hasOwnProperty('items') || !obj.hasOwnProperty('title')){
      return console.warn('Unexpected response');
    }

    const items = obj.items;
    const imageList = [];

    for (let i = 0, length = items.length; i < length; i++) {
      imageList.push(
          <Image
              title={ items[i].title }
              src={ items[i].media.m }
              alt={ items[i].title }
              idKey={ i }
              key={ i }
          />
      );
    }

    this.setState({
      title: response.title,
      images: imageList
    });
  }

  render() {
    return (
        <div>
          <Title text={this.state.title} />
          
          <button onClick={this.flickrApi()}>Get Images</button>

          <ImageContainer>
            {
                this.state.images
            }
          </ImageContainer>
        </div>
    )
  }
}
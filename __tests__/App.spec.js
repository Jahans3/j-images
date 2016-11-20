/**
 * Created by jahansj on 19/11/2016.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../dev/components/App/App';
import Image from '../dev/components/Image/Image';

function setState(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      this[prop] = obj[prop];
    }
  }
}

const addProps = (obj , prop, value) => {
  obj[prop] = value;
};

test('App', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('getData', () => {
  const newApp = {};
  addProps(newApp, 'setState', setState);
  addProps(newApp, 'getData', App.prototype.getData);

  const response = {
    title: 'Title',
    items: [{
      title: 'Image Title',
      media: {
        m: 'http://some.src'
      }
    }]
  };
  const res = JSON.stringify(response);
  const nextImage = (
      <Image
          title={ response.items[0].title }
          src={ response.items[0].media.m }
          alt={ response.items[0].title }
          idKey={0}
          key="0"
      />
  );
  
  newApp.getData(res);
  
  expect(newApp.title).toEqual(response.title);
  expect(newApp.images[0]).toEqual(nextImage);
});
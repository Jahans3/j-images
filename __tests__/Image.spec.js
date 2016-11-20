/**
 * Created by jahansj on 19/11/2016.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../dev/components/Image/Image';

const addProps = (obj, mock, value) => obj[mock] = value;
const lsMock = {
  getItem: item => null,
  setItem: (key, value) => true
};

function setState(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      this[prop] = obj[prop];
    }
  }
}

const obj = {};

addProps(window, 'localStorage', lsMock);
addProps(obj, 'setState', setState);
addProps(obj, 'props', {});
addProps(obj.props, 'idKey', '');

test('Image', () => {
  const tree = renderer.create(
      <Image
        title={ 'Title Text' }
        src={ 'http://some.src' }
        alt={ 'Alt Text' }
        idKey={0}
      />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});

test('extractID', () => {
  addProps(obj, 'extractID', Image.prototype.extractID);
  addProps(obj, 'props', {});
  addProps(obj.props, 'src', 'http://some.src/path.ext');

  expect(obj.extractID()).toEqual('path');
});

test('toggleSelected', () => {
  addProps(obj, 'toggleSelected', Image.prototype.toggleSelected);
  
  spyOn(localStorage, 'setItem');
  
  obj.toggleSelected();

  expect(localStorage.setItem).toHaveBeenCalled();
});

test('findSelectedImages', () => {
  addProps(obj, 'findSelectedImages', Image.prototype.findSelectedImages);

  expect(obj.findSelectedImages()).toEqual(undefined);
});
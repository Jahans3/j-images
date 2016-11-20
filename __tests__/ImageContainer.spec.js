/**
 * Created by jahansj on 19/11/2016.
 */
import React from 'react';
import renderer from 'react-test-renderer'
import ImageContainer from '../dev/components/ImageContainer/ImageContainer';
import Image from '../dev/components/Image/Image';

const addProps = (obj, mock) => obj[mock] = {
  getItem: item => null,
  setItem: (key, value) => true
};

test('ImageContainer', () => {
  addProps(window, 'localStorage'); // Mock localStorage
  
  const tree = renderer.create(
    <ImageContainer>
      <Image
          title="title"
          src="http://some.src"
          alt="Alt text"
          idKey="1"
      />
    </ImageContainer>
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});
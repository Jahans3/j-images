/**
 * Created by jahansj on 20/11/2016.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../dev/components/Title/Title';

test('Title', () => {
  const tree = renderer.create(
      <Title text="A Title" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
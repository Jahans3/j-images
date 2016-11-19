/**
 * Created by jahansj on 19/11/2016.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../dev/components/App/App';

test('App', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
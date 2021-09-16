/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import MainView from '~/test/MainView';



it('renders correctly', () => {
  const tree = renderer.create(<MainView />).toJSON();
  expect(tree).toMatchSnapshot()
});

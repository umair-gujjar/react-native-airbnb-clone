/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, StatusBar } from 'react-native';
import store from './src/redux/store';
import AppWithNavigationState from './src/navigators/AppNavigator';

StatusBar.setBarStyle('light-content', true);

class AirBnbClone extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AirbnbClone', () => AirBnbClone);
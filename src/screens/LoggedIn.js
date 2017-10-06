import React, { Component } from 'react';
import { transparentHeaderStyle } from '../styles/navigation';
import LoggedInTabsContainer from '../navigators/LoggedInTabsContainer';

export default class LoggedIn extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    gesturesEnabled: false,
  });

  render() {
    return (
      <LoggedInTabsContainer />
    );
  }
}
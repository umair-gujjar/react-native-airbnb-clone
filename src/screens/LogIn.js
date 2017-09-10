/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { transparentHeaderStyle } from '../styles/navigation';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class LogIn extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerStyle: transparentHeaderStyle
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Log In Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});

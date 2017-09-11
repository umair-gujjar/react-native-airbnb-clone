/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ForgotPassword extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Forgot Password Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.darkGreen,
    flex: 1,
    display: 'flex',
  },
});

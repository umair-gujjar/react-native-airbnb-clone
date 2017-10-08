/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import colors from '../styles/colors';

import {
  View,
  StyleSheet,
} from 'react-native';

export default class TripsContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}></View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 99,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '100%',
    height: 60,
  },
});
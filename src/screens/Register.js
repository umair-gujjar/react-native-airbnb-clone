/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Register Screen</Text>
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

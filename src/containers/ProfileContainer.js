/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'PROFILE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='ios-contact-outline'
        size={22}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Profile Tab</Text>
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

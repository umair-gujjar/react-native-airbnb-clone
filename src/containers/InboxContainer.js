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

export default class InboxContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'INBOX',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='ios-archive-outline'
        size={25}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Inbox Tab</Text>
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

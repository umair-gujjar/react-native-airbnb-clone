/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ExploreContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'SAVED',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name='heart-o'
        size={19}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Saved Tab</Text>
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

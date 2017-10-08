/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TripsContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.searchContainer}>
	      <Icon
	        name='ios-search'
	        size={20}
	        color={colors.gray04}
	        style={styles.searchIcon}
	      />
          <Text style={styles.inputText}>Try "Cape Town"</Text>
        </View>
      </View>
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
    height: 80,
  },
  searchContainer: {
    display: 'flex',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray03,
    backgroundColor: colors.white,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    borderRadius: 3,
    height: 41,
    marginTop: 28,
    marginLeft: 20,
    marginRight: 20,
  },
  searchIcon: {
    position: 'absolute',
    left: 18,
    top: 9,
  },
  inputText: {
    display: 'flex',
    marginTop: 11,
    marginLeft: 44,
    color: colors.gray04,
  }
});
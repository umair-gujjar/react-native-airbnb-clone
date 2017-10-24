/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../styles/colors';

import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
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

  nothingSavedMessage() {
    return(
      <View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.heading}>Saved</Text>
          <Text style={styles.description}>Not every day is filled with adventures, but you can start planning for the next one.</Text>
          <Text style={styles.description}>Tap the heart on any home to start saving your favorites here.</Text>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.findHomesBtn}>
            <Text style={styles.findHomesBtnText}>Find homes</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.nothingSavedMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 40,
    color: colors.gray02,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray02,
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollView: {
    height: '100%',
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 80,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: colors.gray05,
    paddingLeft: 20,
    paddingRight: 20,
  },
  findHomesBtn: {
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 16,
    borderRadius: 3,
    backgroundColor: colors.pink,
  },
  findHomesBtnText: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '600',
  }
});

/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class TopBavBar extends Component {
  
  getButton(location) {
    const rightButton = this.props.rightButton;
    const leftButton = this.props.leftButton;

    if (typeof rightButton === 'string' || typeof leftButton === 'string') {
      const buttonString = location === 'left' ? leftButton : rightButton;
      const buttonStyles = location === 'left' ? styles.leftButton : styles.rightButton; 
      return (
        <TouchableOpacity style={buttonStyles}>
          <Text style={styles.buttonText}>{buttonString}</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.button}>
          {this.getButton('left')}
        </View>
        <View style={styles.button}>
          {this.getButton('right')}
        </View>
      </View>
    );
  }
}

TopBavBar.propTypes = {
  rightButton: PropTypes.any,
  rightButtonCallback: PropTypes.func,
  leftButton: PropTypes.any,
  leftButtonCallback: PropTypes.func,
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    marginTop: 20,
    height: 60,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    display: 'flex',
    flex: 1,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
  },
  rightButton: {
    alignSelf: 'flex-end',
  },
  leftButton: {
    alignSelf: 'flex-start',
  }
});

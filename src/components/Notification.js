/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      positionValue: new Animated.Value(60),
    }
  }

  animateNotification(value) {
    Animated.timing(
      this.state.positionValue,
      {
        toValue: value,
        duration: 400,
        velocity: 3,
        tension: 2,
        friction: 8,
        easing: Easing.easeOutBack
      }
    ).start();
  }

  closeNotification() {
    this.animateNotification(60);
    this.props.onCloseNotification();
  }

  render() {
    this.props.showNotification ? this.animateNotification(0) : this.animateNotification(60);
    return (
      <Animated.View style={[{transform: [ {translateY: this.state.positionValue} ]}, styles.wrapper]}>
        <View style={styles.notificationContent}>
          <Text style={styles.errorText}>{this.props.type}</Text>
          <Text style={styles.errorMessage}>{this.props.firstLine}</Text>
          <Text style={styles.errorMessage}>{this.props.secondLine}</Text>
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => this.closeNotification()}
        >
          <Icon
            name="times"
            color={colors.lightGray}
            size={20}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  firstLine: PropTypes.string,
  secondLine: PropTypes.string,
  onCloseNotification: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: 60,
    width: '100%',
    padding: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  notificationContent: {
    flexDirection:'row',
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
  },
  errorText: {
    color: colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },
  errorMessage: {
    marginBottom: 2,
    fontSize: 14,
  },
});

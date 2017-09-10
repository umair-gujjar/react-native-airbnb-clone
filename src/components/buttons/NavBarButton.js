/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class NavBarButton extends Component {
  render() {
    const location = this.props.location === 'right' ? { marginRight: 25 } : { marginLeft: 25 };
    return (
      <TouchableOpacity onPress={this.props.callback}>
        <Text style={[{color: this.props.color},location,styles.buttonText]}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

NavBarButton.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
  }
});

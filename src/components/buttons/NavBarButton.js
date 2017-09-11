/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class NavBarButton extends Component {
  render() {
    const location = this.props.location === 'right' ? { marginRight: 20 } : { marginLeft: 20 };
    let content;
    if (this.props.text) {
      content = <Text style={[{color: this.props.color},location,styles.buttonText]}>{this.props.text}</Text>;
    } else if (this.props.icon) {
      content = <View style={location}>{this.props.icon}</View>;
    }
    return (
      <TouchableOpacity onPress={this.props.callback}>
        {content}
      </TouchableOpacity>
    );
  }
}

NavBarButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
  callback: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  color: PropTypes.string,
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
  }
});

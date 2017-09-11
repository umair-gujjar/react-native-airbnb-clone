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
  TextInput,
  StyleSheet,
} from 'react-native';

export default class InputField extends Component {
  render() {
    const wrapperStyle = this.props.customStyle;
    const labelColor = this.props.labelColor;
    const labelTextSize = this.props.labelTextSize;
    const borderColor = this.props.inputBorderColor;
    const inputType = this.props.inputType === 'text' || this.props.inputType === 'email' ? false : true;
    let keyboardType = this.props.inputType === 'email' ? 'email-address' : 'default';

    return (
      <View style={[wrapperStyle,styles.wrapper]}>
        <Text 
          style={[{color: labelColor, fontSize: labelTextSize}, styles.label]}
          keyboardType={keyboardType}
        >
          {this.props.labelText}
        </Text>
        <TextInput
          style={[{color: this.props.textColor, borderBottomColor: borderColor}, styles.inputField]}
          secureTextEntry={inputType}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  customStyle: PropTypes.object,
  textColor: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  inputBorderColor: PropTypes.string,
  inputType: PropTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  label: {
    fontWeight: '600',
    marginBottom: 10
  }
});

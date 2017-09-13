/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Animated,
  Easing,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class InputField extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      scaleValue: new Animated.Value(0),
    }
  }

  scale(value) {
    Animated.timing(
      this.state.scaleValue,
      {
        toValue: value,
        duration: 400,
        easing: Easing.easeOutBack
      }
    ).start();
  }

  render() {
    const wrapperStyle = this.props.customStyle;
    const labelColor = this.props.labelColor;
    const labelTextSize = this.props.labelTextSize;
    const borderColor = this.props.inputBorderColor;
    const inputType = this.props.inputType === 'text' || this.props.inputType === 'email' ? false : true;
    let keyboardType = this.props.inputType === 'email' ? 'email-address' : 'default';

    const iconScale = this.state.scaleValue.interpolate({
    inputRange: [0, 0.5,  1],
    outputRange: [0, 1.6, 1]
    });
    
    const scaleValue = this.props.showCheckmark ? 1 : 0;
    this.scale(scaleValue);

    return (
      <View style={[wrapperStyle,styles.wrapper]}>
        <Text 
          style={[{color: labelColor, fontSize: labelTextSize}, styles.label]}
          keyboardType={keyboardType}
        >
          {this.props.labelText}
        </Text>
        <Animated.View style={{transform: [ {scale: iconScale} ], position: 'absolute', right: 0, bottom: 6}}>
          <Icon
            name="check"
            color={colors.white}
            size={20}
          />
        </Animated.View>
        <TextInput
          style={[{color: this.props.textColor, borderBottomColor: borderColor}, styles.inputField]}
          secureTextEntry={inputType}
          onChange={(event) => this.props.onChangeText(event.nativeEvent.text)}
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
  showCheckmark: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
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

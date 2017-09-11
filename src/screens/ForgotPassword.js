/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import InputField from '../components/form/InputField';
import NavBarButton from '../components/buttons/NavBarButton';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ForgotPassword extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: <NavBarButton
                  callback={() => navigation.goBack()}
                  location="left"
                  icon={
                    <Icon
                      name="angle-left"
                      color={colors.white}
                      size={30}
                    />
                  }
                />,
    headerStyle: transparentHeaderStyle,
    headerTintColor: colors.white
  });

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.form}>
          <Text style={styles.forgotPasswordHeader}>Forgot your password?</Text>
          <Text style={styles.forgotPasswordSubheader}>Enter your email to find your account.</Text>
          <InputField
            customStyle={{marginBottom: 30}}
            textColor={colors.white}
            labelText="EMAIL ADDRESS"
            labelTextSize={14}
            labelColor={colors.white}
            inputBorderColor={colors.semiTransparentWhite}
            inputType="email"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.darkGreen,
    flex: 1,
    display: 'flex',
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
  },
  forgotPasswordHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
  },
  forgotPasswordSubheader: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  }
});

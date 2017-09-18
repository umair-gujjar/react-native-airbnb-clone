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
import Loader from '../components/Loader';
import Notification from '../components/Notification';
import NextArrowButtom from '../components/buttons/NextArrowButton';

import {
  View,
  Text,
  KeyboardAvoidingView,
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
  
  constructor(props) {
    super(props);
    this.state = {
      formStatus: 'valid',
      loadingVisible: false,
      validEmail: false,
      emailAddress: '',
    }

    this.onEmailChange = this.onEmailChange.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  onEmailChange(text) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      emailAddress: text
    });
    if (!this.state.validEmail) {
      if (emailCheckRegex.test(text)) {
        this.setState({
          validEmail: true
        });
      }
    } else {
      if (!emailCheckRegex.test(text)) {
        this.setState({
          validEmail: false
        });
      }
    }
  }

  goToNextStep() {
    this.setState({loadingVisible: true});
    setTimeout(() => {
      if (this.state.emailAddress === 'wrong@email.com') {
        this.setState({
          loadingVisible: false,
          formStatus: 'invalid',
        });
      } else {
        this.setState({
          loadingVisible: false,
          formStatus: 'valid',
        });
      }
    },1000);
  }

  closeNotification() {
    this.setState({
      formStatus: 'valid',
    });
  }

  render() {
    const background = this.state.formStatus === 'valid' ? colors.darkGreen : colors.darkOrange;
    const showNotification = this.state.formStatus === 'valid' ? false : true;
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={[{backgroundColor: background}, styles.wrapper]}
      >
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
            onChangeText={this.onEmailChange}
          />
        </View>
        <View style={styles.nextButton}>
          <NextArrowButtom
            disabled={!this.state.validEmail}
            callback={this.goToNextStep}
          />
        </View>
        <View style={showNotification ? {marginTop: 10} : {}}>
          <Notification
            showNotification={showNotification}
            onCloseNotification={this.closeNotification}
            type="Error"
            firstLine="No account exists for the requested"
            secondLine="email address."
          />
        </View>
        <Loader
          modalVisible={this.state.loadingVisible}
          animationType="fade"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
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
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 0,
  }
});

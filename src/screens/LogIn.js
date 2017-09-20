/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import NavBarButton from '../components/buttons/NavBarButton';
import NextArrowButtom from '../components/buttons/NextArrowButton';
import InputField from '../components/form/InputField';
import Loader from '../components/Loader';
import Notification from '../components/Notification';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

export default class LogIn extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: <NavBarButton
                   callback={() => navigation.navigate('ForgotPassword')}
                   location="right"
                   color={colors.white}
                   text="Forgot password"
                  />,
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
      topBorderColor: 'transparent',
      formStatus: 'valid',
      validEmail: false,
      emailAddress: '',
      validPassword: false,
      loadingVisible: false,

    }
    this.handleScroll = this.handleScroll.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
    this.closeNotification = this.closeNotification.bind(this);
  }

  handleScroll(event) {
    if (event.nativeEvent.contentOffset.y > 20) {
      this.setState({
        topBorderColor: colors.semiTransparentWhite
      });
    } else {
      this.setState({
        topBorderColor: 'transparent'
      });
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
        const { navigate } = this.props.navigation;
        navigate('TurnOnNotifications');
      }
    },1000);
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
  
  onPasswordChange(text) {
    if (!this.state.validPassword) {
      if (text.length > 4) {
        this.setState({
          validPassword: true
        });
      }
    } else {
      if (text.length <= 4) {
        this.setState({
          validPassword: false
        });
      }
    }
  }

  toggleNextButtonState() {
    if (this.state.validEmail && this.state.validPassword) {
      return false;
    } else if (!this.state.validEmail || !this.state.validPassword) {
      return true;
    }
    return true;
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
        <View style={[{borderTopColor: this.state.topBorderColor},styles.scrollViewWrapper]}>
          <ScrollView
            style={styles.formWrapper}
            onScroll={this.handleScroll}
            scrollEventThrottle={16}
          >
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              customStyle={{marginBottom: 30}}
              textColor={colors.white}
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              inputBorderColor={colors.semiTransparentWhite}
              inputType="email"
              showCheckmark={this.state.validEmail}
              onChangeText={this.onEmailChange}
              autoFocus={true}
            />
            <InputField
              customStyle={{marginBottom: 30}}
              textColor={colors.white}
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              inputBorderColor={colors.semiTransparentWhite}
              inputType="password"
              showCheckmark={this.state.validPassword}
              onChangeText={this.onPasswordChange}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButtom
              disabled={this.toggleNextButtonState()}
              callback={this.goToNextStep}
            />
          </View>
          <View style={showNotification ? {marginTop: 10} : {}}>
            <Notification
              showNotification={showNotification}
              onCloseNotification={this.closeNotification}
              type="Error"
              firstLine="Those credentials don't look right."
              secondLine="Please try again."
            />
          </View>
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
  formWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  scrollViewWrapper: {
    marginTop: 70,
    borderTopWidth: 1,
    flex: 1,
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 0,
  }
});

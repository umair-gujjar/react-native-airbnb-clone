/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import colors from '../styles/colors';
import TopNavBar from '../components/navigation/TopNavBar';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class LoggedOut extends Component {
  continueWithFacebook() {
    alert("Continue with Facebook pressed");
  }
  
  createAccount() {
    alert("Create account pressed");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TopNavBar rightButton="Log In"/>
        <View style={styles.welcomeWrapper}>
          <Image
            style={styles.logo}
            source={require('../img/airbnb-logo.png')}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
          <RoundedButton
            text="Continue with Facebook"
            callback={this.continueWithFacebook}
            background={colors.white}
            color={colors.darkGreen}
            icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
          />
          <RoundedButton
            text="Create Account"
            callback={this.createAccount}
            color={colors.white}
          />
          <TouchableOpacity style={styles.moreOptionsButton}>
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableOpacity>
          
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>By tapping Continue, Create Account or More options,</Text>
            <Text style={styles.termsText}>I agree to Airbnb's</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>,</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>,</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>, and</Text>
            <TouchableOpacity style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}>.</Text>
          </View>
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
  logo: {
    width: 50,
    height: 50,
    marginBottom: 40,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  facebookButtonIcon: {
    color: colors.darkGreen,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton: {
    marginTop: 15,
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
  termsAndConditions: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    marginTop: 30,
  },
  termsText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600'
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = (state) => {
  return {
    activeScreen: state.activeScreen
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOut);

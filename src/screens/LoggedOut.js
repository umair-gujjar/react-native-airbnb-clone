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

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TopNavBar rightButton="Log In"/>
        <View style={styles.welcomeWrapper}>
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
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

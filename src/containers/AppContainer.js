import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

class AppContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.welcomeText}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps (state) {
  return {
    activeScreen: state.activeScreen
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

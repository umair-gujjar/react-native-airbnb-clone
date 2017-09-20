/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import colors from '../styles/colors';

import LoggedOut from '../screens/LoggedOut';
import Login from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications';

export const AppNavigator = StackNavigator({
    LoggedOut: { screen: LoggedOut },
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword },
    TurnOnNotifications: { screen: TurnOnNotifications }
  },
  {
  	cardStyle: {
  	  opacity: 1
  	}
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
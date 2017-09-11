/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import colors from '../styles/colors';

import LoggedOut from '../screens/LoggedOut';
import Login from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';

const fade = (props) => {
  const { position, scene } = props;
  const index = scene.index;
  const translateX = 0;
  const translateY = 0;

  const opacity = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1]
  });

  return {
    opacity,
    transform: [{translateX}, {translateY}]
  }
}

export const AppNavigator = StackNavigator({
    LoggedOut: { screen: LoggedOut },
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        const {scene} = sceneProps;
        if (scene.route.routeName === 'Login' || scene.route.routeName === 'ForgotPassword') {
          return fade(sceneProps);
        }
        return CardStackStyleInterpolator.forHorizontal(sceneProps)
      }
    })
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
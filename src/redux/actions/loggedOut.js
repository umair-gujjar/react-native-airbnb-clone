/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import * as types from './types';
import user from '../../data/user.json';

export function logIn(email, password) {
  return (dispatch, getState) => {
    if (email === user.email) {
      dispatch(setLoggedInState(true));
      return true;
    } else {
      dispatch(setLoggedInState(false));
      return false;
    }
  }
}

export function setLoggedInState(loggedInState) {
  return {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
}
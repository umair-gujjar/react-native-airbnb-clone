/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import createReducer from '../helpers/createReducer'
import * as types from '../actions/types'

export const logIn = createReducer({}, {
  [types.LOG_IN](state, action) {
    return action;
  }
});

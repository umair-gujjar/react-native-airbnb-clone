/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import { combineReducers } from 'redux';
import * as Navigation from './navigation';
import * as LoggedOut from './loggedOut';

export default combineReducers(Object.assign(
  Navigation,
  LoggedOut,
));

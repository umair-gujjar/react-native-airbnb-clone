/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import * as types from './types'
import ReactNative from 'react-native'

export const logIn = (state) => {
  return {
    type: types.LOG_IN,
    state
  }
}

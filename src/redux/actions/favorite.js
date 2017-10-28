/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import * as types from './types';

export function addToFavorite(itemId) {
  return {
    type: types.ADD_TO_FAVORITE,
    itemId,
  }
}
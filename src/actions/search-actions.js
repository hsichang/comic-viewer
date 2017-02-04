import * as types from '../actions/action-types';

export function getComicSearchSuccess(items) {
  return {
    type: types.GET_COMIC_SEARCH_SUCCESS,
    items
  };
} 
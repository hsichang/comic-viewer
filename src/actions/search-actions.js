import * as types from '../actions/action-types';

export function getComicSearchSuccess(items) {
  return {
    type: types.GET_COMIC_SEARCH_SUCCESS,
    items
  };
} 

export function getComicDetailsSuccess(response) {
  return {
    type: types.GET_COMIC_DETAILS_SUCCESS,
    response
  };
}

export function getComicIssueSuccess(pages) {
  return {
    type: types.GET_COMIC_ISSUE_SUCCESS,
    pages
  };
}

export function getComicListByPageSuccess(response) {
  return {
    type: types.GET_COMIC_LIST_BY_PAGE_SUCCESS,
    response
  };
}

export function getComicListByGenreSuccess(response) {
  return {
    type: types.GET_COMIC_LIST_BY_GENRE_SUCCESS,
    response
  };  
}

export function getAutocompleteComicList(response) {
  return {
    type: types.GET_AUTOCOMPLETE_COMIC_LIST,
    response
  }
}

export function clearAutocompleteList() {
  return {
    type: types.CLEAR_AUTOCOMPLETE
  }
}
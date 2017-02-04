import * as types from '../actions/action-types';

const initialState = {
  items: [],
  item: [],
  data: [],
  cover: '',
  attributes: [],
  included: [],
  relationships: {}
}

const comicReducer = (state = initialState, action) => {
  switch(action.type) {

    case types.GET_COMIC_DETAILS_SUCCESS:
      return Object.assign({}, state, { item: action.item })
    case types.GET_COMIC_SEARCH_SUCCESS:
      return Object.assign({}, state, { items: action.items })
  }

  return state;
}

export default comicReducer;
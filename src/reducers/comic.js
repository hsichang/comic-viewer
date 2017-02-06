import * as types from '../actions/action-types';

const initialState = {
  items: [],
  item: [],
  data: [],
  cover: '',
  attributes: [],
  included: [],
  relationships: {},
  pages: [],
  allPages: false,
  next: "",
  previous: "",
  last: "",
  searchByGenre: false
}

const comicReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_COMIC_DETAILS_SUCCESS:
      return Object.assign({}, state, { item: action.response,
                                        cover: action.response.data.links.cover,
                                        attributes: action.response.data.attributes,
                                        included: action.response.included,
                                        relationships: action.response.data.relationships })
    case types.GET_COMIC_SEARCH_SUCCESS:
      return Object.assign({}, state, { items: action.items })
    case types.GET_COMIC_ISSUE_SUCCESS:
      return Object.assign({}, state, { pages: action.pages })
    case types.GET_COMIC_LIST_BY_PAGE_SUCCESS:
      return Object.assign({}, state, { items: action.response.data,
                                        next: action.response.links.next,
                                        previous: action.response.links.previous,
                                        last: action.response.links.last })
    case types.GET_COMIC_LIST_BY_GENRE_SUCCESS:
      return Object.assign({}, state, { items: action.response.data,
                                        next: action.response.links.next,
                                        previous: action.response.links.previous,
                                        last: action.response.links.last,
                                        searchByGenre: true })
    default:
      return state;
  }
}

export default comicReducer;
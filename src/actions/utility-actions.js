import * as types from '../actions/action-types';

// TODO: might not need to send the store.
export function updateAllPages(store) {
  return {
    type: types.UPDATE_ALL_PAGES,
    store
  };
} 

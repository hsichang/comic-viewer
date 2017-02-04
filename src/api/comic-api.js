import store from '../store';
import { getComicSearchSuccess } from '../actions/search-actions';

export function getComics() {
  return true;
}


// Get comic details

export function getComicDetails(id='') {
  
}

// Search Comics

export function searchComics(query='') {
  return fetch("http://localhost:4000/comics-api/comics/search/" + query)
          .then(response => response.json())
          .then(response => {
            store.dispatch(getComicSearchSuccess(response.data));
            return response.data;
          })
}

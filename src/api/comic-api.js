import store from '../store';
import { getComicSearchSuccess,
         getComicDetailsSuccess,
         getComicIssueSuccess,
         getComicListByPageSuccess,
         getComicListByGenreSuccess } from '../actions/search-actions';

export function getComics() {
  return true;
}


// Get comic details

export function getComicDetails(id='') {
  return fetch("http://localhost:4000/comics-api/comic/" + id)
          .then(response => response.json())
          .then(response => {
            store.dispatch(getComicDetailsSuccess(response));
            return response;
          })
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

// Get comic pages

export function getComicPages(id, issue) {
  return fetch("http://localhost:4000/comics-api/comic/" + id + "/" + issue)
          .then(response => response.json())
          .then(response => {
            store.dispatch(getComicIssueSuccess(response.data.attributes.pages));
            return response.data.attributes.pages;
          })
}

// Get list of comics by page

export function getComicListByPage(page) {
  return fetch("http://localhost:4000/comics-api/comics/" + page)
          .then(response => response.json())
          .then(response => {
            store.dispatch(getComicListByPageSuccess(response));
            return response;
          })
}

// Get comics by genre
export function getComicListByGenreAndPage(genre, page) {
  return fetch("http://localhost:4000/comics-api/genres/" + genre + "/" + page)
          .then(response => response.json())
          .then(response => {
            store.dispatch(getComicListByGenreSuccess(response));
            return response;
          })
}

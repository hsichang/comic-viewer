import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import './styles/App.scss';
import SearchResultsContainer from './containers/SearchResultsContainer';
import ComicDetail from './containers/ComicDetail';
import ComicView from './containers/ComicView';
import ListAllComics from './containers/ListAllComics';
import ListAllComicsByGenre from './containers/ListAllComicsByGenre';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      </Route>
      <Route path="/Comics/Search" component={SearchResultsContainer}>
      </Route>
      <Route path="/Comics/" component={ListAllComics}>
      </Route>
      <Route path="/Comics/:page" component={ListAllComics}>
      </Route>
      <Route path="/Comic/:id" component={ComicDetail}>
      </Route>
      <Route path="/Comic/:id/:issue/:page" component={ComicView}>
      </Route>
      <Route path="/Comics/genres/:name/:page" component={ListAllComicsByGenre}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);


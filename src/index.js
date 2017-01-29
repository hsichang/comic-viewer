import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './containers/App';
import './styles/App.scss';
import SearchResults from './containers/SearchResults';
import ComicDetail from './containers/ComicDetail';
import ComicView from './containers/ComicView';
import ListAllComics from './containers/ListAllComics';

// TODO: change {SearchResults} to something else because it is only looking
// for comics
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/Comics/Search" component={SearchResults}>
    </Route>
    <Route path="/Comics" component={ListAllComics}>
    </Route>
    <Route path="/Comic/:id" component={ComicDetail}>
    </Route>
    <Route path="/Comic/:id/:issue/:page" component={ComicView}>
    </Route>
  </Router>,
  document.getElementById('root')
);

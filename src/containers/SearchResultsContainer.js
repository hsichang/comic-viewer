import React, { Component } from 'react';
import SearchComponent from '../components/SearchComponent';
import Masthead from '../components/Masthead';
import { searchComics } from '../api/comic-api.js';
import { connect } from 'react-redux';
import { getComicSearchSuccess } from '../actions/search-actions';
import SearchResults from '../components/SearchResults';
import Subheader from '../components/Subheader';

class SearchResultsContainer extends Component {
  componentWillMount() {
    const query = this.props.location.query.comic;
    this.search(query);
  }

  search(query) {
    searchComics(query)
  }

  render() {
    return (
      <div className="search-results-container">
        <header>
          <Masthead />
          <SearchComponent search={this.search}/>
        </header>
        <Subheader />
        <SearchResults {...this.props} />
      </div>
    )
  }
} 

const mapStateToProps = function(store) {
  return {
    items: store.comicReducer.items
  };
}

export default connect(mapStateToProps)(SearchResultsContainer);
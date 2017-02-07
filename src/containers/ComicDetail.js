import React, { Component } from 'react';
import SearchComponent from '../components/SearchComponent';
import Masthead from '../components/Masthead';
import { connect } from 'react-redux';
import { getComicDetails } from '../api/comic-api.js';
import ComicDetailComponent from '../components/ComicDetailComponent';
import DetailIssueListComponent from '../components/DetailIssueListComponent';
import { clearAutocompleteList } from '../actions/search-actions';
import store from '../store';

class ComicDetail extends Component {
  componentWillMount() {
    store.dispatch(clearAutocompleteList());
    const id = this.props.params.id;
    getComicDetails(id);
  }

  render() {
    return(
      <div className="comic-detail">
        <header>
          <Masthead />
          <SearchComponent />
        </header>
        
        { this.props.relationships.genres &&
          <ComicDetailComponent {...this.props} />
        }
        <hr />
        <DetailIssueListComponent {...this.props} />
      </div>
    ) 
  }
}

const mapStateToProps = function(store) {
  return {
    item: store.comicReducer.item,
    cover: store.comicReducer.cover,
    attrs: store.comicReducer.attributes,
    included: store.comicReducer.included,
    relationships: store.comicReducer.relationships
  }
}

export default connect(mapStateToProps)(ComicDetail);
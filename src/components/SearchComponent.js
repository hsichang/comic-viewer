import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { getAutocompleteComics } from '../api/comic-api.js';
import { clearAutocompleteList } from '../actions/search-actions';
import store from '../store';

class SearchComponent extends Component {
  redirect(query) {
    browserHistory.push({
      pathname: '/Comics/Search',
      search: '?comic=' + query,
      state: {searchTerm: 'criteria'}
    });
  }

  render() {

    const handleChange = (e) => {
      const query = this.refs.search.value.trim();
      if (e.key !== 'Enter') {
        getAutocompleteComics(query);
      };
      if (e.key === 'Enter' && query !== "") {
        this.redirect(query);
        this.props.search(query);
      };
    }

    const clearAutocomplete = () => {
      store.dispatch(clearAutocompleteList());
    }

    return ( 
      <div className="search-container">
        <input ref="search" 
               type="search" 
               placeholder="Search Comics"
               onKeyUp={handleChange} 
               />
        { (this.props.autocompleteResults.length > 0) &&
          <div className="autocomplete-container">
            {this.props.autocompleteResults.map( (result, index) => (
              <div className="autocomplete-result"
                   key={index}
                   onBlur={() => clearAutocomplete()} >
                <Link to={'/Comic/' + result.links.self.split("/").slice(4)}>
                  {result.attributes.title}
                </Link>
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    autocompleteResults: store.comicReducer.autocompleteResults
  }
}

export default connect(mapStateToProps)(SearchComponent);
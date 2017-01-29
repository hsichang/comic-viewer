import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SearchComponent extends Component {
  render() {

// TODO - donn't send if empty
// THIS IS HOW YOU REDIRECT - could also send state
  const redirect = (query) => {
    browserHistory.push({
      pathname: '/Comics/Search',
      search: '?comic=' + query,
      state: {searchTerm: 'criteria'}
    });
  }

  const handleChange = (e) => {
    var query = this.refs.search.value.trim();

    if (e.key === 'Enter') {
      redirect(query);
    };
  }

  return ( 
    <div className="search-container">
      <input ref="search" 
             type="search" 
             placeholder="Search Comics"
             onKeyDown={handleChange} />
    </div>)
  }

}

export default SearchComponent
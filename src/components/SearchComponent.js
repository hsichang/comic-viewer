import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SearchComponent extends Component {
  redirect(query) {
    browserHistory.push({
      pathname: '/Comics/Search',
      search: '?comic=' + query,
      state: {searchTerm: 'criteria'}
    });
  }

  render() {

// TODO - donn't send if empty
// THIS IS HOW YOU REDIRECT - could also send state
  

  const handleChange = (e) => {
    const query = this.refs.search.value.trim();

    if (e.key === 'Enter') {
      this.redirect(query);
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
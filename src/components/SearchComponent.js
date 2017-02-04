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

  const handleChange = (e) => {
    const query = this.refs.search.value.trim();

    if (e.key === 'Enter' && query !== "") {
      this.redirect(query);
      this.props.search(query);
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
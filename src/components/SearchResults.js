import React, { Component } from 'react';
import { Link } from 'react-router';

class SearchResults extends Component {
  render() {
    const { items } = this.props;

    return (
      <div className="search-results-component">
        {items.map( (item, index) => (
          <div key={index} className="search-result-card">
            <div className="search-result-card-header">
              <div className="title">
                <Link to={'/Comic/' + item.links.self.split("/").slice(4)}>
                  {item.attributes.title}
                </Link>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <section>
              <span className="status">Status: </span>
              <span>{item.attributes.finished ? 'Completed' : 'Ongoing'}</span>
            </section>
          </div>
        ))}
      </div> 
    )
  }
}

export default SearchResults;
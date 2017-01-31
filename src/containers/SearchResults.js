import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchComponent from '../components/SearchComponent';
import Masthead from '../components/Masthead';

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchTerm: ''
    }
  }

  componentWillMount() {
    const searchTerm = this.props.location.query.comic;
    this.setState({
      searchTerm: searchTerm
    })
    this.getData(searchTerm);
  }

  componentWillReceiveProps(nextProps) {
    const searchTerm=nextProps.location.query.comic;
    this.setState({
      searchTerm: searchTerm  
    });
    this.getData(searchTerm);
  }

  getData(searchTerm) {
    fetch("http://localhost:4000/comics-api/comics/search/" + searchTerm)
      .then(response => response.json())
      .then((response) => this.setState({items: response.data}))  
  }

  render() {
    const results = this.state.items;
    return (

      <div className="search-results-container">
        <header>
          <Masthead />
          <SearchComponent />
        </header>
        
        <div className="search-results-component">
          {results.map( (result, index) => (
            <div key={index} className="search-result-card">
              <div className="search-result-card-header">
                <div className="title">
                  <Link to={'/Comic/' + result.links.self.split("/").slice(4)}>
                    {result.attributes.title}
                  </Link>
                </div>
              </div>
              <div>
                <hr />
              </div>
              <section>
                <span className="status">Status: </span>
                <span>{result.attributes.finished ? 'Completed' : 'Ongoing'}</span>
              </section>
            </div>
          ))}
        </div>
      </div>
    )
  }
} 

export default SearchResults
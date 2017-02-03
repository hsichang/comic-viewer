import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchComponent from '../components/SearchComponent';
import Masthead from "../components/Masthead";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchResults from "../components/SearchResults";

class ListAllComics extends Component {
  componentWillMount() {
    this.setState({
      items: [],
      next: "",
      previous: "",
      last: ""
    })

    const page = this.props.params.page || 1;
    this.getData(page);
  }

  componentWillReceiveProps(nextProps) {
    const page = nextProps.params.page;
    this.getData(page);
  }

  getData(page) {
    fetch("http://localhost:4000/comics-api/comics/" + page)
      .then(response => response.json())
      .then((response) => this.setState({items: response.data,
                                         next: response.links.next,
                                         previous: response.links.previous,
                                         last: response.links.last}))
  }

  render() {
    const { next, previous, last, items } = this.state;

    return (
      <div className="list-all-comics-container">
        <header>
          <Masthead />
          <SearchComponent />
        </header>

        <Breadcrumbs next={next}
                     previous={previous}
                     index={this.props.params.page || 0}
                     last={last} />



        {/* 
          // TODO - break this into a component 
          // TODO: break search card into a component
          // TODO - repeat in SearchResults.js
        */}
        <SearchResults items={items} />


        <Breadcrumbs next={next}
                     previous={previous}
                     index={this.props.params.page || 0}
                     last={last} />


      </div>
    )
  }
}



export default ListAllComics;
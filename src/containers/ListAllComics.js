import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchComponent from '../components/SearchComponent';
import Masthead from "../components/Masthead";
import Utilities from "../components/Utilities";

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
                     index = {this.props.params.page || 0}
                     last={last} />



        {/* 
          // TODO - break this into a component 
          // TODO: break search card into a component
          // TODO - repeat in SearchResults.js
        */}
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
      </div>
    )
  }
}

class Breadcrumbs extends Component {
  render() {
    const { next, previous, last, index } = this.props;

    const getIssue = (url) => {
      return parseInt(url.split("/").slice(4), 10);
    };

    const lastId = getIssue(last);
    const nextId = getIssue(next);

    const breadcrumbs=(start, end, index, fn) => {
      while(start++ <= end) { 
        fn(start - 1, index); 
      };
    }
    
    const start = (index, last_id) => {
      if (index < 3) {
        return 1;
      } 
      if (index > last_id - 2) {
        return last_id-4;
      }
      return index - 2;
    }
    
    const range = (start, count) => {
      return Array.apply(0, Array(count))
        .map(function (element, index) { 
          return index + start;  
      });
    }


// TODO - finish handle click - is this the way to do it?
//        - or do i put something in to the state to rerender

// http://stackoverflow.com/questions/36298011/react-router-is-not-re-rendering-when-i-click-a-new-link
{/* 
    const handleClick = () => {
      browserHistory.push({
        pathname: "/Comics/" + this.props.params.id
        + "/"
        + this.props.params.issue
        + "/"
        + next_page
      });
    }
    */}

    const arr = range(start(index, lastId), 5);
    return(
      <div className="breadcrumbs-container">
        {arr.map( (i, idx) => (
          <Link to={'/Comics/'+i} key={i}>
            <div className={ (i === parseInt(this.props.index, 10)) ? "breadcrumb active" : "breadcrumb"}>
             {i}
            </div>
          </Link>))}
        <div className="next">
          <Link to={'/Comics/'+ (parseInt(index, 10)+1)}>
            Next
          </Link>
        </div>
      </div>
    )
  }

}



export default ListAllComics;
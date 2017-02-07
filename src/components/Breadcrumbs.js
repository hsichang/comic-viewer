import React, { Component } from 'react';
import { Link } from 'react-router';

class Breadcrumbs extends Component {
  render() {
    const { next, previous, index, searchByGenre } = this.props;

    const parsePage = (url) => {
      if (url) {
        return searchByGenre ? parseInt(url.split("/").slice(5), 10)
                              : parseInt(url.split("/").slice(4), 10);
      }
    }

    const getIssue = (url) => {
      let i = parsePage(url);
      return isNaN(i) ? 1 : i;
    };

    const lastId = () => {
      const last = this.props.last;
      if (last) { 
        return getIssue(last); 
      } else {
        return index
      }
    }

    const start = (index, last_id) => {
      if (index < 3) {
        return 1;
      } 
      if (index > last_id() - 2) {
        return last_id()-4;
      }
      return index - 2;
    }

    const range = (start, count) => {
      return Array.apply(0, Array(count))
        .map(function (element, index) { 
          return index + start;  
      });
    }

    const numberToDisplay = () => {
      if (!this.props.last) { 
        return (parseInt(index, 10) > 5) ? 5 : parseInt(index, 10);
      }
      if (parsePage(this.props.last) < 5) { 
        return parsePage(this.props.last) - (index-1)
      }  
      return 5
    }

    const arr = range(start(index, lastId), numberToDisplay());

    const constructUrl = (searchByGenre) => {
      return searchByGenre ? '/Comics/genres/' + this.props.params.name + "/" 
                           : '/Comics/'
    }

    return(
      <div className="breadcrumbs-container">
        {parseInt(index, 10) > 1 &&
          <div className="prev-next">
            <Link to={constructUrl(searchByGenre) + getIssue(previous)}>
              Prev
            </Link>
          </div>
        }
        {arr.map( (i, idx) => (
          <Link to={constructUrl(searchByGenre) + i} key={i}>
            <div className={ (i === parseInt(this.props.index, 10)) ? "breadcrumb active" : "breadcrumb"}>
             {i}
            </div>
          </Link>))}
        <div className="prev-next">
          { (next) &&
            <Link to={constructUrl(searchByGenre) + getIssue(next)}>
              Next
            </Link>
          }
        </div>
      </div>
    )
  }
}

export default Breadcrumbs;
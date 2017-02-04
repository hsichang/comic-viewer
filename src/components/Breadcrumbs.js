import React, { Component } from 'react';
import { Link } from 'react-router';

class Breadcrumbs extends Component {
  render() {
    const { next, previous, last, index } = this.props;

    const getIssue = (url) => {
      let i = parseInt(url.split("/").slice(4), 10);
      return isNaN(i) ? 1 : i;
    };

    const lastId = getIssue(last);

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

    const arr = range(start(index, lastId), 5);

    return(
      <div className="breadcrumbs-container">
        {parseInt(index, 10) > 1 &&
          <div className="prev-next">
            <Link to={'/Comics/'+ getIssue(previous)}>
              Prev
            </Link>
          </div>
        }
        {arr.map( (i, idx) => (
          <Link to={'/Comics/'+i} key={i}>
            <div className={ (i === parseInt(this.props.index, 10)) ? "breadcrumb active" : "breadcrumb"}>
             {i}
            </div>
          </Link>))}
        <div className="prev-next">
          <Link to={'/Comics/'+ getIssue(next)}>
            Next
          </Link>
        </div>
      </div>
    )
  }
}

export default Breadcrumbs;
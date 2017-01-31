import React, { Component } from 'react';
import { Link } from 'react-router';

class Masthead extends Component {

  render() {
    return (
      <div className="masthead">
        <Link to="/">
          read comics
        </Link>
      </div>
    )
  }
}

export default Masthead;
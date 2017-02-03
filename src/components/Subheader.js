import React, { Component } from 'react';
import { Link } from 'react-router';

class Subheader extends Component {
  render() {
    return (
      <div className="sub-header-container">
        <div className="utilities-inner-container">
          <div className="utility">
            <span className="active">
              <Link to="/Comics/1">Comic List</Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Subheader;
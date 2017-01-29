import React, { Component } from 'react';
import ShowSinglePage from '../components/ShowSinglePage';

class ShowAllPages extends Component {
  render() {
    const { name, issue, pages} = this.props;

    return (
      <div className="all-pages-container">
        {pages.map( (page, index) => (
          <ShowSinglePage name={name}
                            issue={issue}
                            current_page={index} 
                            src={page} 
                            key={index} />))}
      </div>
    )
  }
}

export default ShowAllPages;
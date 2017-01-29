import React, { Component } from 'react';

class ShowSinglePage extends Component {
  render () {
    const { current_page, src, name, issue } = this.props;

    return (
      <div className="comic-image">
        <img src={src} 
             alt={name + "/" + issue + "/" + current_page}
             className="page-image" />
      </div>
    )
  }
}

export default ShowSinglePage;
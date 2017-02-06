import React, { Component } from 'react';
import { Link } from 'react-router';

class DetailIssueListComponent extends Component {
  render() {
    const { included } = this.props;
    const issues = included.filter(function (el) {
      return el.type === "issues";
    })

    return (
      <div className="detail-issue-list-container">
        <ul>
          {issues.map( (item, index) => (
            <li key={index}>
              <span className="comic-issue">
                <Link to={'/Comic/' 
                            + this.props.params.id
                            + '/' 
                            + item.links.self.split('/').slice(5)
                            + '/0'}>
                  {item.attributes.title}
                </Link>
              </span>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

export default DetailIssueListComponent;
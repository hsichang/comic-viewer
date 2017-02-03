import React, { Component } from 'react';
import { Link } from 'react-router';

class Utilities extends Component {
  constructor(props) {
    super(props);
    this.state= {
      allPages: props.allPages
    }
  }

  handlePageViewStyle = (allPages) => {
    this.props.onSelectAllPages(!this.state.allPages);
    this.setState({allPages: !this.state.allPages});
  }

  render() {
    const issue = this.props.issue;
    const issue_formatted = (issue) => {
      return issue.split("-").slice(1).join(" ");
    };

    return (
      <div className="utilities-container">
        <div className="utilities-inner-container">
          <div className="utility">
            View: 
            <span className="active" onClick={this.handlePageViewStyle}>
              {this.state.allPages ? " All Pages" : " One Page" }
            </span>
          </div>
          <div className="utility">
            Issue:  
            <span className="active">
               {issue_formatted(issue)}
            </span>
          </div>
          <div className="utility">
            {/*
            <Dropdown />           
            */}
          </div>
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

{/* 
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <form>
        <label>
          Issue:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </form>
    );
  }
}
*/}
export default Utilities;
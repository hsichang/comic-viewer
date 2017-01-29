import React, { Component } from 'react';
import SearchComponent from '../components/SearchComponent';
import ShowSinglePage from '../components/ShowSinglePage';
import ShowAllPages from '../components/ShowAllPages';
import { browserHistory } from 'react-router';

// TODO: 
// Add pages in the route
// X - Add a default to page 0
// 

class ComicView extends Component {
  constructor() {
    super();
    this.state = {
      pages: [],
      allPages: false,
      included: []
    }
  }
  
  componentWillMount () {
    const id = this.props.params.id;
    const issue = this.props.params.issue;

    fetch("http://localhost:4000/comics-api/comic/" + id + "/" + issue)
      .then(response => response.json())
      .then((response) => this.setState({pages: response.data.attributes.pages}))    
  
    fetch("http://localhost:4000/comics-api/comic/" + id)
      .then(response => response.json())
      .then((response) => this.setState({included: response.included}))
  }

  render () {
    const current_page = this.props.params.page;
    const issue = this.props.params.issue;
    
    const issue_formatted = (issue) => {
      return issue.split("-").slice(1).join(" ");
    };

    const issues = this.state.included.filter(function (el) {
      return el.type === "issues";
    });
    console.log(issues);
    // const page_count = this.state.pages.length;
    // console.log(page_count);
    // TODO: bad naming of variables
    // TODO: consolidate page change
    // TODO: add search to page
    // TODO: validate pages don't go out of bounds
    

    // TODO: add all pages view
    const next_page = parseInt(current_page, 10) + 1;
    const prev_page = parseInt(current_page, 10) - 1;
    const nextPage = () => {
      browserHistory.push({
        pathname: "/Comic/" + this.props.params.id
        + "/"
        + this.props.params.issue
        + "/"
        + next_page
      });
    }
    const prevPage = () => {
      browserHistory.push({
        pathname: "/Comic/" + this.props.params.id
        + "/"
        + this.props.params.issue
        + "/"
        + prev_page
      });
    }
    const toggleAllPages = () => {
      this.setState({allPages: !this.state.allPages});
    }

    return (

      <div className="comic-viewer">
        
        <header>
          <div className="masthead">
            read comics
          </div>
          <SearchComponent />
        </header>

        {/* 
          TODO: Break this into a component - utilities
        */}
        <div className="utilities-container">
          <div className="utilities-inner-container">
            <div className="utility">
              View: 
              <span className="active" onClick={toggleAllPages}>
                {this.state.allPages ? " All Pages" : " One Page" }
              </span>
            </div>

            {/*
              TODO: break this out into a dropdown utility
            */}
            <div className="utility">
              Issue:  
              <span className="active" onClick={toggleAllPages}>
                 {issue_formatted(issue)}
              </span>
            </div>
            <div className="utility">
              <Dropdown />
              
            </div>
            <div className="utility">
              <span className="active">
                Comic List
              </span>
            </div>
          </div>
        </div>

        
        
        

        <main>
          {this.state.allPages ?
            <ShowAllPages name={this.props.params.id}
                          issue={this.props.params.issue}
                          pages={this.state.pages} />

            :
            <ShowSinglePage name={this.props.params.id}
                            issue={this.props.params.issue}
                            current_page={current_page} 
                            src={this.state.pages[current_page]}/>}
        </main>



        {!this.state.allPages &&
          <nav>
            <div className="arrow-left" onClick={prevPage}>
              Prev 
            </div>
            <div className="current-page">
              {(parseInt(current_page, 10) + 1)}
            </div>
            <div className="arrow-right" onClick={nextPage}>
              Next 
            </div>
          </nav>
        }
      </div>
    )
  }
}


class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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



export default ComicView;
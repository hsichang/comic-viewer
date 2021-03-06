import React, { Component } from 'react';
import SearchComponent from '../components/SearchComponent';
import ShowSinglePage from '../components/ShowSinglePage';
import ShowAllPages from '../components/ShowAllPages';
import { browserHistory } from 'react-router';
import Masthead from '../components/Masthead';
import Utilities from '../components/Utilities';
import { getComicPages } from '../api/comic-api.js';
import { connect } from 'react-redux';

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
    const { id, issue } = this.props.params;
    getComicPages(id, issue);
      
    // NOT using this yet -- this is for the menu to
    // change issues
    fetch("http://localhost:4000/comics-api/comic/" + id)
      .then(response => response.json())
      .then((response) => this.setState({included: response.included}))
  }

  handleAllPages = (showAllPages) => {
    this.setState({allPages: showAllPages});
  } 

  render () {
    const current_page = this.props.params.page;

    // const page_count = this.state.pages.length;
    // console.log(page_count);
    // TODO: bad naming of variables
    // TODO: consolidate page change
    // TODO: add search to page
    // TODO: validate pages don't go out of bounds
    

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

    return (
      <div className="comic-viewer">
        <header>
          <Masthead />
          <SearchComponent />
        </header>

        <Utilities  issue={this.props.params.issue}
                    allPages={this.state.allPages} 
                    onSelectAllPages={this.handleAllPages} />
        
        <main>
          {this.state.allPages ?
            <ShowAllPages name={this.props.params.id}
                          issue={this.props.params.issue}
                          pages={this.props.pages} />

            :
            <ShowSinglePage name={this.props.params.id}
                            issue={this.props.params.issue}
                            current_page={current_page} 
                            src={this.props.pages[current_page]}/>}
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

const mapStateToProps = function(store) {
  return {
    pages: store.comicReducer.pages,
    allPages: store.comicReducer.allPages
  }
}


export default connect(mapStateToProps)(ComicView);
import React, { Component } from 'react';
import { Link } from 'react-router';
import SearchComponent from '../components/SearchComponent';
import Masthead from '../components/Masthead';

class ComicDetail extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
      data: [],
      cover: '',
      attributes: [],
      included: [],
      relationships: {}
    }
  }

  // TODO:
  // WHY ISN'T EVERYTHING COMING IN FROM AJAX AT SAME TIME?
  // TODO;
  // Add all of the relationships tags,
  // TODO:
  // make relationships tags linkable
  componentWillMount() {
    const id = this.props.params.id;
    fetch("http://localhost:4000/comics-api/comic/" + id)
      .then(response => response.json())
      .then((response) => this.setState({ item: response,
                                          cover: response.data.links.cover,
                                          attributes: response.data.attributes,
                                          included: response.included,
                                          relationships: response.data.relationships
                                        }))
  }

  render() {
    // TODO change alt in img tag
    // TODO: cover image isn't eally working. Maybe do a second request
    // for the first comic in the series and take the first image
    //
    // the '/0' in the Link is a bad hack - but keep for now

    // const comic = this.state.item;
    const attrs = this.state.attributes;
    console.log(this.state);
    // const cover = this.state.cover;       // doesn't work - API side

    // TODO: is this the best place to do data mutation?
    // TODO: convert to es6
    // Do this to remove items in the array that aren't 
    // pointers to comic issues
    const issues = this.state.included.filter(function (el) {
      return el.type === "issues";
    })

    return(
      <div className="comic-detail">

        <header>
          <Masthead />
          <SearchComponent />
        </header>
        <main>
          <div className="title">
            {/* make this into a link*/}

            {attrs.title}
          </div>
          {/* 
          <div className="cover">
            <img src={cover} alt="Cover" className="cover-img" />
          </div>
          */}
          <div className="detail-text">
            <span className="bold">Publication Date: </span> 
            <span className=" ">{attrs.publication_date} </span>
          </div>
          <div className="detail-text">
            <span className="bold">Status: </span> 
            <span className=" ">{attrs.status}</span> 
          </div>
          <div className="summary">
            <div className=" detail-text bold">
              Summary:
            </div>
            <div className="detail-text">
              {attrs.summary}
            </div>
          </div>
        </main>

        <hr />

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
      </div>
    )
    
    
  }
}

export default ComicDetail;
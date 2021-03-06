import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import SearchComponent from '../components/SearchComponent';
import Masthead from "../components/Masthead";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchResults from "../components/SearchResults";
import { getComicListByPage } from '../api/comic-api.js';
import { connect } from 'react-redux';
import Genres from '../data/genres.json';

class ListAllComics extends Component {
  componentWillMount() {
    const page = this.props.params.page || 1;
    getComicListByPage(page);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.params.page !== this.props.params.page) {
      const page = nextProps.params.page;
      getComicListByPage(page);
    }
  }

  redirect(genre) {
    browserHistory.push({
      pathname: '/Comics/genres/' + genre +'/1'
    });
  }



  render() {
    const { next, previous, last, items } = this.props;
    const genres = Genres.genres;
    
    return (
      <div className="list-all-comics-container">
        <header>
          <Masthead />
          <SearchComponent />
        </header>

        <Breadcrumbs next={next}
                     previous={previous}
                     index={this.props.params.page || 0}
                     last={last} />

        <div className="main-container">
          <SearchResults items={items} />

        {/* TODO: break this out into a component */}
          <div className="sidebar-container">
            <div className="header">
              Search by genre
            </div>
            <div className="body">
              {genres.map( (genre, index) => (
                <div key={index} className="genre-link">
                  <a href="#" onClick={() => this.redirect(genre)}>
                    {genre}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Breadcrumbs next={next}
                     previous={previous}
                     index={this.props.params.page || 0}
                     last={last} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    items: store.comicReducer.items,
    next: store.comicReducer.next,
    previous: store.comicReducer.previous,
    last: store.comicReducer.last
  }
}

export default connect(mapStateToProps)(ListAllComics);
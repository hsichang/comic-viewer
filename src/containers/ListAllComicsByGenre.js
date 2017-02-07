import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import SearchComponent from '../components/SearchComponent';
import Masthead from "../components/Masthead";
import Breadcrumbs from "../components/Breadcrumbs";
import SearchResults from "../components/SearchResults";
import { getComicListByGenreAndPage } from '../api/comic-api.js';
import { connect } from 'react-redux';
import Genres from '../data/genres.json';
import Subheader from '../components/Subheader';

class ListAllComicsByGenre extends Component {
  componentWillMount() {
    const name = this.props.params.name;
    const page = this.props.params.page || 1;
    getComicListByGenreAndPage(name, page);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.page !== this.props.params.page) {
      const name = nextProps.params.name;
      const page = nextProps.params.page || 1;
      getComicListByGenreAndPage(name, page);
    }
  }

  redirectByGenre(genre) {
    browserHistory.push({
      pathname: '/Comics/genres/' + genre +'/1'
    });
  }

  render() {
    const { items } = this.props;
    const { genres }  = Genres;

    return (
      <div className="list-all-comics-container">
        <header>
          <Masthead />
          <SearchComponent />
        </header>
        <Subheader />

        <Breadcrumbs {...this.props}
                     index={this.props.params.page || 1} />

        <div className="main-container">
          <div className="flex-column-container">
            <div className="search-by-container">
              Genre: {this.props.params.name}
            </div>
            <SearchResults items={items} />
          </div>

        {/* TODO: break this out into a component */}
          <div className="sidebar-container">
            <div className="header">
              Search by genre
            </div>
            <div className="body">
              {genres.map( (genre, index) => (
                <div key={index} className="genre-link">
                  <a href="#" onClick={() => this.redirectByGenre(genre)}>
                    {genre}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Breadcrumbs {...this.props}
                     index={this.props.params.page || 1} />

      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    items: store.comicReducer.items,
    next: store.comicReducer.next,
    previous: store.comicReducer.previous,
    last: store.comicReducer.last,
    searchByGenre: store.comicReducer.searchByGenre
  }
}

export default connect(mapStateToProps)(ListAllComicsByGenre);
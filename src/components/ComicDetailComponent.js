import React, { Component } from 'react';
    // TODO change alt in img tag
    // TODO: cover image isn't eally working. Maybe do a second request
    // for the first comic in the series and take the first image
    
class ComicDetailComponent extends Component {
  render() {
    const { attrs, relationships } = this.props;
    const { genres, publisher, writer, artist } = relationships;
console.log(this.props)
    return (
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
          <span className="bold">Genres: </span> 
          {genres.map( (genre, index) => (
            <span key={index} className="genre">{genre.id}, </span>
          ))}
        </div>
        <div className="detail-text">
          <span className="bold">Publisher: </span> 
          <span className=" ">{publisher.id} </span>
        </div>
        <div className="detail-text">
          <span className="bold">Writer: </span> 
          <span className=" ">{writer.id} </span>
        </div>
        <div className="detail-text">
          <span className="bold">Artist: </span> 
          <span className=" ">{artist.id} </span>
        </div>
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
    )
  }
}

export default ComicDetailComponent;
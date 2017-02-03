import React, { Component } from 'react';
import SearchComponent from '../components/SearchComponent';
import Masthead from "../components/Masthead";
import Subheader from '../components/Subheader';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Masthead />
          <SearchComponent />
        </header>
        <Subheader />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import SearchComponent from '../components/SearchComponent';
import Masthead from "../components/Masthead";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Masthead />
          <SearchComponent />
        </header>
      </div>
    );
  }
}

export default App;

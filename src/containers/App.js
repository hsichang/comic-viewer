import React, { Component } from 'react';
import SearchComponent from '../components/SearchComponent';


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className="App">
        <SearchComponent />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import FlatList from './flast-list';
import flats from '../../data/flat';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <FlatList className="flat-list" flats={flats} />
        <div className="map-container" />
      </div>
    );
  }
}

export default App;

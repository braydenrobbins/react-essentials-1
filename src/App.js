import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkbox from './Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Checkbox firstName='Brayden' version={16} />
      </div>
    );
  }
}


export default App;

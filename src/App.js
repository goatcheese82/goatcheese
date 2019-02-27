import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Goatcheese from './components/Posts';
//import store from './store'

class App extends Component {
  render() {
    return (
      <Provider >
        <div className="App">
          <Goatcheese />

        </div>
      </Provider>
    );
  }
}

export default App;

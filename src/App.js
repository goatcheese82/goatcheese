import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Goatcheese from './components/Goatcheese';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Goatcheese />

        </div>
      </Provider>
    );
  }
}

export default App;

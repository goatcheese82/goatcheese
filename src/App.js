import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import Postform from './components/Postform';
import {createStore, applyMiddleware } from 'redux';
import store from './store'

//const store = createStore(() => [], {}, applyMiddleware());


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          < Postform />
          < Posts />

        </div>
      </Provider>
    );
  }
}

export default App;

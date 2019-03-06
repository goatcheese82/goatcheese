import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import Postform from './components/Postform';
import store from './store'
import Nav from './components/Nav';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className='blog'>
            <div className='post-container'>
              < Posts />
            </div>
            <div className='form-container'>
              < Postform />
            </div>
          </div>
          <nav>
            <div>
            < Nav />
            </div>
          </nav>
        </div>
      </Provider>
    );
  }
}

export default App;

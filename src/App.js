import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Register from './Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UsersPage from './UsersPage';
import Nav from './components/Nav';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Route path="/" component={Nav} />
            <Route exact path="/thoughts" component={ThoughtsPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/user" component={UsersPage} />
            <Route exact path="/home" component={Home} />
          </React.Fragment>
        </Router>
        
      </div>
    );
  }
}

export default App;

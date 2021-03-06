import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ThoughtsPage from './_thoughts/ThoughtsPage'
import Register from './Register';
import UsersPage from './_users/UsersPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import UserLogin from './_users/UserLogin';



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
            <Route exact path="/login" component={UserLogin} />
          </React.Fragment>
        </Router>
        < Footer />
        
      </div>
    );
  }
}

export default App;

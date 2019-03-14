import React, { Component } from 'react'
import UserForm from './_users/UserForm'
import { Provider } from 'react-redux';
import store from './store'



class Register extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <div className='form-container'>
              < UserForm />
            </div>
          </div>
      </Provider>
    );
  }
}

export default Register;

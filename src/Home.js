import React, { Component } from 'react'
import Posts from './_thoughts/Posts';
import Postform from './_thoughts/Postform';
import Users from './_users/Users';
import UserForm from './_users/UserForm';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className='blog'>
            <div className='post-container'>
              < Posts />
            </div>
            <div className='form-container'>
              < Postform />
            </div>
          </div>
          <div className='form-container'>
             < Users />
          </div>
          <div className='form-container'>
          < UserForm />
          </div>

        </div>
      </div>
    )
  }
}

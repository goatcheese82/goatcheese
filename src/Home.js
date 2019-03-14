import React, { Component } from 'react'
import Posts from './_thoughts/Posts';
import PostForm from './_thoughts/PostForm';
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
              < PostForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

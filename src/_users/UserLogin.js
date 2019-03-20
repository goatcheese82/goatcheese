import React, { Component, PropTypes } from 'react'

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {

  }



  render() {
    return (
      <div className='login-container'>

        <form onSubmit={this.onSubmit}>
          <div className='login-field'>
            <label>Username:</label>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.onChange} />
          </div>
          <div className='login-field'>
            <label>Password:</label>
            <input
              type='text'
              name='password'
              value={this.state.password}
              onChange={this.onChange} />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default UserLogin;
import React, { Component } from 'react';
import { newUser } from '../actions/userActions';
import { connect } from 'react-redux';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const user= {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        this.props.newUser(user)
        this.setState({
            name: '',
            username: '',
            email: '',
            password: ''
        })

    }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.onSubmit}>
            <div className='form-field'>
                <label>Name: </label>
                <input type='text' name='name' value={this.state.name} onChange={this.onChange}/>
            </div>
            <div className='form-field'>
                <label>Username: </label>
                <input type='text' name='username' value={this.state.username} onChange={this.onChange}></input>
            </div>
            <div className='form-field'>
                <label>Email: </label>
                <input type='text' name='email' value={this.state.email} onChange={this.onChange}/>
            </div>
            <div className='form-field'>
                <label>Password: </label>
                <input type='password' name='password' value={this.state.password} onChange={this.onChange}></input>
            </div>
            <button type='submit'>Submit</button>

        </form>
      </div>
    )
  }
}

export default connect(null, { newUser })(UserForm);

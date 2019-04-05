import React, { Component } from 'react';
import { newUser } from '../actions/userActions';
import { connect } from 'react-redux';
import FileInput from '../_helpers/fileInput';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                username: '',
                email: '',
                password: '',
                image: null
            }

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            image: this.state.image
        };
        this.props.newUser(user)
        debugger
        this.setState({
            name: '',
            username: '',
            email: '',
            password: '',
            image: ''
        })
    }

    fileSubmit = (e) => {
        e.preventDefault()
        this.setState( { image: this.fileInput.current.files[0] })
        console.log(this.state.image)
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                < FileInput />
                <form onSubmit={this.onSubmit}>
                    <div className='form-field'>
                        <label>Name: </label>
                        <input
                            type='text'
                            name='name'
                            value={this.state.name}
                            onChange={this.onChange} />
                    </div>
                    <div className='form-field'>
                        <label>Username: </label>
                        <input
                            type='text'
                            name='username'
                            value={this.state.username}
                            onChange={this.onChange}>
                        </input>
                    </div>
                    <div className='form-field'>
                        <label>Email: </label>
                        <input
                            type='text'
                            name='email'
                            value={this.state.email}
                            onChange={this.onChange} />
                    </div>
                    <div className='form-field'>
                        <label>Password: </label>
                        <input
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.onChange}>
                        </input>
                    </div>
                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

export default connect(null, { newUser })(UserForm);

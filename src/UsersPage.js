import React, { Component } from 'react';
import Users from './_users/Users';
import UserForm from './_users/UserForm'



class UserPage extends Component {
    render() {
        return (
            <div className='App'>
                <div className='blog'>
                    <div className='post-container'>
                        < Users />
                    </div>
                    <div className='form-container'>
                        < UserForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPage;

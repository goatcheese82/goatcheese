import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Users from './_users/Users';
import UserForm from './_users/UserForm'
import store from './store'



class UserPage extends Component {
    render() {
        return (
            <Provider store={store}>
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
            </Provider>
        );
    }
}

export default UserPage;

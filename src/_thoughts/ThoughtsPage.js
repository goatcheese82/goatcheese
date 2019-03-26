import React, { Component } from 'react';
import Posts from './Posts';
import PostForm from './PostForm';

export default class ThoughtsPage extends Component {
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

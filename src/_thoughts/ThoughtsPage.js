import React from 'react';
import Posts from './Posts';
import PostForm from './PostForm';

const ThoughtsPage = () => (
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


export default ThoughtsPage
import { postActions } from './types';

export const fetchPosts = () => dispatch => {
        fetch('http://localhost:3001/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: postActions.FETCH_POSTS,
            payload: posts
        })); 
}

export const newPost = postData => dispatch => {
    fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: postActions.NEW_POST,
            payload: post
        }));
}
import { userTypes } from './types'

export const fetchUsers = () => dispatch => {
    fetch('http://desolate-woodland-34365.herokuapp.com/users')
    .then(res => res.json(), console.log())
    .then(users => dispatch({
        type: userTypes.FETCH_USERS,
        payload: users
    })); 
}

export const newUser = userData => dispatch => {
fetch('http://desolate-woodland-34365.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => dispatch({
        type: userTypes.NEW_USER,
        payload: user
    }));
}


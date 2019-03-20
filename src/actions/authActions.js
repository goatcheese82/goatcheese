import { authTypes } from './types'

function requestLogin(creds) {
    return {
        type: authTypes.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user) {
    return {
        type: authTypes.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}

function loginError(message) {
    return {
        type: authTypes.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

export const loginUser = (creds) => dispatch => {
    dispatch(requestLogin(creds))
    return fetch('http://localhost:3001/sessions/create', {
        method: 'Post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(creds)
    })
        .then(res => res.json()
        .then(user => ({ user, res })))
        .then(({ user, res })  => {
            if (!res.ok) {
                dispatch(loginError(user.message))
                return Promise.regect(user)
            }
            else {
                localStorage.setItem('id_token', user.id_token)
                localStorage.setItem('id_token', user.access_token)
                dispatchEvent(receiveLogin(user))
            }
        }).catch(err => console.log("Error: ", err))
}
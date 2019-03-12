export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, passord) {
    return dispatch => {
        dispatchEvent(request({ username }));
        
    }
}
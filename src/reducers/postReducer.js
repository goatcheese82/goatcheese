import { postActions } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case postActions.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case postActions.NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
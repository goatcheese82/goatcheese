import { postTypes} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case postTypes.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case postTypes.NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
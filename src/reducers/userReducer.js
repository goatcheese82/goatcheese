import { userTypes} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case userTypes.FETCH_USERS:
            return {
                ...state,
                items: action.payload
            };
        case userTypes.NEW_USER:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}
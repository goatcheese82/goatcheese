import { postTypes } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  filter: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case postTypes.FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case postTypes.NEW_POST:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case postTypes.FILTER_BY:
    console.log('fired')
      return {
        ...state,
        items: state.items.slice().sort(function(a, b) {
          let titleA = a.content.toLowerCase(),
            titleB = b.content.toLowerCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        })
      };
    case postTypes.DELETE_POST:
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter(post => post.id !== action.payload.id)
      };

    default:
      return state;
  }
}

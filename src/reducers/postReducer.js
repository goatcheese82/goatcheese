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
      const filter = action.payload;
      if (filter === "alpha") {
        return {
          ...state,
          items: state.items.slice().sort(function(a, b) {
            let titleA = a.content.toLowerCase(),
              titleB = b.content.toLowerCase();
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
          }),
          filter: action.payload
        };
      };
      if (filter === "date") {
        return {
          ...state,
          items: state.items.slice().sort(function(a, b) {
            let dateA = new Date(a.created_at),
            dateB = new Date(b.creted_at);
            return dateB > dateA ? -1 : 1;
          }),
          filter: action.payload
        };
      }

    case postTypes.DELETE_POST:
      return {
        ...state,
        items: state.items.filter(post => post.id !== action.payload.id)
      };

    default:
      return state;
  }
}

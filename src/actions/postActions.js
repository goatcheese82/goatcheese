import { postTypes } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("http://desolate-woodland-34365.herokuapp.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: postTypes.FETCH_POSTS,
        payload: posts
      })
    );
};

export const newPost = postData => dispatch => {
  fetch("http://desolate-woodland-34365.herokuapp.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: postTypes.NEW_POST,
        payload: post
      })
    );
};

export const deletePost = id => dispatch => {
  fetch(`http://desolate-woodland-34365.herokuapp.com/posts/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: postTypes.DELETE_POST,
        payload: post
      })
    );
};

export const getFilteredPosts = filter => dispatch => dispatch({
  type: postTypes.FILTER_BY,
  payload: filter
})

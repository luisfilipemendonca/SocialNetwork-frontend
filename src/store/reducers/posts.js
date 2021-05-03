import * as actionTypes from '../actionTypes';

const initialState = {
  posts: [],
};

const fetchPosts = (state, payload) => {
  const updatedState = { ...state };
  updatedState.posts = payload;
  return updatedState;
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POST:
      return fetchPosts(state, action.payload);
    default:
      return state;
  }
};

export default PostsReducer;

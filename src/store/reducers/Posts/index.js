import * as actionTypes from '../../../constants/ActionTypes';

const initialState = {
  isLoading: false,
  posts: [],
};

const fetchPostsSuccess = (state, payload) => {
  const stateCopy = { ...state };
  stateCopy.posts = payload;
  return stateCopy;
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action.payload);
    default:
      return state;
  }
};

export default PostsReducer;

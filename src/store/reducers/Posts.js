import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
  isLoading: false,
  data: null,
};

const fetchPostsStart = (state) => {
  const updatedState = { ...state };
  updatedState.isLoading = true;
  return updatedState;
};

const fetchPostsSuccess = (state, payload) => {
  const updatedState = { ...state };
  updatedState.data = payload;
  updatedState.isLoading = false;
  return updatedState;
};

const addLike = (state, payload) => {
  const { postId } = payload;
  const updatedState = { ...state, data: [...state.data] };
  const postIndex = updatedState.data.findIndex((post) => post.id === postId);
  updatedState.data[postIndex].alreadyLiked = true;
  updatedState.data[postIndex].liked = true;
  updatedState.data[postIndex].Likes.push(payload);
  return updatedState;
};

const deleteLike = (state, payload) => {
  const { postId, userId } = payload;
  const updatedState = { ...state, data: [...state.data] };
  const postIndex = updatedState.data.findIndex((post) => post.id === postId);
  updatedState.data[postIndex].Likes = updatedState.data[
    postIndex
  ].Likes.filter((like) => like.userId !== userId);
  updatedState.data[postIndex].alreadyLiked = false;
  updatedState.data[postIndex].liked = false;
  return updatedState;
};

const addComment = (state, payload) => {
  const updatedState = { ...state, data: [...state.data] };
  const postIndex = updatedState.data.findIndex(
    (post) => post.id === payload.postId
  );
  updatedState.data[postIndex].Comments.unshift(payload.data);
  return updatedState;
};

const cleanPosts = (state) => {
  console.log('cleanup');
  const updatedState = { ...state };
  updatedState.data = null;
  return updatedState;
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_START:
      return fetchPostsStart(state);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action.payload);
    case actionTypes.ADD_LIKE:
      return addLike(state, action.payload);
    case actionTypes.DELETE_LIKE:
      return deleteLike(state, action.payload);
    case actionTypes.ADD_COMMENT:
      return addComment(state, action.payload);
    case actionTypes.CLEAN_POSTS:
      return cleanPosts(state);
    default:
      return state;
  }
};

export default PostsReducer;

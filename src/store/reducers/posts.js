import * as actionTypes from '../actionTypes';

const initialState = {
  posts: [],
};

const fetchPosts = (state, payload) => {
  const updatedState = { ...state };
  updatedState.posts = payload;
  return updatedState;
};

const addLike = (state, payload) => {
  const { postId, data } = payload;
  const updatedState = { ...state };
  const postIdx = updatedState.posts.findIndex((post) => post.id === postId);
  updatedState.posts[postIdx].liked = true;
  updatedState.posts[postIdx].alreadyLiked = true;
  updatedState.posts[postIdx].Likes.push(data);
  return updatedState;
};

const deleteLike = (state, payload) => {
  const { postId, userId } = payload;
  const updatedState = { ...state };
  const postIdx = updatedState.posts.findIndex((post) => post.id === postId);
  updatedState.posts[postIdx].liked = false;
  updatedState.posts[postIdx].alreadyLiked = false;
  updatedState.posts[postIdx].Likes = updatedState.posts[postIdx].Likes.filter(
    (like) => like.userId !== userId
  );
  return updatedState;
};

const fetchComments = (state, payload) => {
  const { hasMoreComments, comments, postId } = payload;
  const updatedState = { ...state };
  const postIdx = updatedState.posts.findIndex((post) => post.id === postId);
  updatedState.posts[postIdx].comments = (
    updatedState.posts[postIdx].comments || []
  ).concat(comments);
  updatedState.posts[postIdx].hasMoreComments = hasMoreComments;
  return updatedState;
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POST:
      return fetchPosts(state, action.payload);
    case actionTypes.ADD_LIKE:
      return addLike(state, action.payload);
    case actionTypes.DELETE_LIKE:
      return deleteLike(state, action.payload);
    case actionTypes.FETCH_COMMENTS:
      return fetchComments(state, action.payload);
    default:
      return state;
  }
};

export default PostsReducer;

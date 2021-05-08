import * as actionTypes from '../actionTypes';

const initialState = {
  posts: [],
  selectedPost: [],
};

const addLikeHandler = ({ state, postIdx, data }) => {
  const addLikeState = state;
  addLikeState[postIdx].liked = true;
  addLikeState[postIdx].alreadyLiked = true;
  addLikeState[postIdx].Likes.push(data);
  return addLikeState;
};

const deleteLikeHandler = ({ state, postIdx, userId }) => {
  const deleteLikeState = state;
  deleteLikeState[postIdx].liked = false;
  deleteLikeState[postIdx].alreadyLiked = false;
  deleteLikeState[postIdx].Likes = deleteLikeState[postIdx].Likes.filter(
    (like) => like.userId !== userId
  );
  return deleteLikeState;
};

const fetchPosts = (state, payload) => {
  const updatedState = { ...state };
  updatedState.posts = payload;
  return updatedState;
};

const addLike = (state, payload) => {
  const { postId, data, isProfile } = payload;
  const updatedState = { ...state };

  if (isProfile) {
    updatedState.selectedPost = addLikeHandler({
      state: updatedState.selectedPost,
      postIdx: 0,
      data,
    });
  } else {
    const postIdx = updatedState.posts.findIndex((post) => post.id === postId);
    updatedState.posts = addLikeHandler({
      state: updatedState.posts,
      postIdx,
      data,
    });
  }

  return updatedState;
};

const deleteLike = (state, payload) => {
  const { postId, userId, isProfile } = payload;
  const updatedState = { ...state };

  if (isProfile) {
    updatedState.selectedPost = deleteLikeHandler({
      state: updatedState.selectedPost,
      postIdx: 0,
      userId,
    });
  } else {
    const postIdx = updatedState.posts.findIndex((post) => post.id === postId);
    updatedState.posts = deleteLikeHandler({
      state: updatedState.posts,
      postIdx,
      userId,
    });
  }

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

const getPost = (state, payload) => {
  const updatedState = { ...state };
  updatedState.selectedPost = payload;
  return updatedState;
};

const clearPost = (state) => {
  const updatedState = { ...state };
  updatedState.selectedPost = [];
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
    case actionTypes.GET_POST:
      return getPost(state, action.payload);
    case actionTypes.CLEAR_POST:
      return clearPost(state);
    default:
      return state;
  }
};

export default PostsReducer;

import * as actionTypes from '../actionTypes';

const initialState = {
  posts: [],
  selectedPost: [],
  hasMorePosts: true,
  isPostsFetched: false,
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

const addCommentHandler = ({ state, postIdx, comment }) => {
  const addCommentState = state;
  addCommentState[postIdx].comments.unshift({
    ...comment,
    recentlyAdded: true,
  });
  addCommentState[postIdx].commentsOffset =
    (addCommentState[postIdx].commentsOffset || 0) + 1;
  return addCommentState;
};

const fetchCommentsHandler = ({
  state,
  postIdx,
  comments,
  hasMoreComments,
}) => {
  const commentsState = state;
  commentsState[postIdx].comments = (
    commentsState[postIdx].comments || []
  ).concat(comments);
  commentsState[postIdx].hasMoreComments = hasMoreComments;
  return commentsState;
};

const fetchPosts = (state, payload) => {
  const { hasMorePosts, posts } = payload;
  const updatedState = { ...state };

  updatedState.posts.push(...posts);

  updatedState.hasMorePosts = hasMorePosts;
  updatedState.isPostsFetched = true;
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
  const { hasMoreComments, comments, postId, isProfile } = payload;
  const updatedState = { ...state };

  if (isProfile) {
    updatedState.posts = fetchCommentsHandler({
      state: updatedState.selectedPost,
      postIdx: 0,
      comments,
      hasMoreComments,
    });
  } else {
    const postIdx = updatedState.posts.findIndex((post) => post.id === postId);
    updatedState.posts = fetchCommentsHandler({
      state: updatedState.posts,
      postIdx,
      comments,
      hasMoreComments,
    });
  }

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

  if (state.posts.length > 0) {
    updatedState.posts = [];
    updatedState.isPostsFetched = false;
    updatedState.hasMorePosts = true;
  }
  return updatedState;
};

const addComment = (state, payload) => {
  const { postId, comment, isProfile } = payload;
  const updatedState = { ...state };

  if (isProfile) {
    addCommentHandler({ state: updatedState.posts, postIdx: 0, comment });
  } else {
    const postIdx = updatedState.posts.findIndex((post) => post.id === postId);
    addCommentHandler({ state: updatedState.posts, postIdx, comment });
  }
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
    case actionTypes.ADD_COMMENT:
      return addComment(state, action.payload);
    default:
      return state;
  }
};

export default PostsReducer;

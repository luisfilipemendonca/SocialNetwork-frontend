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

const addLike = (state, payload) => {
  const stateCopy = { ...state, posts: [...state.posts] };
  const postIdx = stateCopy.posts.findIndex(
    (post) => post.id === payload.postId
  );

  stateCopy.posts[postIdx].Likes.push(payload);
  stateCopy.posts[postIdx].liked = true;

  return stateCopy;
};

const removeLike = (state, payload) => {
  const stateCopy = { ...state, posts: [...state.posts] };
  const postIdx = stateCopy.posts.findIndex(
    (post) => post.id === payload.postId
  );

  stateCopy.posts[postIdx].Likes = stateCopy.posts[postIdx].Likes.filter(
    (like) => like.userId !== payload.userId
  );
  stateCopy.posts[postIdx].liked = false;
  stateCopy.posts[postIdx].alreadyLiked = false;

  return stateCopy;
};

const addComment = (state, payload) => {
  const stateCopy = { ...state, posts: [...state.posts] };
  const postIdx = stateCopy.posts.findIndex(
    (post) => post.id === payload.postId
  );
  stateCopy.posts[postIdx].Comments.unshift(payload.commentData);

  return stateCopy;
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return fetchPostsSuccess(state, action.payload);
    case actionTypes.ADD_LIKE:
      return addLike(state, action.payload);
    case actionTypes.REMOVE_LIKE:
      return removeLike(state, action.payload);
    case actionTypes.ADD_COMMENT:
      return addComment(state, action.payload);
    default:
      return state;
  }
};

export default PostsReducer;

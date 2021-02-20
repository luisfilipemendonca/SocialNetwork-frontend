import * as actionTypes from '../../../constants/ActionTypes';

const initialState = {
  isLoading: false,
  posts: [],
};

const fetchPostsSuccess = (state, payload) => {
  console.log(payload);
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

  stateCopy.posts[postIdx].CommentData.comments.unshift(payload.commentData);
  stateCopy.posts[postIdx].CommentData.offset += 1;

  return stateCopy;
};

const fetchCommentsSuccess = (state, payload) => {
  const stateCopy = { ...state, posts: [...state.posts] };
  const postIdx = stateCopy.posts.findIndex(
    (post) => post.id === payload.postId
  );

  if (!stateCopy.posts[postIdx].CommentData.comments) {
    stateCopy.posts[postIdx].CommentData.comments = [];
  }

  const { commentsData } = payload;
  const { page, offset, count, comments } = commentsData;

  stateCopy.posts[postIdx].CommentData.page = page;
  stateCopy.posts[postIdx].CommentData.offset = offset;
  stateCopy.posts[postIdx].CommentData.count = count;
  stateCopy.posts[postIdx].CommentData.comments.push(...comments);

  return stateCopy;
};

const cleanComments = (state, payload) => {
  const stateCopy = { ...state, posts: [...state.posts] };
  const postIdx = stateCopy.posts.findIndex((post) => post.id === payload);

  stateCopy.posts[postIdx].CommentData = {};

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
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return fetchCommentsSuccess(state, action.payload);
    case actionTypes.CLEAR_COMMENTS:
      return cleanComments(state, action.payload);
    default:
      return state;
  }
};

export default PostsReducer;

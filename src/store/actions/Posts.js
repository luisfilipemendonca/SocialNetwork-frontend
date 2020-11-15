import * as actionTypes from '../../constants/ActionTypes';
import axios from '../../util/axios';

const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START,
  };
};

const fetchPostsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: data,
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsStart());

    try {
      const response = await axios('/posts');

      dispatch(fetchPostsSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addLike = (postId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/likes', { postId });

      dispatch({ type: actionTypes.ADD_LIKE, payload: response.data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteLike = (postId) => {
  return async (dispatch, getState) => {
    try {
      await axios.delete(`/likes/${postId}`);

      dispatch({
        type: actionTypes.DELETE_LIKE,
        payload: { postId, userId: getState().auth.userId },
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const addComment = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/comments', data);

      dispatch({
        type: actionTypes.ADD_COMMENT,
        payload: {
          data: { ...response.data, isRecentlyAdded: true },
          postId: data.postId,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
};

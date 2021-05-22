import axios from '../../util/axios';
import * as actionTypes from '../actionTypes';

export const fetchPosts = (page, isFollowing = false) => async (dispatch) => {
  if (page === 1) {
    dispatch({ type: actionTypes.START_PAGE_LOADING });
  }

  try {
    let response;

    if (isFollowing) {
      response = await axios(`/posts/following?page=${page}`);
    } else {
      response = await axios(`/posts?page=${page}`);
    }

    dispatch({
      type: actionTypes.FETCH_POST,
      payload: response.data,
    });

    if (page === 1) {
      dispatch({ type: actionTypes.STOP_PAGE_LOADING });
    }
  } catch (e) {
    // do something
  }
};

export const addLike = (postId, isProfile = false) => async (dispatch) => {
  try {
    const response = await axios.post('/likes', { postId });

    dispatch({
      type: actionTypes.ADD_LIKE,
      payload: { postId, data: response.data, isProfile },
    });
  } catch (e) {
    // do something
  }
};

export const deleteLike = (postId, isProfile = false) => async (
  dispatch,
  getState
) => {
  try {
    const { userId } = getState().user;

    await axios.delete(`/likes/${postId}`);

    dispatch({
      type: actionTypes.DELETE_LIKE,
      payload: { postId, userId, isProfile },
    });
  } catch (e) {
    // do something
  }
};

export const fetchComments = ({ postId, page, offset }, isProfile) => async (
  dispatch
) => {
  dispatch({ type: actionTypes.START_COMPONENT_LOADING });

  try {
    const response = await axios(
      `/comments/${postId}?page=${page}&offset=${offset}`
    );

    dispatch({
      type: actionTypes.FETCH_COMMENTS,
      payload: { ...response.data, postId, isProfile },
    });
    dispatch({ type: actionTypes.STOP_COMPONENT_LOADING });
  } catch (e) {
    // do something
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    const response = await axios(`/posts/${postId}`);

    dispatch({
      type: actionTypes.GET_POST,
      payload: response.data,
    });
  } catch (e) {
    // do soemthing
  }
};

export const clearPost = () => (dispatch) =>
  dispatch({ type: actionTypes.CLEAR_POST });

export const addComment = (data, postId, isProfile = false) => async (
  dispatch
) => {
  try {
    const response = await axios.post('/comments', { ...data, postId });

    dispatch({
      type: actionTypes.ADD_COMMENT,
      payload: { postId, comment: response.data, isProfile },
    });
  } catch (e) {
    // do something
  }
};

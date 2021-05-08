import axios from '../../util/axios';
import * as actionTypes from '../actionTypes';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: actionTypes.START_LOADING });

  try {
    const response = await axios('/posts');

    dispatch({ type: actionTypes.FETCH_POST, payload: response.data });
    dispatch({ type: actionTypes.STOP_LOADING });
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
  //  dispatch loading comments
  try {
    const response = await axios(
      `/comments/${postId}?page=${page}&offset=${offset}`
    );

    dispatch({
      type: actionTypes.FETCH_COMMENTS,
      payload: { ...response.data, postId, isProfile },
    });
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

export const clearPost = () => ({ type: actionTypes.CLEAR_POST });

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

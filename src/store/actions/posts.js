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

export const addLike = (postId) => async (dispatch) => {
  try {
    const response = await axios.post('/likes', { postId });

    dispatch({
      type: actionTypes.ADD_LIKE,
      payload: { postId, data: response.data },
    });
  } catch (e) {
    // do something
  }
};

export const deleteLike = (postId) => async (dispatch, getState) => {
  try {
    const { userId } = getState().user;

    await axios.delete(`/likes/${postId}`);

    dispatch({ type: actionTypes.DELETE_LIKE, payload: { postId, userId } });
  } catch (e) {
    // do something
  }
};

export const fetchComments = ({ postId, page, offset }) => async (dispatch) => {
  //  dispatch loading comments
  try {
    const response = await axios(
      `/comments/${postId}?page=${page}&offset=${offset}`
    );

    dispatch({
      type: actionTypes.FETCH_COMMENTS,
      payload: { ...response.data, postId },
    });
  } catch (e) {
    // do something
  }
};

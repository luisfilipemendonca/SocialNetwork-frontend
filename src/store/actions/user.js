import axios from '../../util/axios';
import * as actionTypes from '../actionTypes';

export const authenticate = (data, isLogging = false) => async (dispatch) => {
  dispatch({ type: actionTypes.START_COMPONENT_LOADING });

  try {
    let response;

    if (isLogging) {
      response = await axios.post('/token', data);
    } else {
      response = await axios.post('/users', data);
    }

    dispatch({ type: actionTypes.AUTHENTICATE, payload: response.data });
    dispatch({ type: actionTypes.STOP_COMPONENT_LOADING });
  } catch (e) {
    // do something
  }
};

export const updateUserPhoto = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.START_COMPONENT_LOADING });

  try {
    const headers = data ? { 'Content-Type': 'multipart/form-data' } : {};

    const response = await axios.put('/users', data, {
      headers,
    });

    dispatch({ type: actionTypes.UPDATE_USER, payload: response.data });
    dispatch({ type: actionTypes.STOP_COMPONENT_LOADING });
  } catch (e) {
    // do something
  }
};

export const addPost = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.START_COMPONENT_LOADING });
  try {
    const response = await axios.post('/posts', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch({ type: actionTypes.ADD_POST, payload: response.data });
    dispatch({ type: actionTypes.STOP_COMPONENT_LOADING });
  } catch (e) {
    // do something
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/posts/${postId}`);

    dispatch({ type: actionTypes.DELETE_POST, payload: postId });
  } catch (e) {
    // do something
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await axios.delete(`/users/${userId}`);

    dispatch({ type: actionTypes.LOGOUT });
  } catch (e) {
    // do something
  }
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

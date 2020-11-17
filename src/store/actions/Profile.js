import * as actionTypes from '../../constants/ActionTypes';
import axios from '../../util/axios';

const fetchProfileStart = () => {
  return {
    type: actionTypes.FETCH_PROFILE_START,
  };
};

const fetchProfileSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_PROFILE_SUCCESS,
    payload,
  };
};

export const fetchProfile = (userId) => {
  return async (dispatch) => {
    dispatch(fetchProfileStart());

    try {
      const response = await axios(`/users/${userId}`);

      dispatch(fetchProfileSuccess(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deletePost = (postId, history) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/posts/${postId}`);

      dispatch({ type: actionTypes.DELETE_POST, payload: postId });

      history.goBack();
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateUser = (data, history) => {
  return async (dispatch, getState) => {
    // dispatch start

    try {
      const { userId } = getState().auth;

      await axios.put(`/users/${userId}`, data);

      dispatch({ type: actionTypes.UPDATE_USER_SUCCESS, payload: data });

      history.goBack();
    } catch (e) {
      console.log(e);
    }
  };
};

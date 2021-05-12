import axios from '../../util/axios';
import * as actionTypes from '../actionTypes';

export const fetchUserData = (id, isProfile = false) => async (dispatch) => {
  try {
    const response = await axios(`/users/${id}`);

    if (isProfile) {
      dispatch({
        type: actionTypes.FETCH_USER_PROFILE,
        payload: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.FETCH_USER_DATA,
        payload: {
          posts: response.data.Posts,
          followers: response.data.Followers.followers,
          following: response.data.Followers.following,
        },
      });
    }
  } catch (e) {
    // do something
  }
};

export const addFollower = (followerId) => async (dispatch) => {
  try {
    const response = await axios.post('/followers', { followerId });

    dispatch({ type: actionTypes.ADD_FOLLOWING, payload: response.data[0] });
    dispatch({ type: actionTypes.ADD_FOLLOWER, payload: response.data[1] });
  } catch (e) {
    // do something
  }
};

export const deleteFollower = (followerId, userId) => async (dispatch) => {
  try {
    await axios.delete(`/followers/${followerId}`);

    dispatch({ type: actionTypes.DELETE_FOLLOWING, payload: followerId });
    dispatch({ type: actionTypes.DELETE_FOLLOWER, payload: userId });
  } catch (e) {
    // do something
  }
};

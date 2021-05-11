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
        type: actionTypes.FETCH_USER_POSTS,
        payload: response.data.Posts,
      });
    }
  } catch (e) {
    // do something
  }
};

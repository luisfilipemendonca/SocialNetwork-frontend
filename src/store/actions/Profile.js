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

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

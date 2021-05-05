import axios from '../../util/axios';
import * as actionTypes from '../actionTypes';

export const authenticate = (data, isLogging = false) => async (dispatch) => {
  dispatch({ type: actionTypes.START_LOADING_FORM });

  try {
    let response;

    if (isLogging) {
      response = await axios.post('/token', data);
    } else {
      response = await axios.post('/users', data);
    }

    dispatch({ type: actionTypes.AUTHENTICATE, payload: response.data });
    dispatch({ type: actionTypes.STOP_LOADING_FORM });
  } catch (e) {
    // do something
  }
};

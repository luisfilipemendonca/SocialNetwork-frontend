import axios from '../../util/axios';
import * as actionTypes from '../actionTypes';

export const login = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.START_LOADING_FORM });

  try {
    const response = await axios.post('/token', data);

    console.log(response);
    dispatch({ type: actionTypes.STOP_LOADING_FORM });
  } catch (e) {
    // do something
  }
};

export const register = (data) => async (dispatch) => {
  dispatch({ type: actionTypes.START_LOADING_FORM });

  try {
    const response = await axios.post('/users', data);

    console.log(response);
    dispatch({ type: actionTypes.STOP_LOADING_FORM });
  } catch (e) {
    // do something
  }
};

import * as actionTypes from '../../constants/ActionTypes';
import axios from '../../util/axios';

export const changeAuth = () => {
  return {
    type: actionTypes.CHANGE_AUTH,
  };
};

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
  };
};

const authFail = () => {
  return {
    type: actionTypes.AUTH_FAIL,
  };
};

export const register = (data, cleanHandler) => {
  return async (dispatch) => {
    dispatch(authStart());

    try {
      await axios.post('/users', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      cleanHandler();

      dispatch(registerSuccess());
    } catch (e) {
      console.log('Error:', e.error);
      dispatch(authFail());
    }
  };
};

const loginSuccess = (data) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

export const login = (data, cleanHandler) => {
  return async (dispatch) => {
    dispatch(authStart());

    try {
      const response = await axios.post('/token', data);

      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      cleanHandler();

      dispatch(loginSuccess(response.data));
    } catch (e) {
      console.log('Error:', e.error);
      dispatch(authFail());
    }
  };
};

import axios from 'axios';
import * as actionTypes from '../../../constants/ActionTypes';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const register = (data, history) => {
  return async (dispatch) => {
    dispatch(authStart());

    try {
      await axios.post('http://localhost:3001/users', data);

      dispatch({
        type: actionTypes.ADD_TOAST,
        payload: {
          type: 'success',
          msg: 'Your account has been created',
          position: 'right',
        },
      });

      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
      });

      history.goBack();
    } catch (e) {
      // console.log(e);
    }
  };
};

export const login = (data, history) => {
  return async (dispatch) => {
    dispatch(authStart());

    try {
      const response = await axios.post('http://localhost:3001/token', data);

      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: response.data,
      });

      history.replace('/');
    } catch (e) {
      // console.log(e);
    }
  };
};

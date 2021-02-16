import axios from 'axios';
import * as actionTypes from '../../../constants/ActionTypes';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const login = (data) => {
  return async (dispatch) => {
    dispatch(authStart());

    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
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

      history.goBack();
    } catch (e) {
      console.log(e);
    }
  };
};

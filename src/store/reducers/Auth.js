import * as actionTypes from '../../constants/ActionTypes';
import axios from '../../util/axios';

const initialState = {
  isLogging: true,
  isLogged: false,
  isLoading: false,
  userEmail: null,
  userId: null,
  userToken: null,
};

const changeAuth = (state) => {
  const updatedState = { ...state };
  updatedState.isLogging = !updatedState.isLogging;
  return updatedState;
};

const registerSuccess = (state) => {
  const updatedState = { ...state };
  updatedState.isLogging = true;
  updatedState.isLoading = false;
  return updatedState;
};

const authStart = (state) => {
  const updatedState = { ...state };
  updatedState.isLoading = true;
  return updatedState;
};

const authFail = (state) => {
  const updatedState = { ...state };
  updatedState.isLoading = false;
  return updatedState;
};

const loginSuccess = (state, payload) => {
  const updatedState = { ...state };
  updatedState.userEmail = payload.email;
  updatedState.userId = payload.id;
  updatedState.userToken = payload.token;
  updatedState.isLogged = true;
  updatedState.isLoading = false;
  return updatedState;
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_AUTH:
      return changeAuth(state);
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.REGISTER_SUCCESS:
      return registerSuccess(state);
    case actionTypes.AUTH_FAIL:
      return authFail(state);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action.payload);
    case 'persist/REHYDRATE':
      if (action.payload) {
        axios.defaults.headers.common.authorization = `Bearer ${action.payload.userToken}`;
      }
      return state;
    default:
      return state;
  }
};

export default AuthReducer;

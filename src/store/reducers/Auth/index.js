import * as actionTypes from '../../../constants/ActionTypes';

const initialState = {
  isLoading: false,
  isLogged: false,
  userId: null,
  userToken: null,
  userEmail: null,
};

const authStart = (state) => {
  const stateCopy = { ...state };
  stateCopy.isLoading = true;
  return stateCopy;
};

const registerSuccess = (state) => {
  const stateCopy = { ...state };
  stateCopy.isLoading = false;
  return stateCopy;
};

const loginSuccess = (state, payload) => {
  if (!payload) return state;

  const stateCopy = { ...state };
  const { userId, userEmail, userToken } = payload;
  stateCopy.isLoading = false;
  stateCopy.isLogged = true;
  stateCopy.userId = userId;
  stateCopy.userEmail = userEmail;
  stateCopy.userToken = userToken;
  return stateCopy;
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return loginSuccess(state, action.payload);
    case actionTypes.AUTH_START:
      return authStart(state);
    case actionTypes.REGISTER_SUCCESS:
      return registerSuccess(state);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action.payload);
    default:
      return state;
  }
};

export default AuthReducer;

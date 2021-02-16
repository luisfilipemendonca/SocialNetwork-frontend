import * as actionTypes from '../../../constants/ActionTypes';

const initialState = {
  isLoading: false,
  user: {},
};

const authStart = (state) => {
  const stateCopy = { ...state };
  stateCopy.isLoading = true;
  return stateCopy;
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state);
    default:
      return state;
  }
};

export default AuthReducer;

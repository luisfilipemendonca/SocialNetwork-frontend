import axios from '../../util/axios';
import * as actionTypes from '../actionTypes';

const initialState = {
  isLogged: false,
  userId: null,
  userName: null,
  userEmail: null,
  userProfilePicture: null,
  userToken: null,
  userFirstTime: null,
};

const authenticate = (state, payload) => {
  const {
    userId,
    userToken,
    userFirstTime,
    userName,
    userProfilePicture,
    userEmail,
  } = payload;

  const stateCopy = { ...state };
  stateCopy.isLogged = true;
  stateCopy.userId = userId;
  stateCopy.userName = userName;
  stateCopy.userEmail = userEmail;
  stateCopy.userToken = userToken;
  stateCopy.userFirstTime = userFirstTime;
  stateCopy.userProfilePicture = userProfilePicture;

  axios.defaults.headers.authorization = `Bearer ${userToken}`;

  return stateCopy;
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return authenticate(state, action.payload);
    case actionTypes.REHYDRATE_USER:
      return authenticate(state, action.payload);
    default:
      return state;
  }
};

export default UserReducer;

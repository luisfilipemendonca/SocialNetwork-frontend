import axios from '../../util/axios';
import * as actionTypes from '../actionTypes';

const initialState = {
  isLogged: false,
  userId: null,
  userName: null,
  userEmail: null,
  userProfilePicture: null,
  userProfilePictureUrl: null,
  userToken: null,
  userFirstTime: null,
  userPosts: [],
};

const authenticate = (state, payload) => {
  if (!payload) return state;

  const {
    userId,
    userToken,
    userFirstTime,
    userName,
    userProfilePicture,
    userProfilePictureUrl,
    userEmail,
    isLogged,
    rehydrated,
  } = payload;

  const stateCopy = { ...state };
  stateCopy.isLogged = rehydrated ? isLogged : true;
  stateCopy.userId = userId;
  stateCopy.userName = userName;
  stateCopy.userEmail = userEmail;
  stateCopy.userToken = userToken;
  stateCopy.userFirstTime = userFirstTime;
  stateCopy.userProfilePicture = userProfilePicture;
  stateCopy.userProfilePictureUrl = userProfilePictureUrl;

  axios.defaults.headers.authorization = `Bearer ${userToken}`;

  return stateCopy;
};

const fetchUserPosts = (state, payload) => {
  const stateCopy = { ...state };
  stateCopy.userPosts = payload;
  return stateCopy;
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return authenticate(state, action.payload);
    case actionTypes.REHYDRATE_USER:
      return authenticate(state, { ...action.payload, rehydrated: true });
    case actionTypes.FETCH_USER_POSTS:
      return fetchUserPosts(state, action.payload);
    default:
      return state;
  }
};

export default UserReducer;

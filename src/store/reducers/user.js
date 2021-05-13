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
  userFollowers: [],
  userFollowing: [],
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

const fetchUserData = (state, payload) => {
  const { posts, followers, following } = payload;
  const stateCopy = { ...state };
  stateCopy.userPosts = posts;
  stateCopy.userFollowers = followers;
  stateCopy.userFollowing = following;
  return stateCopy;
};

const updateUser = (state, payload) => {
  const {
    userName,
    userEmail,
    userFirstTime,
    userProfilePicture,
    userProfilePictureUrl,
  } = payload;
  const stateCopy = { ...state };
  stateCopy.userName = userName;
  stateCopy.userEmail = userEmail;
  stateCopy.userFirstTime = userFirstTime;
  stateCopy.userProfilePicture = userProfilePicture;
  stateCopy.userProfilePictureUrl = userProfilePictureUrl;
  return stateCopy;
};

const addFollowing = (state, payload) => {
  const stateCopy = { ...state };
  stateCopy.userFollowing.push(payload);
  return stateCopy;
};

const deleteFollowing = (state, payload) => {
  const stateCopy = { ...state };
  stateCopy.userFollowing = stateCopy.userFollowing.filter(
    (follower) => follower.followerId !== +payload
  );
  return stateCopy;
};

const addPost = (state, payload) => {
  const stateCopy = { ...state };
  stateCopy.userPosts.unshift(payload);
  return stateCopy;
};

const deletePost = (state, payload) => {
  const stateCopy = { ...state };
  stateCopy.userPosts = stateCopy.userPosts.filter(
    (post) => post.id !== payload
  );
  return stateCopy;
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return authenticate(state, action.payload);
    case actionTypes.REHYDRATE_USER:
      return authenticate(state, { ...action.payload, rehydrated: true });
    case actionTypes.FETCH_USER_DATA:
      return fetchUserData(state, action.payload);
    case actionTypes.UPDATE_USER:
      return updateUser(state, action.payload);
    case actionTypes.ADD_FOLLOWING:
      return addFollowing(state, action.payload);
    case actionTypes.DELETE_FOLLOWING:
      return deleteFollowing(state, action.payload);
    case actionTypes.ADD_POST:
      return addPost(state, action.payload);
    case actionTypes.DELETE_POST:
      return deletePost(state, action.payload);
    default:
      return state;
  }
};

export default UserReducer;

import * as actionTypes from '../actionTypes';

const initialState = {
  userProfilePicture: null,
  userProfilePictureUrl: null,
  userName: null,
  userPosts: [],
};

const fetchUserProfile = (state, payload) => {
  const { Posts, profilePicture, profilePictureUrl, username } = payload;
  const stateCopy = { ...state };
  stateCopy.userProfilePicture = profilePicture;
  stateCopy.userProfilePictureUrl = profilePictureUrl;
  stateCopy.userName = username;
  stateCopy.userPosts = Posts;
  return stateCopy;
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE:
      return fetchUserProfile(state, action.payload);
    default:
      return state;
  }
};

export default ProfileReducer;

import * as actionTypes from '../actionTypes';

const initialState = {
  userProfilePicture: null,
  userProfilePictureUrl: null,
  userName: null,
  userPosts: [],
  userFollowers: [],
  userFollowing: [],
};

const fetchUserProfile = (state, payload) => {
  const {
    Posts,
    profilePicture,
    profilePictureUrl,
    username,
    Followers,
  } = payload;
  const stateCopy = { ...state };
  stateCopy.userProfilePicture = profilePicture;
  stateCopy.userProfilePictureUrl = profilePictureUrl;
  stateCopy.userName = username;
  stateCopy.userPosts = Posts;
  stateCopy.userFollowers = Followers.followers;
  stateCopy.userFollowing = Followers.following;
  return stateCopy;
};

const addFollower = (state, payload) => {
  const stateCopy = { ...state };
  stateCopy.userFollowers.push(payload);
  return stateCopy;
};

const deleteFollower = (state, payload) => {
  const stateCopy = { ...state };
  stateCopy.userFollowers = stateCopy.userFollowers.filter(
    (follower) => follower.followerId !== +payload
  );
  return stateCopy;
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE:
      return fetchUserProfile(state, action.payload);
    case actionTypes.ADD_FOLLOWER:
      return addFollower(state, action.payload);
    case actionTypes.DELETE_FOLLOWER:
      return deleteFollower(state, action.payload);
    default:
      return state;
  }
};

export default ProfileReducer;

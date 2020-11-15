import * as actionTypes from '../../constants/ActionTypes';

const initialState = {
  user: null,
  isLoading: false,
};

const fetchProfileSuccess = (state, payload) => {
  const updatedState = { ...state };
  updatedState.user = payload;
  updatedState.isLoading = false;
  return updatedState;
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_SUCCESS:
      return fetchProfileSuccess(state, action.payload);
    default:
      return state;
  }
};

export default ProfileReducer;

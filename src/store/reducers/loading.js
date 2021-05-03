import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
};

const startLoading = (state) => {
  return { ...state, isLoading: true };
};

const stopLoading = (state) => {
  return { ...state, isLoading: false };
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return startLoading(state);
    case actionTypes.STOP_LOADING:
      return stopLoading(state);
    default:
      return state;
  }
};

export default LoadingReducer;

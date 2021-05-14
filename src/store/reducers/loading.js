import * as actionTypes from '../actionTypes';

const initialState = {
  isPageLoading: false,
  isComponentLoading: false,
};

const startPageLoading = (state) => {
  return { ...state, isPageLoading: true };
};

const stopPageLoading = (state) => {
  return { ...state, isPageLoading: false };
};

const startComponentLoading = (state) => {
  return { ...state, isComponentLoading: true };
};

const stopComponentLoading = (state) => {
  return { ...state, isComponentLoading: false };
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_PAGE_LOADING:
      return startPageLoading(state);
    case actionTypes.STOP_PAGE_LOADING:
      return stopPageLoading(state);
    case actionTypes.START_COMPONENT_LOADING:
      return startComponentLoading(state);
    case actionTypes.STOP_COMPONENT_LOADING:
      return stopComponentLoading(state);
    default:
      return state;
  }
};

export default LoadingReducer;

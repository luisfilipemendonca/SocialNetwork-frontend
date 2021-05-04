import * as actionTypes from '../actionTypes';

const initialState = {
  isLoading: false,
  isFormLoading: false,
};

const startLoading = (state) => {
  return { ...state, isLoading: true };
};

const stopLoading = (state) => {
  return { ...state, isLoading: false };
};

const startLoadingForm = (state) => {
  return { ...state, isFormLoading: true };
};

const stopLoadingForm = (state) => {
  return { ...state, isFormLoading: false };
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return startLoading(state);
    case actionTypes.STOP_LOADING:
      return stopLoading(state);
    case actionTypes.START_LOADING_FORM:
      return startLoadingForm(state);
    case actionTypes.STOP_LOADING_FORM:
      return stopLoadingForm(state);
    default:
      return state;
  }
};

export default LoadingReducer;

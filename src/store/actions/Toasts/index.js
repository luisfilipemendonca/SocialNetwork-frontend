import * as actionTypes from '../../../constants/ActionTypes';

export const addToast = (toastData) => {
  return {
    type: actionTypes.ADD_TOAST,
    payload: toastData,
  };
};

export const deleteToast = (id) => {
  return {
    type: actionTypes.DELETE_TOAST,
    payload: id,
  };
};

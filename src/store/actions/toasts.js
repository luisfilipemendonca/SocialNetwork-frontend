import * as actionTypes from '../actionTypes';

export const addToast = () => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_TOAST,
    payload: {
      type: 'success',
      position: 'center',
      description: 'Hello world',
    },
  });
};

export const deleteToasts = (data) => {
  return {
    type: actionTypes.DELETE_TOAST,
    payload: { ...data },
  };
};

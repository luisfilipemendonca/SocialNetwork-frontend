export const addToast = (toastData) => {
  return {
    type: 'ADD_TOAST',
    payload: toastData,
  };
};

export const deleteToast = (id) => {
  return {
    type: 'DELETE_TOAST',
    payload: id,
  };
};

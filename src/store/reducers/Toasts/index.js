import { v4 as uuidv4 } from 'uuid';

const initialState = {
  toasts: [],
};

const addToast = (state, payload) => {
  const updatedState = { ...state, toasts: [...state.toasts] };
  updatedState.toasts.push({
    ...payload,
    id: uuidv4(),
  });
  console.log(updatedState);
  return updatedState;
};

const removeToast = (state, id) => {
  const updatedState = { ...state, toasts: [...state.toasts] };
  updatedState.toasts = updatedState.toasts.filter((toast) => toast.id !== id);
  return updatedState;
};

const ToastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return addToast(state, action.payload);
    case 'DELETE_TOAST':
      return removeToast(state, action.payload);
    default:
      return state;
  }
};

export default ToastsReducer;

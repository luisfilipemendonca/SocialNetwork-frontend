import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from '../actionTypes';

const initialState = {
  right: [],
  center: [],
  left: [],
};

const addToast = (state, payload) => {
  const { type, position, description } = payload;
  const stateCopy = { ...state };
  stateCopy[position].push({ type, description, id: uuidv4() });
  return stateCopy;
};

const deleteToasts = (state, payload) => {
  const { id, position } = payload;
  const stateCopy = { ...state };
  stateCopy[position] = stateCopy[position].filter((toast) => toast.id !== id);
  return stateCopy;
};

const ToastsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return addToast(state, action.payload);
    case actionTypes.DELETE_TOAST:
      return deleteToasts(state, action.payload);
    default:
      return state;
  }
};

export default ToastsReducer;

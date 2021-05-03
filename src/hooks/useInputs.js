import { useReducer } from 'react';

const change = (state, payload) => {
  const { id, value } = payload;
  const inputsCopy = { ...state };
  inputsCopy[id].value = value;
  return inputsCopy;
};

const focus = (state, payload) => {
  const { id } = payload;
  const inputsCopy = { ...state };
  inputsCopy[id].hasError = false;
  inputsCopy[id].errorMsg = '';
  return inputsCopy;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return change(state, action.payload);
    case 'FOCUS':
      return focus(state, action.payload);
    default:
      return state;
  }
};

const useInputs = (initialInputs) => {
  const [inputs, dispatch] = useReducer(reducer, { ...initialInputs });

  const changeHandler = (e) =>
    dispatch({ type: 'CHANGE', payload: e.currentTarget });

  const focusHandler = (e) =>
    dispatch({ type: 'FOCUS', payload: e.currentTarget });

  return { inputs, changeHandler, focusHandler };
};

export default useInputs;

import { useReducer } from 'react';

const setError = (state, payload) => {
  const { id, errorMsg } = payload;
  const inputsCopy = [...state];
  const inputIdx = inputsCopy.findIndex((input) => input.id === id);
  inputsCopy[inputIdx].hasError = true;
  inputsCopy[inputIdx].errorMsg = errorMsg;
  return inputsCopy;
};

const change = (state, payload) => {
  const { id, value, files, type } = payload;

  const inputsCopy = [...state];
  const inputIdx = inputsCopy.findIndex((input) => input.id === id);

  if (type === 'file') {
    const { isValid, errorMsg } = inputsCopy[inputIdx].fileValidator(
      inputsCopy[inputIdx],
      [...files]
    );

    if (isValid) {
      inputsCopy[inputIdx].value = [...files];
      inputsCopy[inputIdx].hasError = false;
      inputsCopy[inputIdx].errorMsg = '';
    } else {
      inputsCopy[inputIdx].value = '';
      setError(state, { id, errorMsg });
    }
  } else {
    inputsCopy[inputIdx].value = value;
  }
  return inputsCopy;
};

const focus = (state, payload) => {
  const { id } = payload;
  const inputsCopy = [...state];
  const inputIdx = inputsCopy.findIndex((input) => input.id === id);
  inputsCopy[inputIdx].hasError = false;
  inputsCopy[inputIdx].errorMsg = '';
  return inputsCopy;
};

const clearInputs = (state) => {
  const inputsCopy = [...state];
  return inputsCopy.map((input) => ({ ...input, value: '' }));
};

const setInputs = (state, payload) => {
  let inputsCopy = [...state];
  inputsCopy = inputsCopy.map((input) => ({
    ...input,
    value: payload[input.id] || '',
  }));
  return inputsCopy;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return change(state, action.payload);
    case 'FOCUS':
      return focus(state, action.payload);
    case 'SET_ERROR':
      return setError(state, action.payload);
    case 'CLEAR_INPUTS':
      return clearInputs(state);
    case 'SET_INPUTS':
      return setInputs(state, action.payload);
    default:
      return state;
  }
};

const useInputs = (initialInputs) => {
  const [inputs, dispatch] = useReducer(
    reducer,
    initialInputs.map((input) => ({ ...input }))
  );

  const changeHandler = (e) =>
    dispatch({ type: 'CHANGE', payload: e.currentTarget });

  const focusHandler = (e) =>
    dispatch({ type: 'FOCUS', payload: e.currentTarget });

  const setErrorHandler = (id, errorMsg) =>
    dispatch({ type: 'SET_ERROR', payload: { id, errorMsg } });

  const clearInputsHandler = () => dispatch({ type: 'CLEAR_INPUTS' });

  const setInputsHandler = (data) =>
    dispatch({ type: 'SET_INPUTS', payload: data });

  return {
    inputs,
    changeHandler,
    focusHandler,
    setErrorHandler,
    clearInputsHandler,
    setInputsHandler,
  };
};

export default useInputs;

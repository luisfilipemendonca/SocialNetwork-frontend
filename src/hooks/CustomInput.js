import { useReducer } from 'react';
import inputValidations from '../helpers/InputValidations';

const inputFocusHandler = (state, payload) => {
  const updatedState = { ...state };
  updatedState[payload.id].hasError = false;
  return updatedState;
};

const inputChangeHandler = (state, payload) => {
  const updatedState = { ...state };
  updatedState[payload.target].value = payload.value;
  return updatedState;
};

const inputBlurHandler = (state, payload) => {
  const updatedState = { ...state };
  let inputCheck;

  if (payload.id === 'email') {
    inputCheck = inputValidations.emailValidator(payload.value);
  }

  if (payload.id === 'password') {
    inputCheck = inputValidations.passwordValidator(payload.value);
  }

  if (payload.id === 'username') {
    inputCheck = inputValidations.lengthValidator(payload.value.trim(), 3, 8);
  }

  updatedState[payload.id].hasError = !inputCheck.isValid;
  updatedState[payload.id].errorMsg = inputCheck.errorMsg;
  updatedState[payload.id].isTouched = true;

  return updatedState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_FOCUS':
      return inputFocusHandler(state, action.payload);
    case 'INPUT_CHANGE':
      return inputChangeHandler(state, action.payload);
    case 'INPUT_BLUR':
      return inputBlurHandler(state, action.payload);
    default:
      return state;
  }
};

const customInput = (inputs) => {
  const [formInputs, dispatch] = useReducer(reducer, inputs);

  const inputFocus = (e) =>
    dispatch({ type: 'INPUT_FOCUS', payload: e.target });

  const inputChange = (e) =>
    dispatch({
      type: 'INPUT_CHANGE',
      payload: { target: e.target.id, value: e.target.value },
    });

  const inputBlur = (e) => dispatch({ type: 'INPUT_BLUR', payload: e.target });

  return [formInputs, inputChange, inputFocus, inputBlur];
};

export default customInput;

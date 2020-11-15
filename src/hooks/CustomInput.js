import { useReducer } from 'react';
import inputValidations from '../helpers/InputValidations';

const inputFocusHandler = (state, payload) => {
  const updatedState = { ...state };
  updatedState[payload.id].hasError = false;
  return updatedState;
};

const inputChangeHandler = (state, payload) => {
  const { id, value, type } = payload;
  const updatedState = { ...state };

  if (type === 'file') {
    const file = payload.files[0];
    const fileUrl = URL.createObjectURL(payload.files[0]);
    const validator = inputValidations.imageFileValidator(file.type);
    let fileValue = '';

    if (validator.isValid) {
      updatedState[id].file = file;
      fileValue = fileUrl;
    }

    updatedState[id].value = fileValue;
    updatedState[id].hasError = !validator.isValid;
    updatedState[id].errorMsg = validator.errorMsg;
  } else {
    updatedState[id].value = value;
  }

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

  if (payload.id === 'comment') {
    inputCheck = inputValidations.lengthValidator(payload.value.trim(), 1);
  }

  updatedState[payload.id].hasError = !inputCheck.isValid;
  updatedState[payload.id].errorMsg = inputCheck.errorMsg;
  updatedState[payload.id].isTouched = true;

  return updatedState;
};

const inputClean = (state) => {
  const updatedState = { ...state };

  Object.keys(updatedState).forEach((input) => {
    if (updatedState[input].type === 'file') {
      updatedState[input].file = null;
    }
    updatedState[input].value = '';
  });

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
    case 'INPUT_CLEAN':
      return inputClean(state);
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
      payload: e.target,
    });

  const inputBlur = (e) => dispatch({ type: 'INPUT_BLUR', payload: e.target });
  const cleanInputsValue = () => dispatch({ type: 'INPUT_CLEAN' });

  return [formInputs, inputChange, inputFocus, inputBlur, cleanInputsValue];
};

export default customInput;

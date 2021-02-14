import { useReducer } from 'react';

const inputChangeHandler = (state, payload) => {
  const updatedInputs = [...state];
  const inputIdx = updatedInputs.findIndex((input) => input.id === payload.id);

  updatedInputs[inputIdx].value = payload.value;
  return updatedInputs;
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return inputChangeHandler(state, action.payload);
    default:
      return state;
  }
};

const useFormInputs = (initialInputs) => {
  const [formInputs, dispatch] = useReducer(reducer, initialInputs);

  const changeHandler = (e) =>
    dispatch({ type: 'INPUT_CHANGE', payload: { id: e.id, value: e.value } });

  return { formInputs, changeHandler };
};

export default useFormInputs;

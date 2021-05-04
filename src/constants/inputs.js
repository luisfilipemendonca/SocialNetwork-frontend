import Validator from '../helpers/Validator';

export const loginInputs = {
  email: {
    value: '',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    hasError: false,
    validators: [Validator.isRequired, Validator.isEmail],
  },
  password: {
    value: '',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    hasError: false,
    minLength: 6,
    maxLength: 8,
    validators: [
      Validator.isRequired,
      Validator.hasExpectedLength,
      Validator.containsNumber,
      Validator.containsCapitalLetter,
    ],
  },
};

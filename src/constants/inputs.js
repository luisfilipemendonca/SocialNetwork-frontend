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
    validators: [
      Validator.isRequired,
      Validator.hasExpectedLength,
      Validator.containsNumber,
      Validator.containsCapitalLetter,
    ],
  },
};

export const registerInputs = {
  username: {
    value: '',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
    hasError: false,
    minLength: 3,
    maxLength: 16,
    validators: [Validator.isRequired, Validator.hasExpectedLength],
  },
  ...loginInputs,
};

export const commentInput = {
  comment: {
    value: '',
    type: 'textarea',
    placeholder: 'Enter your comment',
    hasError: false,
    validators: [Validator.isRequired],
  },
};

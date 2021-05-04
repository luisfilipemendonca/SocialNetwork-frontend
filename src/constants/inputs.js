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
    validators: [Validator.isRequired],
  },
};

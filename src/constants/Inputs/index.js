import InputsValidator from '../../helpers/InputsValidator';

export const loginInputs = [
  {
    id: 'email',
    type: 'email',
    value: '',
    placeholder: 'Enter your email',
    isRequired: true,
    isTouched: false,
    isValid: false,
    errorMsg: '',
    validator: InputsValidator.isEmail,
  },
  {
    id: 'password',
    type: 'password',
    value: '',
    placeholder: 'Enter your password',
    isRequired: true,
    isTouched: false,
    isValid: false,
    errorMsg: '',
    minLength: 6,
    maxLength: 20,
    validator: InputsValidator.isPasswordValid,
  },
];

export const registerInputs = [
  {
    id: 'username',
    type: 'text',
    value: '',
    placeholder: 'Enter your username',
    isRequired: true,
    isTouched: false,
    isValid: false,
    errorMsg: '',
    minLength: 3,
    maxLength: 12,
    validator: InputsValidator.hasExpectedLength,
  },
  {
    id: 'email',
    type: 'email',
    value: '',
    placeholder: 'Enter your email',
    isRequired: true,
    isTouched: false,
    isValid: false,
    errorMsg: '',
    validator: InputsValidator.isEmail,
  },
  {
    id: 'password',
    type: 'password',
    value: '',
    placeholder: 'Enter your password',
    isRequired: true,
    isTouched: false,
    isValid: false,
    errorMsg: '',
    minLength: 6,
    maxLength: 20,
    validator: InputsValidator.isPasswordValid,
  },
];

export const commentInputs = [
  {
    id: 'comment',
    type: 'textarea',
    value: '',
    placeholder: 'Enter your comment..',
    isRequired: true,
    isTouched: false,
    isValid: false,
    errorMsg: '',
    minLength: 1,
    validator: InputsValidator.hasExpectedLength,
  },
];

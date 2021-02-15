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
  },
];

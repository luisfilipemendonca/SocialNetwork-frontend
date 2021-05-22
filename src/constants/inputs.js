import Validator from '../helpers/Validator';

export const loginInputs = [
  {
    id: 'email',
    value: '',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    hasError: false,
    validators: [Validator.isRequired, Validator.isEmail],
  },
  {
    id: 'password',
    value: '',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    hasError: false,
    minLength: 6,
    info:
      'Should contain at leat 6 characters, 1 uppercase letter and a number',
    validators: [
      Validator.isRequired,
      Validator.hasExpectedLength,
      Validator.containsNumber,
      Validator.containsCapitalLetter,
    ],
  },
];

export const registerInputs = [
  {
    id: 'username',
    value: '',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
    info: 'Should contain between 3 and 16 characters',
    hasError: false,
    minLength: 3,
    maxLength: 16,
    validators: [Validator.isRequired, Validator.hasExpectedLength],
  },
  ...loginInputs,
];

export const commentInput = [
  {
    id: 'comment',
    value: '',
    type: 'textarea',
    placeholder: 'Enter your comment',
    hasError: false,
    validators: [Validator.isRequired],
  },
];

export const profilePictureInput = [
  {
    id: 'profilePicture',
    value: '',
    hasError: false,
    type: 'file',
    acceptedTypes: ['image/jpeg', 'image/png'],
    fileValidator: Validator.isFileValid,
    validators: [Validator.isRequired],
  },
];

export const postInputs = [
  {
    id: 'postPhoto',
    value: '',
    hasError: false,
    isMultiple: true,
    type: 'file',
    label: 'Post photos',
    acceptedTypes: ['image/jpeg', 'image/png'],
    info: 'Up to 5 files and only JPG and PNG files are accepeted',
    fileValidator: Validator.isFileValid,
    validators: [Validator.isRequired],
  },
  {
    id: 'description',
    value: '',
    type: 'textarea',
    placeholder: 'Enter post description',
    label: 'Post Description',
    hasError: false,
    validators: [Validator.isRequired],
  },
];

export const inputsLogin = {
  email: {
    label: 'Email',
    type: 'text',
    placeholder: 'Your email',
    value: '',
    hasError: false,
    isTouched: false,
    errorMsg: '',
  },
  password: {
    label: 'Password',
    type: 'password',
    placeholder: 'Your password',
    value: '',
    hasError: false,
    isTouched: false,
    errorMsg: '',
  },
};

export const inputsRegister = {
  username: {
    label: 'Username',
    type: 'text',
    placeholder: 'Your username',
    value: '',
    hasError: false,
    isTouched: false,
  },
  email: {
    label: 'Email',
    type: 'text',
    placeholder: 'Your email',
    value: '',
    hasError: false,
    isTouched: false,
  },
  password: {
    label: 'Password',
    type: 'password',
    placeholder: 'Your password',
    info: '8 characters with at least 1 number 1 uppercase letter',
    value: '',
    hasError: false,
    isTouched: false,
  },
  profilePicture: {
    label: 'picture',
    type: 'file',
    info:
      'Add a profile picture. Can also be added later. Only JPG/PNG files are accepeted.',
    value: '',
    file: null,
    hasError: false,
  },
};

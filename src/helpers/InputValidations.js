class InputValidation {
  lengthValidator = (value, min, max = null) => {
    const isValid = max
      ? value.length >= min && value.length <= max
      : value.length >= min;
    const msg = max
      ? `between ${min} and ${max} characters`
      : `at least ${min} characters`;
    return { isValid, errorMsg: isValid ? '' : `Should contain ${msg}` };
  };

  hasUppercaseLetter = (value) => {
    const upperReg = /[A-Z]/;
    const isValid = upperReg.test(value);
    return {
      isValid,
      errorMsg: isValid ? '' : 'Should contain a uppercase letter',
    };
  };

  hasNumber = (value) => {
    const numberReg = /[0-9]/;
    const isValid = numberReg.test(value);
    return { isValid, errorMsg: isValid ? '' : 'Should contain a number.' };
  };

  emailValidator = (value) => {
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = emailReg.test(value);
    return { isValid, errorMsg: isValid ? '' : 'Your email is invalid' };
  };

  passwordValidator = (value) => {
    const validatorArr = [];

    validatorArr.push(this.hasUppercaseLetter(value));
    validatorArr.push(this.hasNumber(value));
    validatorArr.push(this.lengthValidator(value.trim(), 8));

    const invalidEl = validatorArr.find((el) => !el.isValid);

    return {
      isValid: !invalidEl,
      errorMsg: !invalidEl ? '' : invalidEl.errorMsg,
    };
  };

  imageFileValidator = (fileType) => {
    const isValid = fileType === 'image/jpeg' || fileType === 'image/png';
    return {
      isValid,
      errorMsg: isValid ? '' : 'Your file needs to be a PNG or JPG',
    };
  };
}

export default new InputValidation();

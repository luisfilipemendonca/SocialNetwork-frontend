class InputsValidator {
  static isEmail(target) {
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValid = emailReg.test(target.value);

    return { isValid, errorMsg: isValid ? '' : 'Your email is invalid' };
  }
}

export default InputsValidator;

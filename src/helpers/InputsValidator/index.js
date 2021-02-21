class InputsValidator {
  static isEmail(target) {
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const isValid = emailReg.test(target.value);

    return { isValid, errorMsg: isValid ? '' : 'Your email is invalid' };
  }

  static hasCapitalLetter(value) {
    const capitalReg = /[A-Z]+/g;

    return capitalReg.test(value);
  }

  static hasNumber(value) {
    const numberReg = /\d+/g;

    return numberReg.test(value);
  }

  static hasExpectedLength(target) {
    const value = target.value.trim();
    const maxLength = target.maxLength > 0 ? target.maxLength : Infinity;
    const isValid =
      value.length >= target.minLength && value.length <= maxLength;

    let errorMsg;

    if (!isValid) {
      if (maxLength !== Infinity) {
        errorMsg = `Must contain between ${target.minLength} and ${target.minLength} characters`;
      } else {
        errorMsg = `Must contain at least ${target.minLength} characters`;
      }
    }

    return { isValid, errorMsg: isValid ? '' : errorMsg };
  }

  static isPasswordValid(target) {
    const hasCapitalLetter = InputsValidator.hasCapitalLetter(target.value);
    const hasNumber = InputsValidator.hasNumber(target.value);
    const hasExpectedLength = InputsValidator.hasExpectedLength(target);

    if (!hasCapitalLetter) {
      return {
        isValid: hasCapitalLetter,
        errorMsg: 'Must contain a capital letter',
      };
    }

    if (!hasNumber) {
      return { isValid: hasNumber, errorMsg: 'Must constain a number' };
    }

    if (!hasExpectedLength.isValid) {
      return {
        isValid: hasExpectedLength.isValid,
        errorMsg: hasExpectedLength.errorMsg,
      };
    }

    return {
      isValid: hasCapitalLetter && hasNumber && hasExpectedLength.isValid,
    };
  }

  static isImageValid(target) {
    let isValid = true;

    [...target].forEach((file) => {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        isValid = false;
      }
    });

    return {
      isValid,
      errorMsg: isValid ? '' : 'Only png and jpg files are accepted',
    };
  }
}

export default InputsValidator;

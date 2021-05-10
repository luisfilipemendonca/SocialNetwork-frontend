class Validator {
  static isRequired(input) {
    let { value } = input;

    if (typeof value === 'string') {
      value = value.trim();
    }

    if (typeof value === 'number') {
      value = value.toString().trim();
    }

    const isValid = value.length > 0;

    return { isValid, errorMsg: isValid ? '' : 'This field is required' };
  }

  static isEmail(input) {
    const { value } = input;

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValid = regex.test(value);

    return { isValid, errorMsg: isValid ? '' : 'Provide a valid email' };
  }

  static hasExpectedLength(input) {
    const { value, minLength, maxLength } = input;

    const isValid =
      value.trim().length >= minLength &&
      value.trim().length <= (maxLength || Infinity);

    return {
      isValid,
      errorMsg: isValid
        ? ''
        : `Must contain ${
            maxLength !== Infinity
              ? `at least ${minLength} characters`
              : `between ${minLength} and ${maxLength} characters`
          }`,
    };
  }

  static containsNumber(input) {
    const { value } = input;
    const numberRegex = /\d/;
    const isValid = numberRegex.test(value);
    return { isValid, errorMsg: isValid ? '' : 'Requires at least one number' };
  }

  static containsCapitalLetter(input) {
    const { value } = input;
    const capitalLetterRegex = /[A-Z]/;
    const isValid = capitalLetterRegex.test(value);
    return { isValid, errorMsg: isValid ? '' : 'Requires a capital letter' };
  }

  static isFileValid(input, files) {
    const { acceptedTypes } = input;
    let isValid = true;

    files.forEach(({ type }) => {
      isValid =
        acceptedTypes.some((acceptedType) => acceptedType === type) && isValid;
    });

    return {
      isValid,
      errorMsg: isValid ? '' : 'That file type is not accepted',
    };
  }
}

export default Validator;

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
}

export default Validator;

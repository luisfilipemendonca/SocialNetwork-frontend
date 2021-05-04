class Form {
  constructor(inputs) {
    this.inputs = inputs;
  }

  validate(setInputError) {
    let isFormValid = true;

    Object.keys(this.inputs).forEach((input) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const validator of this.inputs[input].validators) {
        const { isValid, errorMsg } = validator(this.inputs[input]);

        if (!isValid) {
          setInputError(input, errorMsg);
          isFormValid = false;
          break;
        }
      }
    });

    return isFormValid;
  }

  buildFormObj() {
    const data = {};

    Object.keys(this.inputs).forEach((input) => {
      data[input] = this.inputs[input].value;
    });

    return data;
  }
}

export default Form;

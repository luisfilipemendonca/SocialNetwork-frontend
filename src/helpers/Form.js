class Form {
  constructor(inputs) {
    this.inputs = inputs;
  }

  validate(setInputError) {
    let isFormValid = true;

    this.inputs.forEach((input) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const validator of input.validators) {
        const { isValid, errorMsg } = validator(input);

        if (!isValid) {
          setInputError(input.id, errorMsg);
          isFormValid = false;
          break;
        }
      }
    });

    return isFormValid;
  }

  buildFormObj() {
    const data = {};

    this.inputs.forEach((input) => {
      data[input.id] = input.value;
    });

    return data;
  }
}

export default Form;

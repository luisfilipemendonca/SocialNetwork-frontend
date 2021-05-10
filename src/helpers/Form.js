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

  buildFormData() {
    const formData = new FormData();

    this.inputs.forEach((input) => {
      if (input.type === 'file' && input.value.length > 1) {
        input.value.forEach((val) => formData.append(`${input.id}[]`, val));
      } else if (input.type === 'file' && input.value.length <= 1) {
        input.value.forEach((val) => formData.append(input.id, val));
      } else {
        formData.append(input.id, input.value);
      }
    });
    return formData;
  }
}

export default Form;

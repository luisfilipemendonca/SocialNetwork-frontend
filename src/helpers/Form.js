class Form {
  constructor(inputs) {
    this.inputs = inputs;
  }

  validate(setInputError, isUpdate = false) {
    let isFormValid = true;

    this.inputs.forEach((input) => {
      if (isUpdate && input.value === '') return;

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
      const { value, type, id } = input;

      if (value === '' || (type === 'file' && typeof value === 'string'))
        return;

      if (type === 'file') {
        value.forEach((val) => formData.append(id, val));
      } else {
        formData.append(id, value);
      }
    });

    return formData;
  }
}

export default Form;

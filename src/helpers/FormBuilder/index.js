class FormBuilder {
  constructor(inputs) {
    this.inputs = inputs;
    this.isValid = true;
  }

  isFormValid() {
    this.inputs.forEach((input) => {
      if (input.isRequired && !input.isValid) {
        this.isValid = false;
      }
    });

    return this.isValid;
  }

  buildFormObj() {
    const data = {};

    this.inputs.forEach((input) => {
      data[input.id] = input.value;
    });

    return data;
  }
}

export default FormBuilder;

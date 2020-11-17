class FormValidation {
  formValidator = (inputs, fileValueNeeded) => {
    let isValid = true;

    Object.keys(inputs).forEach((input) => {
      if (
        (!fileValueNeeded && inputs[input].type === 'file') ||
        (!fileValueNeeded && inputs[input].value.length <= 0)
      )
        return;
      isValid = !inputs[input].hasError && inputs[input].isTouched && isValid;
    });

    return isValid;
  };

  createFormData = (inputs) => {
    const formData = new FormData();

    Object.keys(inputs).forEach((input) => {
      if (inputs[input].type === 'file') {
        if (inputs[input].file) {
          formData.append(input, inputs[input].file);
        }
      } else {
        formData.append(input, inputs[input].value);
      }
    });

    return formData;
  };

  createFormObject = (inputs) => {
    const data = {};

    Object.keys(inputs).forEach((input) => {
      if (inputs[input].value.length <= 0) return;
      data[input] = inputs[input].value;
    });

    return data;
  };
}

export default new FormValidation();

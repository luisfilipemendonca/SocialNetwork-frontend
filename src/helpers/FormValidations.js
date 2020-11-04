class FormValidation {
  formValidator = (inputs) => {
    let isValid = true;

    Object.keys(inputs).forEach((input) => {
      isValid = !inputs[input].hasError && inputs[input].isTouched && isValid;
    });

    return isValid;
  };
}

export default new FormValidation();

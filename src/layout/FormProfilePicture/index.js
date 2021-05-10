import React from 'react';

import { profilePictureInput } from '../../constants/inputs';

import useInputs from '../../hooks/useInputs';

import Form from '../../components/Form';
import Input from '../../components/Inputs';

const FormProfilePicture = () => {
  const { inputs, changeHandler, focusHandler } = useInputs(
    profilePictureInput
  );
  return (
    <Form title="Add Profile Picture" info="Can be added later">
      {inputs.map((input) => (
        <Input
          id={input.id}
          key={input.id}
          hasError={input.hasError}
          type="file"
          value={input.value}
          errorMsg={input.errorMsg}
          changeHandler={changeHandler}
          focusHandler={focusHandler}
        />
      ))}
    </Form>
  );
};

export default FormProfilePicture;

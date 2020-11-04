import React from 'react';

import { PrimaryTitle } from './styled';

import { inputsLogin } from '../../constants/Inputs';

import Form from '../../components/Form';
import InputNormal from '../../components/Inputs/InputNormal';
import InputPassword from '../../components/Inputs/InputPassword';

const FormLogin = () => {
  return (
    <>
      <PrimaryTitle>Login</PrimaryTitle>
      <Form>
        {Object.keys(inputsLogin).map((input, index) =>
          inputsLogin[input].type === 'password' ? (
            <InputPassword
              id={inputsLogin[input].id}
              placeholder={inputsLogin[input].placeholder}
              type={inputsLogin[input].type}
              info={inputsLogin[input].info}
              index={index}
            />
          ) : (
            <InputNormal
              id={inputsLogin[input].id}
              placeholder={inputsLogin[input].placeholder}
              type={inputsLogin[input].type}
              info={inputsLogin[input].info}
              index={index}
            />
          )
        )}
      </Form>
    </>
  );
};

export default FormLogin;

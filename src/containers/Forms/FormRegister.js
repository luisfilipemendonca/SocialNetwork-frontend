import React from 'react';

import { PrimaryTitle } from './styled';

import { inputsRegister } from '../../constants/Inputs';

import Form from '../../components/Form';
import InputNormal from '../../components/Inputs/InputNormal';
import InputPassword from '../../components/Inputs/InputPassword';

const FormLogin = () => {
  return (
    <>
      <PrimaryTitle>Register</PrimaryTitle>
      <Form>
        {Object.keys(inputsRegister).map((input, index) =>
          inputsRegister[input].type === 'password' ? (
            <InputPassword
              id={inputsRegister[input].id}
              placeholder={inputsRegister[input].placeholder}
              type={inputsRegister[input].type}
              info={inputsRegister[input].info}
              index={index}
            />
          ) : (
            <InputNormal
              id={inputsRegister[input].id}
              placeholder={inputsRegister[input].placeholder}
              type={inputsRegister[input].type}
              info={inputsRegister[input].info}
              index={index}
            />
          )
        )}
      </Form>
    </>
  );
};

export default FormLogin;

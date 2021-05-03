import React from 'react';

import { SectionForm } from '../style';

import Form from '../components/Form';
import Input from '../components/Inputs';

const LoginPage = () => {
  return (
    <SectionForm>
      <Form title="Login" info="Fill all fields to login into your account">
        <Input label="Email" hasError />
        <Input label="Password" />
      </Form>
    </SectionForm>
  );
};

export default LoginPage;

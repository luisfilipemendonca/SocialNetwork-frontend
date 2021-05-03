import React from 'react';

import { SectionForm } from '../style';

import Form from '../components/Form';

const LoginPage = () => {
  return (
    <SectionForm>
      <Form title="Login" info="Fill all fields to login into your account" />
    </SectionForm>
  );
};

export default LoginPage;

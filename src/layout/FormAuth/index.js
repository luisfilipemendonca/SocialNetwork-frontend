import React from 'react';
import { Link } from 'react-router-dom';

const FormAuth = ({ islogging }) => {
  return (
    <form>
      <header>
        <h1>{islogging ? 'Login' : 'Register'}</h1>
        <p>
          Fill all the fields to{' '}
          {islogging ? 'login into your account' : 'create your account'}
        </p>
      </header>
      {islogging ? (
        <p>
          Dont have an account yet? <Link to="register">Click here!</Link>
        </p>
      ) : (
        <p>
          <Link to="login">Change to login</Link>
        </p>
      )}
    </form>
  );
};

export default FormAuth;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { PrimaryTitle, FormContainer } from './styled';
import { BtnCenterContainer } from '../../style';

import { inputsUpdate } from '../../constants/Inputs';
import customInput from '../../hooks/CustomInput';
import formValidation from '../../helpers/FormValidations';

import Form from '../../components/Form';
import Input from '../../components/Inputs';
import Button from '../../components/Buttons';
import Modal from '../Modal';

import { updateUser } from '../../store/actions/Profile';

const FormUpdate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const user = useSelector((state) => state.profile.user);
  const userId = useSelector((state) => state.auth.userId);
  const [
    formInputs,
    inputChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    ,
    setInputValue,
  ] = customInput(inputsUpdate);

  const submitHandler = (e) => {
    e.preventDefault();

    const isFormValid = formValidation.formValidator(formInputs, false);

    if (!isFormValid) return;

    const data = formValidation.createFormObject(formInputs);

    dispatch(updateUser(data, history));
  };

  useEffect(() => {
    const data = {
      username: user.username,
      email: user.email,
    };

    setInputValue(data);
  }, []);

  if (parseInt(params.id, 10) !== userId) {
    history.goBack();
    return null;
  }

  return (
    <Modal>
      <FormContainer>
        <PrimaryTitle>Update Account</PrimaryTitle>
        <Form>
          {Object.keys(formInputs).map((input) => (
            <Input
              key={input}
              id={input}
              inputData={formInputs[input]}
              focusHandler={inputFocusHandler}
              changeHandler={inputChangeHandler}
              blurHandler={inputBlurHandler}
            />
          ))}
          <BtnCenterContainer>
            <Button
              type="submit"
              className="btn-primary"
              clickHandler={submitHandler}
            >
              Update
            </Button>
          </BtnCenterContainer>
        </Form>
      </FormContainer>
    </Modal>
  );
};

export default FormUpdate;

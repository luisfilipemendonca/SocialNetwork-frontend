import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SectionForm } from '../../style';

import { postInputs } from '../../constants/inputs';

import { addPost } from '../../store/actions/user';

import useInputs from '../../hooks/useInputs';

import FormHelper from '../../helpers/Form';

import Form from '../../components/Form';
import Input from '../../components/Inputs';

const FormAddPost = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { inputs, changeHandler, focusHandler, setErrorHandler } = useInputs(
    postInputs
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    if (!form.validate(setErrorHandler)) return;

    const data = form.buildFormData();

    dispatch(addPost(data));
    history.replace('/profile');
  };

  const aditionalBtn = (
    <button type="button" onClick={() => history.goBack()}>
      Cancel
    </button>
  );

  return (
    <SectionForm>
      <Form
        title="Create a new Post"
        submitHandler={submitHandler}
        submitBtnDescription="Save"
        aditionalBtn={aditionalBtn}
      >
        {inputs.map(
          ({
            id,
            placeholder,
            label,
            value,
            hasError,
            errorMsg,
            type,
            isMultiple,
          }) => (
            <Input
              key={id}
              id={id}
              placeholder={placeholder}
              label={label}
              value={value}
              hasError={hasError}
              errorMsg={errorMsg}
              type={type}
              isMultiple={isMultiple}
              changeHandler={changeHandler}
              focusHandler={focusHandler}
            />
          )
        )}
      </Form>
    </SectionForm>
  );
};

export default FormAddPost;

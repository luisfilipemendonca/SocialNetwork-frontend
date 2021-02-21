import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainContainer from '../../layout/Main';

import Post from '../../components/Post';
import Modal from '../../components/Modal';
import Form from '../../components/Form';
import Input from '../../components/Inputs';

import { fetchPosts } from '../../store/actions/Posts';
import { profilePhotoInputs } from '../../constants/Inputs';
import useFormInputs from '../../hooks/useFormInputs';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    formInputs,
    changeHandler,
    blurHandler,
    focusHandler,
  } = useFormInputs(profilePhotoInputs);

  const posts = useSelector((state) => state.posts.posts);

  const toggleModalHandler = () => setIsOpen(!isOpen);

  const inputs = formInputs.map((input) => (
    <Input
      key={input.id}
      input={input}
      changeHandler={changeHandler}
      blurHandler={blurHandler}
      focusHandler={focusHandler}
    />
  ));

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    const timeout = setTimeout(toggleModalHandler, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} toggleModal={toggleModalHandler}>
        <Form
          title="Welcome Filipe"
          subtitle="Choose Your profile photo. Can be added later!"
        >
          {inputs}
        </Form>
      </Modal>
      <MainContainer>
        {posts.map((post) => (
          <Post postData={post} key={post.id} />
        ))}
      </MainContainer>
    </>
  );
};

export default Main;

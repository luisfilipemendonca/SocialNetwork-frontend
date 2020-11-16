import React from 'react';
import { FaTimes, FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import customInput from '../../hooks/CustomInput';
import formValidation from '../../helpers/FormValidations';

import Dates from '../../helpers/Dates';

import { inputsComment } from '../../constants/Inputs';

import { addComment } from '../../store/actions/Posts';

import {
  CommentsContainer,
  CommentsHeader,
  Title,
  CommentsContent,
  CommentContainer,
  CommentHeader,
  UserPhoto,
  CommentUsername,
  CommentUserInfo,
  CommentDate,
  Comment,
  HelperContainer,
} from './styled';

import Button from '../Buttons';
import Form from '../Form';
import Input from '../Inputs';

const CardComments = ({ isOpen, toggleCommentsHandler, comments, postId }) => {
  const dispatch = useDispatch();
  const [
    formInputs,
    inputChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
  ] = customInput(inputsComment);

  const submitHandler = (e) => {
    e.preventDefault();

    const isFormValid = formValidation.formValidator(formInputs);

    if (!isFormValid) return;

    let data = formValidation.createFormObject(formInputs);

    data = { ...data, postId };

    dispatch(addComment(data));
  };

  return (
    <HelperContainer isOpen={isOpen}>
      <CommentsContainer isOpen={isOpen}>
        <CommentsHeader>
          <Title>Comments</Title>
          <Button
            type="btn"
            className="btn-icon"
            clickHandler={toggleCommentsHandler}
          >
            <FaTimes />
          </Button>
        </CommentsHeader>
        <CommentsContent hasNoComments={comments.length <= 0}>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <CommentContainer
                key={comment.id}
                isRecentlyAdded={comment.isRecentlyAdded}
              >
                <CommentHeader>
                  {comment.User.profilePicture ? (
                    <UserPhoto
                      src={comment.User.profilePictureUrl}
                      alt="User comment profile picture"
                    />
                  ) : (
                    <FaUserCircle />
                  )}
                  <CommentUserInfo>
                    <CommentUsername>{comment.User.username}</CommentUsername>
                    <CommentDate>
                      {Dates.formatFullDate(comment.createdAt)}
                    </CommentDate>
                  </CommentUserInfo>
                </CommentHeader>
                <Comment>{comment.comment}</Comment>
              </CommentContainer>
            ))
          ) : (
            <div>No Comments to show</div>
          )}
        </CommentsContent>
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
          <Button
            type="submit"
            className="btn-primary"
            clickHandler={submitHandler}
          >
            Send
          </Button>
        </Form>
      </CommentsContainer>
    </HelperContainer>
  );
};

export default CardComments;

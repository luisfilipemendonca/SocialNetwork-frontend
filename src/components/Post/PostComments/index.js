import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import {
  PostCommentsContainerAux,
  PostCommentsContainer,
  PostCommentsHeader,
  PostCommentsTitle,
  CommentsContainer,
  CommentContainer,
  Comment,
  CommentForm,
} from './styled';

import PostHeader from '../PostHeader';
import Input from '../../Inputs';

import { commentInputs } from '../../../constants/Inputs';
import useFormInputs from '../../../hooks/useFormInputs';
import FormBuilder from '../../../helpers/FormBuilder';
import { addComment } from '../../../store/actions/Posts';

const PostComments = ({ isOpen, openCommentsHandler, comments, postId }) => {
  const dispatch = useDispatch();
  const {
    formInputs,
    changeHandler,
    blurHandler,
    focusHandler,
  } = useFormInputs(commentInputs);

  const commentsItem = comments.map(({ User, id, comment, createdAt }) => (
    <CommentContainer key={id}>
      <PostHeader userData={User} createdAt={createdAt} forComment />
      <Comment>{comment}</Comment>
    </CommentContainer>
  ));

  const commentInput = formInputs.map((input) => (
    <Input
      key={input.id}
      input={input}
      isComment
      changeHandler={changeHandler}
      blurHandler={blurHandler}
      focusHandler={focusHandler}
    />
  ));

  const submitHandler = (e) => {
    e.preventDefault();

    const formBuilder = new FormBuilder(formInputs);

    if (!formBuilder.isFormValid()) return;

    dispatch(addComment({ ...formBuilder.buildFormObj(), postId }));
  };

  return (
    <PostCommentsContainerAux>
      <PostCommentsContainer isOpen={isOpen}>
        <PostCommentsHeader>
          <PostCommentsTitle>Comments</PostCommentsTitle>
          <button type="button" onClick={openCommentsHandler}>
            <FaTimes />
          </button>
        </PostCommentsHeader>
        <CommentsContainer>{commentsItem}</CommentsContainer>
        <CommentForm onSubmit={submitHandler}>
          {commentInput}
          <button type="submit" onClick={submitHandler}>
            Add Comment
          </button>
        </CommentForm>
      </PostCommentsContainer>
    </PostCommentsContainerAux>
  );
};

export default PostComments;

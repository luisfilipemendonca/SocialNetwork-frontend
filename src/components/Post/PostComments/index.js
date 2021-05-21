import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PostCommentsContainer,
  PostCommentsHeader,
  PostCommentsContent,
  PostCommentCta,
  PostCommentsEmpty,
  CommentContainer,
  CommentHeader,
  CommentUser,
  CommentDate,
  Comment,
  CommentForm,
} from './styled';

import { commentInput } from '../../../constants/inputs';

import useInfiniteScroll from '../../../hooks/useInfiniteScroll';
import useInputs from '../../../hooks/useInputs';

import FormHelper from '../../../helpers/Form';
import { formatedDateTime } from '../../../util/dates';

import { fetchComments, addComment } from '../../../store/actions/posts';

import Input from '../../Inputs';
import Spinner from '../../Spinner';
import { PrimaryButton } from '../../BaseButton/styled';

const PostComments = ({
  comments,
  postId,
  offset,
  hasMoreComments,
  isProfile,
}) => {
  const dispatch = useDispatch();
  const { isComponentLoading } = useSelector((state) => state.loading);
  const { currentPage, infiniteScrollRef, rootRef } = useInfiniteScroll();
  const {
    inputs,
    changeHandler,
    focusHandler,
    setErrorHandler,
    clearInputsHandler,
  } = useInputs(commentInput);

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    if (!form.validate(setErrorHandler)) return;

    const data = form.buildFormObj();

    dispatch(addComment(data, postId, isProfile));
    clearInputsHandler();
  };

  useEffect(() => {
    if (currentPage === 0) return;

    dispatch(fetchComments({ postId, offset, page: currentPage }, isProfile));
  }, [currentPage]);

  return (
    <PostCommentsContainer>
      <PostCommentsHeader>Comments</PostCommentsHeader>
      {!comments?.length && currentPage >= 1 && !isComponentLoading && (
        <PostCommentsEmpty>This post dont have comments</PostCommentsEmpty>
      )}
      <PostCommentsContent ref={rootRef}>
        {comments?.map(
          ({
            comment,
            User,
            createdAt: commentCreatedAt,
            id: commentId,
            recentlyAdded,
          }) => (
            <CommentContainer key={commentId} recentlyAdded={recentlyAdded}>
              <CommentHeader>
                <CommentUser>{User.username}</CommentUser>
                <CommentDate>{formatedDateTime(commentCreatedAt)}</CommentDate>
              </CommentHeader>
              <Comment>{comment}</Comment>
            </CommentContainer>
          )
        )}
        {hasMoreComments && (
          <div ref={infiniteScrollRef}>{isComponentLoading && <Spinner />}</div>
        )}
      </PostCommentsContent>
      <PostCommentCta>
        <CommentForm onSubmit={submitHandler}>
          {inputs.map(
            ({ id, placeholder, value, hasError, errorMsg, type }) => (
              <Input
                key={id}
                id={id}
                placeholder={placeholder}
                value={value}
                hasError={hasError}
                errorMsg={errorMsg}
                type={type}
                changeHandler={changeHandler}
                focusHandler={focusHandler}
              />
            )
          )}
          <PrimaryButton type="button" onClick={submitHandler}>
            Add Comment
          </PrimaryButton>
        </CommentForm>
      </PostCommentCta>
    </PostCommentsContainer>
  );
};

export default PostComments;

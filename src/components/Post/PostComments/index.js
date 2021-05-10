import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  PostCommentsContainer,
  PostCommentsHeader,
  PostCommentsContent,
  PostCommentCta,
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

import { fetchComments, addComment } from '../../../store/actions/posts';

import Input from '../../Inputs';

const PostComments = ({
  comments,
  postId,
  offset,
  hasMoreComments,
  isProfile,
}) => {
  const dispatch = useDispatch();
  const { currentPage, infiniteScrollRef, rootRef } = useInfiniteScroll();
  const { inputs, changeHandler, focusHandler, setErrorHandler } = useInputs(
    commentInput
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    if (!form.validate(setErrorHandler)) return;

    const data = form.buildFormObj();

    dispatch(addComment(data, postId, isProfile));
  };

  useEffect(() => {
    if (currentPage === 0) return;

    dispatch(fetchComments({ postId, offset, page: currentPage }, isProfile));
  }, [currentPage]);

  return (
    <PostCommentsContainer>
      <PostCommentsHeader>Comments</PostCommentsHeader>
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
                <CommentDate>{commentCreatedAt}</CommentDate>
              </CommentHeader>
              <Comment>{comment}</Comment>
            </CommentContainer>
          )
        )}
        {hasMoreComments && <div ref={infiniteScrollRef}>Loading...</div>}
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
          <button type="button" onClick={submitHandler}>
            Add Comment
          </button>
        </CommentForm>
      </PostCommentCta>
    </PostCommentsContainer>
  );
};

export default PostComments;

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

import { fetchComments } from '../../../store/actions/posts';

import Input from '../../Inputs';

const PostComments = ({
  comments,
  isCommentsOpen,
  postId,
  offset,
  hasMoreComments,
}) => {
  const dispatch = useDispatch();
  const { currentPage, infiniteScrollRef, rootRef } = useInfiniteScroll(
    hasMoreComments
  );
  const { inputs, changeHandler, focusHandler, clearInputsHandler } = useInputs(
    commentInput
  );

  useEffect(() => {
    if (currentPage === 0 || !hasMoreComments) return;

    dispatch(fetchComments({ postId, offset, page: currentPage }));
  }, [currentPage]);

  useEffect(() => {
    if (isCommentsOpen) {
      clearInputsHandler();
    }
  }, [isCommentsOpen]);

  return (
    <PostCommentsContainer isOpen={isCommentsOpen}>
      <PostCommentsHeader>Comments</PostCommentsHeader>
      <PostCommentsContent ref={rootRef}>
        {comments?.map(
          ({ comment, User, createdAt: commentCreatedAt, id: commentId }) => (
            <CommentContainer key={commentId}>
              <CommentHeader>
                <CommentUser>{User.username}</CommentUser>
                <CommentDate>{commentCreatedAt}</CommentDate>
              </CommentHeader>
              <Comment>{comment}</Comment>
            </CommentContainer>
          )
        )}
        <div ref={infiniteScrollRef}>Loading...</div>
      </PostCommentsContent>
      <PostCommentCta>
        <CommentForm>
          {Object.keys(inputs).map((key) => (
            <Input
              key={key}
              id={key}
              placeholder={inputs[key].placeholder}
              label={inputs[key].label}
              value={inputs[key].value}
              hasError={inputs[key].hasError}
              errorMsg={inputs[key].errorMsg}
              type={inputs[key].type}
              changeHandler={changeHandler}
              focusHandler={focusHandler}
            />
          ))}
          <button type="button">Add Comment</button>
        </CommentForm>
      </PostCommentCta>
    </PostCommentsContainer>
  );
};

export default PostComments;

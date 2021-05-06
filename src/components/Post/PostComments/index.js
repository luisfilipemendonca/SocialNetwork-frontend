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
} from './styled';

import useInfiniteScroll from '../../../hooks/useInfiniteScroll';

import { fetchComments } from '../../../store/actions/posts';

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

  useEffect(() => {
    if (currentPage === 0 || !hasMoreComments) return;

    dispatch(fetchComments({ postId, offset, page: currentPage }));
  }, [currentPage]);

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
      <PostCommentCta>Ola</PostCommentCta>
    </PostCommentsContainer>
  );
};

export default PostComments;

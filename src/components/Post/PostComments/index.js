import React from 'react';
import { FaTimes } from 'react-icons/fa';

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

import { commentInput } from '../../../constants/Inputs';

import PostHeader from '../PostHeader';
import Input from '../../Inputs';

const PostComments = ({ isOpen, openCommentsHandler, comments }) => {
  // console.log(comments);

  const commentsItem = comments.map(({ User, id, comment, createdAt }) => (
    <CommentContainer key={id}>
      <PostHeader userData={User} createdAt={createdAt} forComment />
      <Comment>{comment}</Comment>
    </CommentContainer>
  ));

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
        <CommentForm>
          <Input type="textarea" input={commentInput} isComment />
          <button type="submit">Add Comment</button>
        </CommentForm>
      </PostCommentsContainer>
    </PostCommentsContainerAux>
  );
};

export default PostComments;

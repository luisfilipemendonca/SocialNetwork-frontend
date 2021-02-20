import React, { useEffect } from 'react';
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
import {
  addComment,
  fetchPostComments,
  cleanComments,
} from '../../../store/actions/Posts';

const PostComments = ({
  isOpen,
  openCommentsHandler,
  commentsData,
  postId,
}) => {
  const dispatch = useDispatch();
  const {
    formInputs,
    changeHandler,
    blurHandler,
    focusHandler,
  } = useFormInputs(commentInputs);
  const { comments, page, offset, count } = commentsData;

  console.log(page, offset, count);

  const commentsItem =
    comments &&
    comments.map(({ User, id, comment, createdAt, isRecentlyAdded }) => (
      <CommentContainer key={id} isRecentlyAdded={isRecentlyAdded}>
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

  const fetchCommentsHandler = () => {
    dispatch(fetchPostComments(postId, page, offset));
  };

  useEffect(() => {
    if (isOpen) dispatch(fetchPostComments(postId, page, offset));
    else dispatch(cleanComments(postId));
  }, [isOpen]);

  return (
    <PostCommentsContainerAux>
      <PostCommentsContainer isOpen={isOpen}>
        <PostCommentsHeader>
          <PostCommentsTitle>Comments</PostCommentsTitle>
          <button type="button" onClick={openCommentsHandler}>
            <FaTimes />
          </button>
        </PostCommentsHeader>
        <CommentsContainer>
          {commentsItem}
          {page - 1 < count && (
            <button type="button" onClick={fetchCommentsHandler}>
              Show more comments
            </button>
          )}
        </CommentsContainer>
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

import React from 'react';
import { FaCommentAlt, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { PostBtn, PostCtaContainer } from './styled';

import { addLike, deleteLike } from '../../../store/actions/posts';

const PostCta = ({ toggleCommentsVisibility, liked, id }) => {
  const dispatch = useDispatch();

  const addLikeHandler = () => {
    dispatch(addLike(id));
  };

  const deleteLikeHandler = () => {
    dispatch(deleteLike(id));
  };
  return (
    <PostCtaContainer>
      <PostBtn type="button" onClick={toggleCommentsVisibility}>
        <FaCommentAlt />
      </PostBtn>
      <PostBtn
        type="button"
        onClick={liked ? deleteLikeHandler : addLikeHandler}
      >
        {liked ? <FaHeart /> : <FaHeartBroken />}
      </PostBtn>
    </PostCtaContainer>
  );
};

export default PostCta;

import React from 'react';
import { FaCommentAlt, FaHeart, FaHeartBroken } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { PostBtn, PostCtaContainer } from './styled';

import { addLike, deleteLike } from '../../../store/actions/posts';

const PostCta = ({
  toggleCommentsVisibility,
  liked,
  id,
  isProfile,
  isOpen,
}) => {
  const dispatch = useDispatch();

  const addLikeHandler = () => {
    dispatch(addLike(id, isProfile));
  };

  const deleteLikeHandler = () => {
    dispatch(deleteLike(id, isProfile));
  };
  return (
    <PostCtaContainer>
      <PostBtn
        type="button"
        onClick={toggleCommentsVisibility}
        isSelected={isOpen}
      >
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

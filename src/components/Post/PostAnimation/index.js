import React from 'react';

import { PostLikeAnimContainer, PostLikeAnim } from './styled';

const PostAnimation = ({ isLiked, alreadyLiked }) => {
  return (
    <PostLikeAnimContainer isLiked={isLiked && !alreadyLiked}>
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
      <PostLikeAnim />
    </PostLikeAnimContainer>
  );
};

export default PostAnimation;

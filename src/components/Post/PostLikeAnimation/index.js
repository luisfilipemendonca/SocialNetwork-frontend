import React from 'react';

import { PostLikeAnimationContainer, PostLikeAnimationHeart } from './styled';

const PostLikeAnimation = () => {
  const heartArr = Array.from({ length: 20 }).map((_, idx) => idx);

  return (
    <PostLikeAnimationContainer>
      {heartArr.map((value) => (
        <PostLikeAnimationHeart key={value} position={value} />
      ))}
    </PostLikeAnimationContainer>
  );
};

export default PostLikeAnimation;

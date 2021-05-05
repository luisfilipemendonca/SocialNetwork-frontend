import React, { useState } from 'react';

import {
  PostPhotoContainer,
  PostPhotoSlider,
  PostPhoto,
  PostSliderBulletsContainer,
  PostSliderBullet,
} from './styled';

import PostLikeAnimation from '../PostLikeAnimation';

const PostPhotos = ({ photos }) => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const sliderPositionHandler = (position) => {
    setSliderPosition(position);
  };

  return (
    <PostPhotoContainer>
      <PostPhotoSlider position={sliderPosition}>
        {photos.map((photo) => (
          <PostPhoto key={photo.id} src={photo.postPhotoUrl} />
        ))}
      </PostPhotoSlider>
      {photos.length > 1 && (
        <PostSliderBulletsContainer>
          <PostSliderBullet onClick={() => sliderPositionHandler(0)} />
          <PostSliderBullet onClick={() => sliderPositionHandler(1)} />
          <PostSliderBullet onClick={() => sliderPositionHandler(2)} />
        </PostSliderBulletsContainer>
      )}
      <PostLikeAnimation />
    </PostPhotoContainer>
  );
};

export default PostPhotos;

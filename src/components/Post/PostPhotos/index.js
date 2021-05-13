import React from 'react';

import { PostPhotoContainer } from './styled';

import ImgSlider from '../../ImgSlider';
import PostLikeAnimation from '../PostLikeAnimation';

const PostPhotos = ({ photos, showAnimation }) => {
  const photosData = photos.map((photo) => photo.postPhotoUrl);

  return (
    <PostPhotoContainer>
      <ImgSlider imgs={photosData} />
      {showAnimation && <PostLikeAnimation />}
    </PostPhotoContainer>
  );
};

export default PostPhotos;

import React, { useState } from 'react';

import { SliderContainer, SliderBullets, Bullet } from './styled';

import PostImage from '../PostImage';

const PostImageSlider = ({ postPhotos, alt }) => {
  const [slideTranslation, setSliderTranslation] = useState(0);
  const photos = postPhotos.map((postPhoto) => (
    <PostImage src={postPhoto.postPhotoUrl} alt={alt} key={postPhoto.id} />
  ));

  const slideHandler = (idx) => {
    setSliderTranslation(idx * 100);
  };

  const bullets = postPhotos.map((postPhoto, index) => (
    <Bullet onClick={() => slideHandler(index)} key={postPhoto.id} />
  ));

  return (
    <>
      <SliderContainer slideTranslation={slideTranslation}>
        {photos}
      </SliderContainer>
      <SliderBullets>{bullets}</SliderBullets>
    </>
  );
};

export default PostImageSlider;

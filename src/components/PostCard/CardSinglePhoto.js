import React from 'react';

import { CardPhotoContainer, CardPhoto } from './styled';

import CardLikeAnimation from './CardLikeAnimation';

const CardSinglePhoto = ({ data, liked }) => {
  const { postPhotoUrl } = data;

  return (
    <CardPhotoContainer>
      <CardPhoto src={postPhotoUrl} />
      <CardLikeAnimation liked={liked} />
    </CardPhotoContainer>
  );
};

export default CardSinglePhoto;

import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { withTheme } from 'styled-components';

import { CardPhotoContainer, CardPhoto, BulletsContainer } from './styled';

import Button from '../Buttons';
import CardLikeAnimation from './CardLikeAnimation';

const CardMultiplePhoto = ({ data, theme, liked }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const changePhotoHandler = (index) => setPhotoIndex(index);

  return (
    <CardPhotoContainer isMultiple>
      <CardPhoto src={data[photoIndex].postPhotoUrl} />
      <CardLikeAnimation liked={liked} />
      <BulletsContainer>
        {data.map((photo, index) => (
          <Button
            className="btn-icon"
            type="button"
            key={photo.id}
            clickHandler={() => changePhotoHandler(index)}
          >
            <FaCircle
              color={
                photoIndex === index
                  ? theme.colors.primaryDark
                  : theme.colors.primaryNormal
              }
            />
          </Button>
        ))}
      </BulletsContainer>
    </CardPhotoContainer>
  );
};

export default withTheme(CardMultiplePhoto);

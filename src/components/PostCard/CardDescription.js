import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

import {
  CardDescriptionContainer,
  Description,
  ActionsCounter,
} from './styled';

const CardDescription = ({ description, commentsQty, likesQty }) => {
  return (
    <CardDescriptionContainer>
      <Description>{description}</Description>
      <ActionsCounter>
        <FaHeart /> Likes: {likesQty}
      </ActionsCounter>
      <ActionsCounter>
        <FaComment /> Comments: {commentsQty}
      </ActionsCounter>
    </CardDescriptionContainer>
  );
};

export default CardDescription;

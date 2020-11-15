import React from 'react';
import { FaComment, FaHeartBroken, FaHeart } from 'react-icons/fa';

import { CtaContainer } from './styled';

import Button from '../Buttons';

const CardCta = ({
  alreadyLiked,
  likeHandler,
  dislikeHandler,
  toggleCommentsHandler,
}) => {
  return (
    <CtaContainer>
      <Button
        type="button"
        className="btn-icon"
        clickHandler={toggleCommentsHandler}
      >
        <FaComment />
      </Button>
      <Button
        type="button"
        className="btn-icon"
        clickHandler={alreadyLiked ? dislikeHandler : likeHandler}
      >
        {alreadyLiked ? <FaHeart /> : <FaHeartBroken />}
      </Button>
    </CtaContainer>
  );
};

export default CardCta;

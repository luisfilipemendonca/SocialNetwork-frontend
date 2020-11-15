import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import Dates from '../../helpers/Dates';

import {
  CardHeaderContainer,
  HeaderPhotoContainer,
  HeaderPhoto,
  HeaderInfo,
  PostUsername,
  PostDate,
} from './styled';

const CardHeader = ({ data, date }) => {
  const { username, profilePicture, profilePictureUrl } = data;

  return (
    <CardHeaderContainer>
      <HeaderPhotoContainer>
        {profilePicture ? (
          <HeaderPhoto src={profilePictureUrl} alt="User post" />
        ) : (
          <FaUserCircle />
        )}
      </HeaderPhotoContainer>
      <HeaderInfo>
        <PostUsername>{username}</PostUsername>
        <PostDate>{Dates.formatFullDate(date)}</PostDate>
      </HeaderInfo>
    </CardHeaderContainer>
  );
};

export default CardHeader;

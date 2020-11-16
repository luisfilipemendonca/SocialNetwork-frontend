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

import Button from '../Buttons';

const CardHeader = ({ data, date, deletePost, isDeletable }) => {
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
      {isDeletable && (
        <Button type="button" className="btn-primary" clickHandler={deletePost}>
          Delete Post
        </Button>
      )}
    </CardHeaderContainer>
  );
};

export default CardHeader;

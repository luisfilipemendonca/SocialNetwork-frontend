import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { formatedDateTime } from '../../../util/dates';

import {
  PostHeaderContainer,
  PostDate,
  PostUser,
  PostUserIcon,
  PostUserImg,
  PostUsername,
} from './styled';

const PostHeader = ({
  profilePicture,
  profilePictureUrl,
  username,
  createdAt,
}) => {
  return (
    <PostHeaderContainer>
      <PostUser>
        {profilePicture ? (
          <PostUserImg src={profilePictureUrl} />
        ) : (
          <PostUserIcon>
            <FaUserCircle />
          </PostUserIcon>
        )}
        <PostUsername>{username}</PostUsername>
      </PostUser>
      <PostDate>{formatedDateTime(createdAt)}</PostDate>
    </PostHeaderContainer>
  );
};

export default PostHeader;

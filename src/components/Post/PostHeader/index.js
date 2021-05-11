import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
  postUserId,
}) => {
  const { userId } = useSelector((state) => state.user);

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
        <PostUsername>
          <Link to={`/profile${userId === postUserId ? '' : `/${postUserId}`}`}>
            {username}
          </Link>
        </PostUsername>
      </PostUser>
      <PostDate>{formatedDateTime(createdAt)}</PostDate>
    </PostHeaderContainer>
  );
};

export default PostHeader;

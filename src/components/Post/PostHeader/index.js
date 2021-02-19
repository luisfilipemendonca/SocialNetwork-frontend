import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { PostHeaderContainer, PostIcon, UserDetails, Date } from './styled';

const PostHeader = ({ userData, forComment, createdAt }) => {
  const { profilePicture, username } = userData;
  return (
    <PostHeaderContainer forComment={forComment}>
      <UserDetails>
        {!profilePicture ? (
          <PostIcon forComment={forComment}>
            <FaUserCircle />
          </PostIcon>
        ) : null}
        <Link to="/">
          <h3>{username}</h3>
        </Link>
      </UserDetails>
      <Date>{createdAt}</Date>
    </PostHeaderContainer>
  );
};

export default PostHeader;

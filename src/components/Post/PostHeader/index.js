import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { PostHeaderContainer, PostIcon } from './styled';

const PostHeader = ({ userData }) => {
  const { profilePicture, username } = userData;
  return (
    <PostHeaderContainer>
      {!profilePicture ? (
        <PostIcon>
          <FaUserCircle />
        </PostIcon>
      ) : null}
      <Link to="/">
        <h3>{username}</h3>
      </Link>
    </PostHeaderContainer>
  );
};

export default PostHeader;

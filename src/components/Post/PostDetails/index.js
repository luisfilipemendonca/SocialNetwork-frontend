import React from 'react';
import { Link } from 'react-router-dom';

import { PostDescription, PostInteration, PostInterationAux } from './styled';

const PostDetails = ({ username, description }) => {
  return (
    <>
      <PostDescription>
        <Link to="/">{username}:</Link>
        {description}
      </PostDescription>
      <PostInteration>
        <PostInterationAux>
          Likes: <span>10</span>
        </PostInterationAux>
        <PostInterationAux>
          Comments: <span>15</span>
        </PostInterationAux>
      </PostInteration>
    </>
  );
};

export default PostDetails;

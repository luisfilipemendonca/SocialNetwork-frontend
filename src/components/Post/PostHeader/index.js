import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { deletePost } from '../../../store/actions/user';
import { clearPost } from '../../../store/actions/posts';

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
  isProfile,
  postId,
}) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.user);

  const deletePostHandler = () => {
    dispatch(deletePost(postId));
    dispatch(clearPost());
  };

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
      {!isProfile || userId !== postUserId ? (
        <PostDate>{formatedDateTime(createdAt)}</PostDate>
      ) : (
        <button type="button" onClick={deletePostHandler}>
          Delete Post
        </button>
      )}
    </PostHeaderContainer>
  );
};

export default PostHeader;

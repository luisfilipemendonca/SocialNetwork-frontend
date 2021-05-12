import React from 'react';

import {
  UserPostsMenu,
  UserPostItem,
  UserPostBtn,
  UserPostImg,
} from './styled';

const UserProfilePosts = ({ userPosts, getPostHandler }) => {
  return (
    <UserPostsMenu>
      {userPosts?.map(({ id: postId, PostPhotos }) => (
        <UserPostItem key={postId}>
          <UserPostBtn type="button" onClick={() => getPostHandler(postId)}>
            <UserPostImg src={PostPhotos[0].postPhotoUrl} />
          </UserPostBtn>
        </UserPostItem>
      ))}
    </UserPostsMenu>
  );
};

export default UserProfilePosts;

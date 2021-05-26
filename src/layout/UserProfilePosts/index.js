import React from 'react';

import { NoPostsText } from '../../style';

import {
  UserPostsMenu,
  UserPostItem,
  UserPostBtn,
  UserPostImg,
} from './styled';

const UserProfilePosts = ({ userPosts, getPostHandler }) => {
  return (
    <>
      {userPosts.length ? (
        <UserPostsMenu>
          {userPosts?.map(({ id: postId, PostPhotos }) => (
            <UserPostItem key={postId}>
              <UserPostBtn type="button" onClick={() => getPostHandler(postId)}>
                <UserPostImg src={PostPhotos[0].postPhotoUrl} />
              </UserPostBtn>
            </UserPostItem>
          ))}
        </UserPostsMenu>
      ) : (
        <NoPostsText>You dont have any post. Why dont you add one?</NoPostsText>
      )}
    </>
  );
};

export default UserProfilePosts;

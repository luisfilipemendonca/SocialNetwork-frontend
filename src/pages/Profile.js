import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import { SectionProfile } from '../style';
import {
  UserProfile,
  UserData,
  UserInfo,
  UserPhotoContainer,
  UserPhoto,
  UserName,
  UserFollowers,
  UserFollow,
  UserFollowType,
  UserFollowValue,
  UserCta,
  UserPostsMenu,
  UserPostItem,
  UserPostBtn,
  UserPostImg,
} from './styled';

import { fetchUserData } from '../store/actions/profile';
import { getPost, clearPost } from '../store/actions/posts';

import Modal from '../components/Modal';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    userId,
    userPosts,
    userProfilePicture,
    userProfilePictureUrl,
    userName,
  } = useSelector((state) => (id ? state.profile : state.user));
  const { selectedPost } = useSelector((state) => state.posts);

  const getPostHandler = (postId) => {
    dispatch(getPost(postId));
  };

  const clearPostHandler = () => {
    dispatch(clearPost());
  };

  useEffect(() => {
    if (!id && userPosts?.length) return;

    if (id) {
      dispatch(fetchUserData(id, true));
    } else {
      dispatch(fetchUserData(userId));
    }
  }, []);

  console.log(selectedPost);

  return (
    <SectionProfile>
      <Modal show={selectedPost.length > 0} closeHandler={clearPostHandler} />
      <UserProfile>
        <UserData>
          <UserInfo>
            <UserPhotoContainer>
              {userProfilePicture ? (
                <UserPhoto src={userProfilePictureUrl} />
              ) : (
                <FaUserCircle />
              )}
            </UserPhotoContainer>
            <UserName>{userName}</UserName>
          </UserInfo>
          <UserFollowers>
            <UserFollow>
              <UserFollowType>Following</UserFollowType>
              <UserFollowValue>10</UserFollowValue>
            </UserFollow>
            <UserFollow>
              <UserFollowType>Followers</UserFollowType>
              <UserFollowValue>10</UserFollowValue>
            </UserFollow>
          </UserFollowers>
        </UserData>
        <UserCta>
          {id ? (
            <button type="button">Follow</button>
          ) : (
            <>
              <button type="button">Create Post</button>
              <button type="button">Update Profile</button>
              <button type="button">Delete Account</button>
            </>
          )}
        </UserCta>
      </UserProfile>
      <UserPostsMenu>
        {userPosts?.map(({ id: postId, PostPhotos }) => (
          <UserPostItem key={postId}>
            <UserPostBtn type="button" onClick={() => getPostHandler(postId)}>
              <UserPostImg src={PostPhotos[0].postPhotoUrl} />
            </UserPostBtn>
          </UserPostItem>
        ))}
      </UserPostsMenu>
    </SectionProfile>
  );
};

export default ProfilePage;

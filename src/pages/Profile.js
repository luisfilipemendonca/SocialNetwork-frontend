import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import { SectionProfile, MainSection } from '../style';
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
  UserPostLink,
  UserPostImg,
} from './styled';

import { fetchUserData } from '../store/actions/profile';

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

  useEffect(() => {
    if (!id && userPosts?.length) return;

    if (id) {
      dispatch(fetchUserData(id, true));
    } else {
      dispatch(fetchUserData(userId));
    }
  }, []);

  console.log(userPosts);

  return (
    <MainSection>
      <SectionProfile>
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
              <UserPostLink to="/">
                <UserPostImg src={PostPhotos[0].postPhotoUrl} />
              </UserPostLink>
            </UserPostItem>
          ))}
        </UserPostsMenu>
      </SectionProfile>
    </MainSection>
  );
};

export default ProfilePage;

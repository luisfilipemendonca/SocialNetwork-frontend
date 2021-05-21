import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addFollower, deleteFollower } from '../../store/actions/profile';
import { deleteUser } from '../../store/actions/user';

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
} from './styled';

import {
  PrimaryButton,
  PrimaryLink,
  SecondaryLink,
  WarningButton,
} from '../../components/BaseButton/styled';

const UserProfileInfo = ({
  userProfilePicture,
  userProfilePictureUrl,
  userName,
  userId,
  id,
  profileUserId,
  followers,
  following,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isFollowing = followers.some(
    (follower) => follower.followerId === userId
  );

  const followerHandler = () => {
    if (isFollowing) {
      dispatch(deleteFollower(profileUserId, userId));
    } else {
      dispatch(addFollower(profileUserId));
    }
  };

  const deleteUserHandler = () => {
    dispatch(deleteUser(userId));
  };

  return (
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
            <UserFollowValue>{following.length}</UserFollowValue>
          </UserFollow>
          <UserFollow>
            <UserFollowType>Followers</UserFollowType>
            <UserFollowValue>{followers.length}</UserFollowValue>
          </UserFollow>
        </UserFollowers>
      </UserData>
      <UserCta>
        {id ? (
          <PrimaryButton type="button" onClick={followerHandler}>
            {isFollowing ? 'Unfollow' : 'Follow'}
          </PrimaryButton>
        ) : (
          <>
            <PrimaryLink to={`${location.pathname}/user/add_post`}>
              Create Post
            </PrimaryLink>
            <SecondaryLink to={`${location.pathname}/user/update_account`}>
              Update Profile
            </SecondaryLink>
            <WarningButton type="button" onClick={deleteUserHandler}>
              Delete Account
            </WarningButton>
          </>
        )}
      </UserCta>
    </UserProfile>
  );
};

export default UserProfileInfo;

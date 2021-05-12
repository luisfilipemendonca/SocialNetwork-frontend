import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addFollower, deleteFollower } from '../../store/actions/profile';

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
            <PrimaryLink to="/">Create Post</PrimaryLink>
            <SecondaryLink to={`${location.pathname}/user/update_account`}>
              Update Profile
            </SecondaryLink>
            <button type="button">Delete Account</button>
          </>
        )}
      </UserCta>
    </UserProfile>
  );
};

export default UserProfileInfo;

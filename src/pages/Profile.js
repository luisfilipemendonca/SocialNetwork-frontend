import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { SectionProfile } from '../style';

import { fetchUserData } from '../store/actions/profile';
import { getPost, clearPost } from '../store/actions/posts';

import Modal from '../components/Modal';
import Post from '../components/Post';
import Loader from '../components/Loader';
import UserProfileInfo from '../layout/UserProfileInfo';
import UserProfilePosts from '../layout/UserProfilePosts';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isPageLoading } = useSelector((state) => state.loading);
  const { userId: appUserId } = useSelector((state) => state.user);
  const {
    userId,
    userPosts,
    userProfilePicture,
    userProfilePictureUrl,
    userName,
    userFollowers,
    userFollowing,
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
  }, [id]);

  if (isPageLoading) {
    return <Loader />;
  }

  return (
    <SectionProfile>
      <Modal show={selectedPost.length > 0} closeHandler={clearPostHandler}>
        {selectedPost.map(
          ({
            id: postId,
            description,
            createdAt,
            User,
            PostPhotos,
            comments,
            liked,
            alreadyLiked,
            Likes,
            hasMoreComments,
          }) => (
            <Post
              key={postId}
              id={postId}
              description={description}
              createdAt={createdAt}
              user={User}
              photos={PostPhotos}
              comments={comments}
              hasMoreComments={hasMoreComments}
              likesCount={Likes.length}
              liked={liked}
              alreadyLiked={alreadyLiked}
              isProfile
            />
          )
        )}
      </Modal>
      <UserProfileInfo
        id={id}
        userName={userName}
        userProfilePicture={userProfilePicture}
        userProfilePictureUrl={userProfilePictureUrl}
        followers={userFollowers}
        following={userFollowing}
        userId={appUserId}
        profileUserId={id}
      />
      <UserProfilePosts userPosts={userPosts} getPostHandler={getPostHandler} />
    </SectionProfile>
  );
};

export default ProfilePage;

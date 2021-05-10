import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainSection, PostsContainer } from '../style';

import { fetchPosts } from '../store/actions/posts';
import { updateUserPhoto } from '../store/actions/user';

import Post from '../components/Post';
import Modal from '../components/Modal';
import FormProfilePicture from '../layout/FormProfilePicture';

const WorldPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { userFirstTime } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.posts);
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(updateUserPhoto({}, false));
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    if (!userFirstTime) return;

    setTimeout(() => setShowModal(true), 1000);
  }, [userFirstTime]);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <>
      <Modal show={showModal} closeHandler={closeModal}>
        <FormProfilePicture closeHandler={closeModal} />
      </Modal>
      <MainSection>
        <PostsContainer>
          {posts.map(
            ({
              id,
              description,
              createdAt,
              User,
              PostPhotos,
              comments,
              liked,
              alreadyLiked,
              Likes,
              hasMoreComments,
              commentsOffset,
            }) => (
              <Post
                key={id}
                id={id}
                description={description}
                createdAt={createdAt}
                user={User}
                photos={PostPhotos}
                comments={comments}
                hasMoreComments={hasMoreComments}
                likesCount={Likes.length}
                liked={liked}
                alreadyLiked={alreadyLiked}
                commentsOffset={commentsOffset}
              />
            )
          )}
        </PostsContainer>
      </MainSection>
    </>
  );
};

export default WorldPage;

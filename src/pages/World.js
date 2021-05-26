import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainSection, PostsContainer, NoPostsText } from '../style';

import { fetchPosts, clearPost } from '../store/actions/posts';
import { updateUserPhoto } from '../store/actions/user';

import useInfiniteScroll from '../hooks/useInfiniteScroll';

import Post from '../components/Post';
import Modal from '../components/Modal';
import Loader from '../components/Loader';
import FormProfilePicture from '../layout/FormProfilePicture';
import Search from '../layout/Search';
import Spinner from '../components/Spinner';

const WorldPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { userFirstTime } = useSelector((state) => state.user);
  const { posts, isPostsFetched, hasMorePosts } = useSelector(
    (state) => state.posts
  );
  const { isPageLoading } = useSelector((state) => state.loading);
  const { currentPage, infiniteScrollRef } = useInfiniteScroll();
  const dispatch = useDispatch();

  const closeModal = (value = false) => {
    if (!value) {
      dispatch(updateUserPhoto('', false));
    }
    setShowModal(false);
  };

  useEffect(() => {
    if (currentPage === 0) return;

    dispatch(fetchPosts(currentPage));
  }, [currentPage]);

  useEffect(() => {
    if (!userFirstTime) return;

    setTimeout(() => setShowModal(true), 500);
  }, [userFirstTime]);

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    return () => dispatch(clearPost());
  }, []);

  return (
    <>
      <Modal show={showModal} closeHandler={closeModal}>
        <FormProfilePicture closeHandler={closeModal} />
      </Modal>
      <MainSection>
        {isPageLoading && <Loader />}
        {!isPageLoading && posts.length > 0 && (
          <>
            <Search />
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
          </>
        )}
        {isPostsFetched && !posts.length && (
          <NoPostsText>There are no posts to show</NoPostsText>
        )}
        {(hasMorePosts || currentPage <= 1) && (
          <div ref={infiniteScrollRef}>{currentPage > 1 && <Spinner />}</div>
        )}
      </MainSection>
    </>
  );
};

export default WorldPage;

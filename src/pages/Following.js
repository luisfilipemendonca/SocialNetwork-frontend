import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainSection, PostsContainer, NoPostsText } from '../style';

import { fetchPosts, clearPost } from '../store/actions/posts';

import useInfiniteScroll from '../hooks/useInfiniteScroll';

import Post from '../components/Post';
import Loader from '../components/Loader';
import Spinner from '../components/Spinner';

const FollowingPage = () => {
  const { posts, hasMorePosts, isPostsFetched } = useSelector(
    (state) => state.posts
  );
  const { isPageLoading } = useSelector((state) => state.loading);
  const { currentPage, infiniteScrollRef } = useInfiniteScroll();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 0) return;

    dispatch(fetchPosts(currentPage, true));
  }, [currentPage]);

  useEffect(() => {
    // eslint-disable-next-line consistent-return
    return () => dispatch(clearPost());
  }, []);

  return (
    <>
      <MainSection>
        {isPageLoading && <Loader />}
        {!isPageLoading && posts.length > 0 && (
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

export default FollowingPage;

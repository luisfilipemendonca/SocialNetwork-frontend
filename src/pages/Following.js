import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainSection, PostsContainer } from '../style';

import { fetchPosts } from '../store/actions/posts';

import Post from '../components/Post';
import Loader from '../components/Loader';

const FollowingPage = () => {
  const { posts } = useSelector((state) => state.posts);
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(true));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
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

export default FollowingPage;

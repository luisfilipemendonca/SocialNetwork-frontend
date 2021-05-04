import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../store/actions/posts';

import Post from '../components/Post';

const WorldPage = () => {
  const { posts } = useSelector((state) => state.posts);
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    <section
      style={{
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {posts.map(
        ({ id, description, createdAt, User, PostPhotos, Comments }) => (
          <Post
            key={id}
            id={id}
            description={description}
            createdAt={createdAt}
            user={User}
            photos={PostPhotos}
            comments={Comments}
          />
        )
      )}
    </section>
  );
};

export default WorldPage;

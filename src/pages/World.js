import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../store/actions/posts';

import Post from '../components/Post';

const HomePage = () => {
  const { posts } = useSelector((state) => state.posts);
  const { isLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  console.log(posts);

  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} />
      ))}
    </section>
  );
};

export default HomePage;

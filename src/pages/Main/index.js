import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainContainer } from '../../style';

import PostCard from '../../components/PostCard';

import { fetchPosts } from '../../store/actions/Posts';

const Main = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const posts = useSelector((state) => state.posts.data);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    if (!posts) return;
    setIsLoading(false);
  }, [posts]);

  return (
    <MainContainer isLoading={isLoading}>
      {isLoading
        ? 'Loading'
        : posts && posts.map((post) => <PostCard data={post} key={post.id} />)}
    </MainContainer>
  );
};

export default Main;

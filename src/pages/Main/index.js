import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainContainer from '../../layout/Main';

import { fetchPosts } from '../../store/actions/Posts';

import Post from '../../components/Post';

const Main = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <MainContainer>
      {posts.map((post) => (
        <Post postData={post} key={post.id} />
      ))}
    </MainContainer>
  );
};

export default Main;

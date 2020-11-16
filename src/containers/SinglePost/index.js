import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import PostCard from '../../components/PostCard';

import { fetchPosts, cleanPosts } from '../../store/actions/Posts';

const SinglePost = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.data);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    dispatch(fetchPosts(params.postId));

    return () => dispatch(cleanPosts());
  }, []);

  return (
    <Modal>
      {post && (
        <PostCard
          data={post[0]}
          isDeletable={userId === parseInt(params.id, 10)}
        />
      )}
    </Modal>
  );
};

export default SinglePost;

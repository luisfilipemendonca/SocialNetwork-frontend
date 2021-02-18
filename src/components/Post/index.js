import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHeartBroken, FaHeart } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';

import { PostContainer, PostImgContainer, PostCTA, PostCTABtn } from './styled';

import { addLike, removeLike } from '../../store/actions/Posts';

import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostImageSlider from './PostImageSlider';
import PostAnimation from './PostAnimation';
import PostDetails from './PostDetails';

const Post = ({ postData }) => {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();
  const {
    User,
    PostPhotos,
    description,
    createdAt,
    alreadyLiked,
    liked,
    id,
  } = postData;

  const addLikeHandler = () => {
    dispatch(addLike({ userId, postId: id }));
  };

  const removeLikeHandler = () => {
    dispatch(removeLike(id, userId));
  };

  const isLiked = liked || alreadyLiked;

  return (
    <PostContainer>
      <PostHeader userData={User} createdAt={createdAt} />
      <PostImgContainer>
        {PostPhotos.length <= 1 ? (
          <PostImage src={PostPhotos[0].postPhotoUrl} alt={description} />
        ) : (
          <PostImageSlider postPhotos={PostPhotos} alt={description} />
        )}
        <PostAnimation isLiked={liked} alreadyLiked={alreadyLiked} />
      </PostImgContainer>
      <PostDetails username={User.username} description={description} />
      <PostCTA>
        <PostCTABtn type="button">
          <BiMessage />
        </PostCTABtn>
        <PostCTABtn
          type="button"
          onClick={!isLiked ? addLikeHandler : removeLikeHandler}
        >
          {isLiked ? <FaHeart /> : <FaHeartBroken />}
        </PostCTABtn>
      </PostCTA>
    </PostContainer>
  );
};

export default Post;

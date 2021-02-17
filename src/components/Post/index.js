import React from 'react';
import { FaHeartBroken } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';

import { PostContainer, PostImgContainer, PostCTA, PostCTABtn } from './styled';

import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostImageSlider from './PostImageSlider';
import PostAnimation from './PostAnimation';
import PostDetails from './PostDetails';

const Post = ({ postData }) => {
  const {
    User,
    PostPhotos,
    description,
    createdAt,
    alreadyLiked,
    liked,
  } = postData;

  const isLiked = alreadyLiked || liked;

  return (
    <PostContainer>
      <PostHeader userData={User} createdAt={createdAt} />
      <PostImgContainer>
        {PostPhotos.length <= 1 ? (
          <PostImage src={PostPhotos[0].postPhotoUrl} alt={description} />
        ) : (
          <PostImageSlider postPhotos={PostPhotos} alt={description} />
        )}
        <PostAnimation isLiked={isLiked} />
      </PostImgContainer>
      <PostDetails username={User.username} description={description} />
      <PostCTA>
        <PostCTABtn type="button">
          <BiMessage />
        </PostCTABtn>
        <PostCTABtn type="button">
          <FaHeartBroken />
        </PostCTABtn>
      </PostCTA>
    </PostContainer>
  );
};

export default Post;

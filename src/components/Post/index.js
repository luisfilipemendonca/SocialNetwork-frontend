import React from 'react';

import {
  PostContainer,
  PostImgContainer,
  PostDescription,
  PostLikes,
  PostComments,
  PostDate,
  PostLikeAnim,
  PostLikeAnimContainer,
} from './styled';

import PostHeader from './PostHeader';
import PostImg from './PostImage';

const Post = ({ postData }) => {
  const { User, PostPhotos, description, createdAt } = postData;
  console.log(postData);
  return (
    <PostContainer>
      <PostHeader userData={User} />
      <PostImgContainer>
        <PostImg src={PostPhotos[0].postPhotoUrl} alt={description} />
        <PostLikeAnimContainer>
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
          <PostLikeAnim />
        </PostLikeAnimContainer>
      </PostImgContainer>
      <PostDescription>{description}</PostDescription>
      <PostLikes>
        Likes: <span>10</span>
      </PostLikes>
      <PostComments>
        Comments: <span>15</span>
      </PostComments>
      <PostDate>{createdAt}</PostDate>
    </PostContainer>
  );
};

export default Post;

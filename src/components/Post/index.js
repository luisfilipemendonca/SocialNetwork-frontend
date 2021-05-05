import React, { useState } from 'react';
import { FaUserCircle, FaCommentAlt, FaHeart } from 'react-icons/fa';

import {
  PostContainer,
  PostContent,
  PostHeader,
  PostUser,
  PostUserImg,
  PostUserIcon,
  PostDate,
  PostUsername,
  PostLikes,
  PostDescription,
  PostCta,
  PostBtn,
  PostCommentsContainer,
  PostCommentsHeader,
  PostCommentsContent,
  PostCommentCta,
  CommentContainer,
  CommentHeader,
  CommentUser,
  CommentDate,
  Comment,
} from './styled';

import PostPhotos from './PostPhotos';

const Post = ({ description, createdAt, user, photos, comments }) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const toggleCommentsVisibility = () => setIsCommentsOpen(!isCommentsOpen);

  return (
    <PostContainer>
      <PostContent>
        <PostHeader>
          <PostUser>
            {user.profilePicture ? (
              <PostUserImg src={user.profilePictureUrl} />
            ) : (
              <PostUserIcon>
                <FaUserCircle />
              </PostUserIcon>
            )}
            <PostUsername>{user.username}</PostUsername>
          </PostUser>
          <PostDate>{createdAt}</PostDate>
        </PostHeader>
        <PostPhotos photos={photos} />
        <PostLikes>Likes: 100</PostLikes>
        <PostDescription>{description}</PostDescription>
        <PostCommentsContainer isOpen={isCommentsOpen}>
          <PostCommentsHeader>Comments</PostCommentsHeader>
          <PostCommentsContent>
            {comments.map(
              ({
                comment,
                User,
                createdAt: commentCreatedAt,
                id: commentId,
              }) => (
                <CommentContainer key={commentId}>
                  <CommentHeader>
                    <CommentUser>{User.username}</CommentUser>
                    <CommentDate>{commentCreatedAt}</CommentDate>
                  </CommentHeader>
                  <Comment>{comment}</Comment>
                </CommentContainer>
              )
            )}
          </PostCommentsContent>
          <PostCommentCta>Ola</PostCommentCta>
        </PostCommentsContainer>
      </PostContent>
      <PostCta>
        <PostBtn type="button" onClick={toggleCommentsVisibility}>
          <FaCommentAlt />
        </PostBtn>
        <PostBtn type="button">
          <FaHeart />
        </PostBtn>
      </PostCta>
    </PostContainer>
  );
};

export default Post;

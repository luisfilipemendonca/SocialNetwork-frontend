import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FaUserCircle,
  FaCommentAlt,
  FaHeart,
  FaHeartBroken,
} from 'react-icons/fa';

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

import { addLike, deleteLike } from '../../store/actions/posts';

import PostPhotos from './PostPhotos';

const Post = ({
  id,
  description,
  createdAt,
  user,
  photos,
  comments,
  liked,
  alreadyLiked,
  likesCount,
}) => {
  const dispatch = useDispatch();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const toggleCommentsVisibility = () => setIsCommentsOpen(!isCommentsOpen);

  const addLikeHandler = () => {
    console.log('adding');
    dispatch(addLike(id));
  };

  const deleteLikeHandler = () => {
    console.log('removing');
    dispatch(deleteLike(id));
  };

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
        <PostPhotos photos={photos} liked={liked} alreadyLiked={alreadyLiked} />
        <PostLikes>Likes: {likesCount}</PostLikes>
        <PostDescription>{description}</PostDescription>
        <PostCommentsContainer isOpen={isCommentsOpen}>
          <PostCommentsHeader>Comments</PostCommentsHeader>
          <PostCommentsContent>
            {comments?.map(
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
        <PostBtn
          type="button"
          onClick={liked || alreadyLiked ? deleteLikeHandler : addLikeHandler}
        >
          {liked || alreadyLiked ? <FaHeart /> : <FaHeartBroken />}
        </PostBtn>
      </PostCta>
    </PostContainer>
  );
};

export default Post;

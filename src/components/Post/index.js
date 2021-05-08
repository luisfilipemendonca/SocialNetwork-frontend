import React, { useState } from 'react';

import {
  PostContainer,
  PostContent,
  PostLikes,
  PostDescription,
} from './styled';

import PostHeader from './PostHeader';
import PostPhotos from './PostPhotos';
import PostComments from './PostComments';
import PostCta from './PostCta';

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
  commentsOffset,
  hasMoreComments,
  isProfile,
}) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const toggleCommentsVisibility = () =>
    setIsCommentsOpen((prevState) => !prevState);

  return (
    <PostContainer>
      <PostContent>
        <PostHeader
          createdAt={createdAt}
          profilePicture={user.profilePicture}
          profilePictureUrl={user.profilePictureUrl}
          username={user.username}
        />
        <PostPhotos photos={photos} showAnimation={liked && alreadyLiked} />
        <PostLikes>Likes: {likesCount}</PostLikes>
        <PostDescription>{description}</PostDescription>
        <PostComments
          comments={comments}
          isCommentsOpen={isCommentsOpen}
          postId={id}
          offset={commentsOffset || 0}
          hasMoreComments={hasMoreComments}
        />
      </PostContent>
      <PostCta
        id={id}
        liked={liked || alreadyLiked}
        toggleCommentsVisibility={toggleCommentsVisibility}
        isProfile={isProfile}
      />
    </PostContainer>
  );
};

export default Post;

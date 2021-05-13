import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  PostContainer,
  PostContent,
  PostLikes,
  PostDescription,
  PostInfo,
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
          postUserId={user.id}
          isProfile={isProfile}
          postId={id}
        />
        <PostPhotos photos={photos} showAnimation={liked && alreadyLiked} />
        <PostInfo>
          <PostDescription>{description}</PostDescription>
          <PostLikes>Likes: {likesCount}</PostLikes>
        </PostInfo>
        <CSSTransition
          in={isCommentsOpen}
          timeout={500}
          classNames="show"
          unmountOnExit
        >
          <PostComments
            comments={comments}
            isCommentsOpen={isCommentsOpen}
            postId={id}
            offset={commentsOffset || 0}
            hasMoreComments={hasMoreComments}
            isProfile={isProfile}
          />
        </CSSTransition>
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

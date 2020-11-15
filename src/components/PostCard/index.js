import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { CardContainer } from './styled';

import CardHeader from './CardHeader';
import CardSinglePhoto from './CardSinglePhoto';
import CardMultiplePhoto from './CardMultiplePhoto';
import CardDescription from './CardDescription';
import CardCta from './CardCta';
import CardComments from './CardComments';

import { addLike, deleteLike } from '../../store/actions/Posts';

const PostCard = ({ data }) => {
  const dispatch = useDispatch();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const {
    User,
    createdAt,
    PostPhotos,
    description,
    Comments,
    Likes,
    alreadyLiked,
    liked,
    id,
  } = data;

  const likeHandler = (postId) => {
    dispatch(addLike(postId));
  };

  const dislikeHandler = (postId) => {
    dispatch(deleteLike(postId));
  };

  const toggleCommentsHandler = () => setIsCommentsOpen(!isCommentsOpen);

  return (
    <CardContainer>
      <CardHeader data={User} date={createdAt} />
      {PostPhotos.length === 1 ? (
        <CardSinglePhoto data={PostPhotos[0]} liked={liked} />
      ) : (
        <CardMultiplePhoto data={PostPhotos} liked={liked} />
      )}
      <CardDescription
        description={description}
        commentsQty={Comments.length}
        likesQty={Likes.length}
      />
      <CardCta
        alreadyLiked={alreadyLiked}
        likeHandler={() => likeHandler(id)}
        dislikeHandler={() => dislikeHandler(id)}
        toggleCommentsHandler={toggleCommentsHandler}
      />
      <CardComments
        isOpen={isCommentsOpen}
        toggleCommentsHandler={toggleCommentsHandler}
        comments={Comments}
        postId={id}
      />
    </CardContainer>
  );
};

export default PostCard;

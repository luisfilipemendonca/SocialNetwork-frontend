import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import {
  SearchItemContainer,
  SearchItemImgContainer,
  SearchItemImg,
  SearchItemUsername,
  SearchItemLink,
} from './styled';

const SearchItem = ({ id, username, profilePicture, profilePictureUrl }) => {
  const { userId } = useSelector((state) => state.user);

  const link = userId === id ? '/profile' : `/profile/${id}`;

  return (
    <SearchItemContainer>
      <SearchItemLink to={link}>
        <SearchItemImgContainer>
          {profilePicture ? (
            <SearchItemImg src={profilePictureUrl} />
          ) : (
            <FaUserCircle />
          )}
        </SearchItemImgContainer>
        <SearchItemUsername>{username}</SearchItemUsername>
      </SearchItemLink>
    </SearchItemContainer>
  );
};

export default SearchItem;

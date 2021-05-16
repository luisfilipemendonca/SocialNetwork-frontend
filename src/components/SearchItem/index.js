import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import {
  SearchItemContainer,
  SearchItemImgContainer,
  SearchItemImg,
  SearchItemUsername,
  SearchItemLink,
} from './styled';

const SearchItem = ({ id, username, profilePicture, profilePictureUrl }) => {
  return (
    <SearchItemContainer>
      <SearchItemLink to={`/profile/${id}`}>
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

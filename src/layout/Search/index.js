import React, { useState } from 'react';
// import axios from '../../util/axios';

import { SearchContainer, SearchMenu } from './styled';

import Input from '../../components/Inputs';
import Modal from '../../components/Modal';

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalHandler = () => setIsModalOpen((prev) => !prev);

  const searchUserHandler = (e) => {
    const { value } = e.currentTarget;

    console.log(value);
  };

  return (
    <>
      <Modal show={isModalOpen} closeHandler={toggleModalHandler} />
      <SearchContainer isModalOpen={isModalOpen}>
        <Input
          type="text"
          placeholder="Search a user"
          focusHandler={toggleModalHandler}
          changeHandler={searchUserHandler}
        />
        <SearchMenu isModalOpen={isModalOpen}>
          <li>Ola</li>
          <li>Ola</li>
        </SearchMenu>
      </SearchContainer>
    </>
  );
};

export default Search;

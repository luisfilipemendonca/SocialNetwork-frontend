import React, { useState, useEffect } from 'react';
import axios from '../../util/axios';

import { SearchContainer, SearchMenu, SearchError } from './styled';

import Input from '../../components/Inputs';
import Modal from '../../components/Modal';

const Search = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchedUsers, setSearchedUsers] = useState([]);

  const clearValues = () => {
    setSearchValue('');
    setSearchedUsers([]);
  };

  const openModalHandler = () => setIsModalOpen(true);
  const closeModalHandler = () => {
    setIsModalOpen(false);
    clearValues();
  };

  const searchUserHandler = async (event) => {
    const { value } = event.currentTarget;
    setSearchValue(value);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios(`/users/search/${searchValue}`);

      setSearchedUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!searchValue) return;

    fetchUsers();
  }, [searchValue]);

  return (
    <>
      <Modal show={isModalOpen} closeHandler={closeModalHandler} />
      <SearchContainer isModalOpen={isModalOpen}>
        <Input
          type="text"
          placeholder="Search a user"
          value={searchValue}
          focusHandler={openModalHandler}
          changeHandler={searchUserHandler}
        />
        {searchedUsers.length > 0 && (
          <SearchMenu isModalOpen={isModalOpen}>
            <li>Ola</li>
            <li>Ola</li>
          </SearchMenu>
        )}
        {searchValue && searchedUsers.length <= 0 && (
          <SearchError>No users with that username found</SearchError>
        )}
      </SearchContainer>
    </>
  );
};

export default Search;

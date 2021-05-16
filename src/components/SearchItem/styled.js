import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchItemContainer = styled.li`
  padding: 0.5rem 1rem;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryOpacity};
  }
`;

export const SearchItemLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const SearchItemImgContainer = styled.span`
  width: 3rem;
  height: 3rem;
  font-size: 3rem;
  margin-right: 1rem;
  display: flex;
  color: ${({ theme }) => theme.colors.primaryDark};
`;

export const SearchItemImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
`;

export const SearchItemUsername = styled.p``;

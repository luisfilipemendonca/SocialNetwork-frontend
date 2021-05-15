import styled from 'styled-components';

export const SearchContainer = styled.div`
  background-color: #f5f5f5;
  padding: 0.8rem;
  margin: 0 auto 1rem;
  max-width: 40rem;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 3px;
  position: relative;
  z-index: ${({ isModalOpen }) => isModalOpen && 500};
`;

export const SearchMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f5f5f5;
  width: 100%;
  margin-top: 0.8rem;
  z-index: ${({ isModalOpen }) => isModalOpen && 500};
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  padding: 0.8rem;
  border-radius: 3px;
`;

export const SearchError = styled.p`
  padding: 0.8rem;
  position: absolute;
  top: 100%;
  margin-top: 0.8rem;
  background-color: #f5f5f5;
  width: 100%;
  left: 0;
  text-align: center;
`;

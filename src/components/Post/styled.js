import styled from 'styled-components';

export const PostContainer = styled.article`
  border: 1px solid green;
  padding: 0 8px;
  position: relative;

  &:not(last-child) {
    margin-bottom: 16px;
  }
`;

export const PostImgContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

export const PostCTA = styled.div`
  position: absolute;
  bottom: 0;
  right: -1px;
  display: flex;
`;

export const PostCTABtn = styled.button`
  width: 45px;
  height: 45px;
  background: #ccc;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(8px);
  border-radius: 3px;

  &:first-of-type {
    margin-right: 8px;
  }
`;

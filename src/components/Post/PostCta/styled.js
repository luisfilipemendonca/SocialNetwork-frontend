import styled from 'styled-components';

export const PostCtaContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(1px, 50%);
`;

export const PostBtn = styled.button`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primaryDark : theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.secondaryLight};
  width: 3.5rem;
  height: 3.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border-radius: 3px;

  &:not(:last-of-type) {
    margin-right: 0.8rem;
  }

  & svg {
    overflow: visible;
  }
`;

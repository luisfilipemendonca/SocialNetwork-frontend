import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const DefaultButton = css`
  border: 1px solid;
  padding: 0.3rem 1rem;
  border-radius: 3px;
  font-size: 1rem;
  transition: all 0.2s ease-in;
`;

const DefaultPrimaryButton = css`
  ${DefaultButton};
  border-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryDark};
  background-color: ${({ theme }) => theme.colors.primaryOpacity};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryLight};
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const DefaultSecondaryButton = css`
  ${DefaultButton};
  border-color: ${({ theme }) => theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.primaryLight};
  background-color: ${({ theme }) => theme.colors.secondaryOpacity};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const DefaultWarningButton = css`
  ${DefaultButton};
  border-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.warning};
  background-color: ${({ theme }) => theme.colors.warningOpacity};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.warning};
    color: #f5f5f5;
  }
`;

export const PrimaryButton = styled.button`
  ${DefaultPrimaryButton};
`;

export const SecondaryButton = styled.button`
  ${DefaultSecondaryButton};
`;

export const PrimaryLink = styled(Link)`
  ${DefaultPrimaryButton};
`;

export const SecondaryLink = styled(Link)`
  ${DefaultSecondaryButton};
`;

export const WarningButton = styled.button`
  ${DefaultWarningButton};
`;

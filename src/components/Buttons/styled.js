import styled from 'styled-components';

export const IconButton = styled.button`
  position: relative;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: ${(props) => props.theme.paddings.small}
    ${(props) => props.theme.paddings.large};
  border: 1px solid transparent;
  font-size: ${(props) => props.theme.fonts.defaultSize};
  transition: all 0.1s;
  border-radius: ${(props) => props.theme.borderRadius};

  &:hover {
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const PrimaryButton = styled(Button)`
  border-color: ${(props) => props.theme.colors.primaryDark};
  background: ${(props) => props.theme.colors.primaryNormal};
  color: ${(props) => props.theme.colors.primaryDark};
  box-shadow: 0 1rem 1.5rem ${(props) => props.theme.colors.primaryNormal};
  color: #fff;

  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }

  &:active {
    box-shadow: 0 0.5rem 1.5rem ${(props) => props.theme.colors.primaryNormal};
  }
`;

export const SecondaryButton = styled(Button)`
  border-color: ${(props) => props.theme.colors.primaryDark};
  background: ${(props) => props.theme.colors.primaryDark};
  color: #fff;
  box-shadow: 0 1rem 1.5rem ${(props) => props.theme.colors.primaryNormal};

  &:hover {
    background: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primaryDark};
  }

  &:active {
    box-shadow: 0 0.5rem 1.5rem ${(props) => props.theme.colors.primaryNormal};
  }
`;

export const TertiaryButton = styled(Button)`
  border-color: ${(props) => props.theme.colors.primaryDark};
  background: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
`;

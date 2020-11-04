import styled from 'styled-components';

export const InputContainer = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.margins.large};
  }
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  z-index: -1;
  transition: all 0.2s;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: ${(props) => props.theme.paddings.small};
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
  z-index: 1;

  &:focus {
    border-color: ${(props) => props.theme.colors.primaryDark};
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: -1.8rem;
    z-index: 0;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export const InputInfo = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.fonts.colorNormal};
  margin-top: 3px;
`;

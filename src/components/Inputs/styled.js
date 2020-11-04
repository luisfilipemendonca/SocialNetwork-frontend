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
  font-size: ${(props) => props.theme.fonts.defaultSize};
  color: ${(props) => props.theme.fonts.colorNormal};
  margin-top: 3px;
`;

export const ErrorMsg = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  white-space: nowrap;
  background: red;
  color: #fff;
  padding: 3px ${(props) => props.theme.paddings.small};
  border-radius: ${(props) => props.theme.borderRadius};
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s;
  font-size: 1rem;
  transform: translate(0, -150%);

  @media screen and (min-width: ${(props) => props.theme.breakpoints.small}) {
    right: 50%;
    transform: translate(50%, -150%);
  }
`;

export const ErrorContainer = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: red;
  display: flex;

  &:hover ${ErrorMsg} {
    opacity: 1;
    visibility: visible;
  }
`;

import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 32px;
  }
`;

export const InputLabel = styled.label`
  display: block;
  text-transform: capitalize;
`;

export const InputGroup = styled.div`
  margin: 4px 0;
  position: relative;
`;

export const InputBorder = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
  border-radius: 3px;
  pointer-events: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 0%;
    border-top: 1px solid;
    border-left: 1px solid;
    border-color: ${(props) => props.theme.colors.primaryDark};
    border-radius: 3px;
    transition: 0.2s ease-in;
    transition-property: width, height;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0%;
    height: 0%;
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-color: ${(props) => props.theme.colors.primaryDark};
    border-radius: 3px;
    transition: 0.2s ease-in;
    transition-property: width, height;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 12px 8px;
  border: none;
  background: none;
  outline: none;

  &:focus + ${InputBorder}:before, &:focus + ${InputBorder}:after {
    width: 100%;
    height: 100%;
  }

  &:invalid {
    box-shadow: none;
  }
`;

import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: ${(props) => (props.isComment ? '16px' : '32px')};
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
  border: 1px solid
    ${(props) => (!props.hasError ? props.theme.colors.primaryDark : 'red')};
  border-radius: 3px;
  pointer-events: none;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 0%;
    border-color: ${(props) => props.theme.colors.primaryDark};
    border-radius: 3px;
    transition: 0.2s ease-in;
    transition-property: width, height;
  }

  &:before {
    top: 0;
    left: 0;
    border-top: 1px solid;
    border-left: 1px solid;
  }

  &:after {
    bottom: 0;
    right: 0;
    border-bottom: 1px solid;
    border-right: 1px solid;
  }
`;

export const InputErrorMsg = styled.p`
  position: absolute;
  top: -50%;
  right: 10px;
  background: red;
  color: #fff;
  padding: 4px 8px;
  border-radius: 3px;
  opacity: 0;
  transition: opacity 0.2s ease-in;
`;

export const InputError = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: red;
  display: flex;

  &:hover + ${InputErrorMsg} {
    opacity: 1;
  }
`;

export const InputDefault = css`
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

export const InputFileContainer = styled.div`
  height: 200px;
  width: 200px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 16px;
  border: ${(props) => !props.hasFile && '2px dashed green'};
`;

export const InputFilePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

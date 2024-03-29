import styled, { css } from 'styled-components';

export const InputContainer = styled.div``;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.2rem;
`;

export const InputLabelFile = styled.div`
  display: block;
  margin-bottom: 0.2rem;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const InputBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  transition: width 0.2s linear;
  transform: translateX(-50%);
`;

const DefaultInput = css`
  font-size: 1.1rem;
  width: 100%;
  display: block;
  padding: 0.7rem 0.8rem;
  background-color: ${({ hasError }) =>
    hasError ? 'rgba(252,76,76, 0.2)' : 'rgba(163, 164, 207, 0.2)'};
  border-radius: 3px;

  &:focus + ${InputBorder} {
    width: 100%;
  }
`;

export const InputElement = styled.input`
  ${DefaultInput};
`;

export const TextareaElement = styled.textarea`
  ${DefaultInput};
`;

export const InputError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const InputErrorMessage = styled.p`
  position: absolute;
  right: 0;
  top: ${({ isFileType }) => (isFileType ? '50%' : 0)};
  background-color: #fc4c4c;
  padding: 0.2rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 3px;
  color: #f5f5f5;
  transform: translateY(-110%);
`;

export const InputErrorIcon = styled.span`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  color: #fc4c4c;
`;

export const InputInfo = styled.p`
  margin-top: 0.3rem;
  font-size: 0.8rem;
`;

export const InputFileContainer = styled.div`
  position: relative;

  & ${InputErrorIcon} {
    right: 50%;
    transform: translate(50%, -50%);
  }

  & ${InputErrorMessage} {
    right: 50%;
    transform: translate(50%, -50%);
    white-space: nowrap;
  }
`;

export const InputFileLabel = styled.label`
  display: block;
  position: relative;
  width: ${({ isProfilePhoto }) => (isProfilePhoto ? '13rem' : '100%')};
  height: ${({ isProfilePhoto }) => (isProfilePhoto ? '13rem' : '23rem')};
  border: ${({ theme }) => `1px dashed ${theme.colors.primaryDark}`};
  cursor: pointer;
  border-radius: ${({ isProfilePhoto }) => isProfilePhoto && '50%'};
  overflow: hidden;
  margin: 0 auto;
  background-color: ${({ hasError }) =>
    hasError ? 'rgba(252,76,76, 0.2)' : 'rgba(163, 164, 207, 0.2)'};
`;

export const InputFileElement = styled.input`
  display: none;
`;

export const InputFilePreviewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const InputFilePreview = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const InputLabelIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  color: ${({ theme }) => theme.colors.primaryDark};
`;

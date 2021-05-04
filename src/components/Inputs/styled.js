import styled from 'styled-components';

export const InputContainer = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 1.8rem;
  }
`;

export const InputLabel = styled.label`
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

export const InputElement = styled.input`
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
  top: -80%;
  background-color: #fc4c4c;
  padding: 0.2rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 3px;
  color: #f5f5f5;
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
  font-size: 1rem;
`;

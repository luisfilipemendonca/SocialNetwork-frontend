import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 32px auto;
  width: 100%;
  max-width: 600px;
  position: relative;
`;

export const FormElement = styled.form`
  width: 100%;
  border-radius: 3px;
  padding: 32px 16px;
  position: absolute;
  background: white;
  z-index: 0;
  overflow: hidden;
  background: #f5f5f5;
  border: 1px solid ${(props) => props.theme.colors.primaryLight};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 60%;
    width: 100%;
    background: ${(props) => props.theme.colors.secondaryLight};
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  }
`;

export const FormHeader = styled.header`
  & :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 16px;
  border-radius: 3px;
  padding: 32px 16px;
  background-color: inherit;
  border: 1px solid ${(props) => props.theme.colors.primaryLight};
`;

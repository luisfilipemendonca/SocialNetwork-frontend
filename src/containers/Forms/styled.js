import styled from 'styled-components';

import { FormContent } from '../../components/Form/styled';

export const FormContainer = styled.div`
  width: 95%;
  max-width: 450px;
  background: #fff;
  position: relative;
  padding: ${(props) => props.theme.paddings.medium};
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    height: 50%;
    width: 100%;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.colors.primaryNormal};
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
    z-index: -1;
  }

  ${FormContent} {
    border: 1px solid ${(props) => props.theme.colors.primaryNormal};
    padding: ${(props) => props.theme.paddings.large}
      ${(props) => props.theme.paddings.medium};
    background: #fff;
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

export const PrimaryTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${(props) => props.theme.margins.medium};
`;

import styled from 'styled-components';

import { FormContent } from '../../components/Form/styled';
import {
  FileInputContainer,
  FileInputLabel,
  FilePicture,
} from '../../components/Inputs/styled';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 450px;
  background: #fff;
  position: relative;
  padding: ${(props) => props.theme.paddings.medium};
  z-index: 0;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.colors.primaryDark};

  &:before {
    content: '';
    position: absolute;
    height: 50%;
    width: 100%;
    top: 0;
    left: 0;
    background: ${(props) => props.theme.colors.primaryDark};
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
    z-index: -1;
  }

  ${FormContent} {
    border: 1px solid ${(props) => props.theme.colors.primaryNormal};
    padding: ${(props) => props.theme.paddings.large};
    background: #fff;
    border-radius: ${(props) => props.theme.borderRadius};
    margin-bottom: ${(props) => props.theme.margins.medium};
  }

  ${FileInputContainer},
  ${FileInputLabel},
  ${FilePicture} {
    border-radius: 50%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.small}) {
    padding: ${(props) => props.theme.paddings.medium}
      ${(props) => props.theme.paddings.large};

    ${FormContent} {
      padding: ${(props) => props.theme.paddings.large};
    }
  }
`;

export const PrimaryTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${(props) => props.theme.margins.medium};
  color: #fff;
`;

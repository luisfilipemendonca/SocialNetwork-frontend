import styled from 'styled-components';

export const InputContainer = styled.div`
  margin-bottom: ${(props) => props.theme.margins.medium};

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
  border: 1px solid ${(props) => props.theme.colors.primaryNormal};
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
  font-size: 12px;
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
  right: ${(props) => (props.type === 'file' ? '50%' : '1rem')};
  transform: ${(props) =>
    props.type === 'file' ? 'translate(50%, -50%)' : 'translateY(-50%)'};
  color: red;
  display: flex;

  &:hover ${ErrorMsg} {
    opacity: 1;
    visibility: visible;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputContainer = styled.div`
  border: 1px dashed ${(props) => props.theme.colors.primaryNormal};
  height: 15rem;
  width: 15rem;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.margins.medium};
  position: relative;
`;

export const FileInputLabel = styled.label`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primaryNormal};
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export const FileIconContainer = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 80%);
`;

export const FilePicture = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

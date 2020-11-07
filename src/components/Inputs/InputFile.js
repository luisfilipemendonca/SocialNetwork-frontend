import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import {
  FileInput,
  FileInputContainer,
  FileInputLabel,
  FileIconContainer,
  FilePicture,
} from './styled';

const InputFile = ({ inputData, changeHandler, id }) => {
  return (
    <FileInputContainer>
      {inputData.value.length > 0 && (
        <FilePicture src={inputData.value} alt="Profile image" />
      )}
      <FileInput
        type={inputData.type}
        id={id}
        hasError={inputData.hasError}
        onChange={changeHandler}
      />
      <FileInputLabel htmlFor={id}>
        <FileIconContainer>
          <FaPlusCircle />
        </FileIconContainer>
      </FileInputLabel>
    </FileInputContainer>
  );
};

export default InputFile;

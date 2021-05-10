import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import {
  InputError,
  InputErrorIcon,
  InputErrorMessage,
  InputFileContainer,
  InputFileLabel,
  InputFileElement,
  InputFilePreviewContainer,
  InputFilePreview,
} from '../styled';

const InputFile = ({
  id,
  type,
  value,
  changeHandler,
  focusHandler,
  hasError,
  errorMsg,
}) => {
  return (
    <InputFileContainer>
      <InputFileLabel
        htmlFor={id}
        isProfilePhoto={id === 'profilePicture'}
        hasError={hasError}
      >
        {value.length > 0 && (
          <InputFilePreviewContainer>
            {typeof value === 'string' ? (
              <InputFilePreview src={value} alt="" />
            ) : (
              value.map((val) => (
                <InputFilePreview
                  key={val.name}
                  src={URL.createObjectURL(val)}
                  alt=""
                />
              ))
            )}
          </InputFilePreviewContainer>
        )}
        <InputFileElement
          type={type}
          id={id}
          onFocus={focusHandler}
          onChange={changeHandler}
        />
      </InputFileLabel>
      {hasError && (
        <InputError>
          <InputErrorIcon>
            <FaExclamationCircle />
          </InputErrorIcon>
          <InputErrorMessage>{errorMsg}</InputErrorMessage>
        </InputError>
      )}
    </InputFileContainer>
  );
};

export default InputFile;

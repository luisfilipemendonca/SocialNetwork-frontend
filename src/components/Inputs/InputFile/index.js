import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import {
  InputLabelFile,
  InputError,
  InputErrorMessage,
  InputFileContainer,
  InputFileLabel,
  InputFileElement,
  InputFilePreviewContainer,
  InputFilePreview,
  InputInfo,
  InputLabelIcon,
} from '../styled';

import ImgSlider from '../../ImgSlider';

const InputFile = ({
  id,
  type,
  value,
  changeHandler,
  focusHandler,
  hasError,
  info,
  label,
  errorMsg,
  isMultiple,
}) => {
  return (
    <InputFileContainer>
      <InputLabelFile>{label}</InputLabelFile>
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
              <ImgSlider imgs={value.map((val) => URL.createObjectURL(val))} />
            )}
          </InputFilePreviewContainer>
        )}
        <InputFileElement
          type={type}
          id={id}
          multiple={isMultiple}
          onFocus={focusHandler}
          onChange={changeHandler}
        />
        <InputLabelIcon isVisible={value.length <= 0}>
          <FaPlusCircle />
        </InputLabelIcon>
      </InputFileLabel>
      {hasError && (
        <InputError>
          <InputErrorMessage isFileType>{errorMsg}</InputErrorMessage>
        </InputError>
      )}
      {info && <InputInfo>{info}</InputInfo>}
    </InputFileContainer>
  );
};

export default InputFile;

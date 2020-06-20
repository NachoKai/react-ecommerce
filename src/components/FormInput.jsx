import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  position: relative;
  margin: 10px 0 30px 0;

  input {
    border-radius: 0.5rem;
  }

  .form-input-label {
    color: #222;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
  }
`;

const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: #222;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid red;
  margin: 0;

  &:focus {
    outline: none;
  }
`;

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </Group>
  );
};

export default FormInput;

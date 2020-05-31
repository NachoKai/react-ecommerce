import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  min-width: 165px;
  letter-spacing: 0.5px;
  font-size: 15px;
  padding: 0.5rem;
  margin: 0 0.5rem;
  background-color: ${props => (props.isGoogleSignIn ? '#381460' : 'black')};
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid #eee;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;

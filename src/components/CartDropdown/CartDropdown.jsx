import React from 'react';
import styled from 'styled-components';

import CustomButton from '../CustomButton/CustomButton';

const Dropdown = styled.div`
  background-color: #381460;
  border-radius: 0.5rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 340px;
  padding: 20px;
  position: absolute;
  right: 60px;
  top: 80px;
  width: 240px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 2400px;
  overflow: scroll;
`;

const CartDropdown = () => {
  return (
    <Dropdown>
      <CartItems />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </Dropdown>
  );
};

export default CartDropdown;

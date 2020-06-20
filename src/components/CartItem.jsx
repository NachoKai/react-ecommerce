import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 65px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const Price = styled.span`
  font-size: 16px;
`;

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <ItemContainer>
      <img src={imageUrl} alt='item' />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </ItemContainer>
  );
};

export default CartItem;

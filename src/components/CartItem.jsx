import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 65px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

const Details = styled.div`
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
    <Container>
      <img src={imageUrl} alt='item' />
      <Details>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </Details>
    </Container>
  );
};

export default CartItem;

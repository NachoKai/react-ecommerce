import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../redux/Cart';

const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`;

const Image = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Value = styled.span`
  margin: 0 10px;
`;

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Container>
      <Image>
        <img src={imageUrl} alt='item' />
      </Image>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <Arrow
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </Arrow>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

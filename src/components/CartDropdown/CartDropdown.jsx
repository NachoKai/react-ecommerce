import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

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
  width: 265px;
  z-index: 5;

  button {
    margin-top: 15px;
  }
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 2400px;
  overflow: scroll;
`;

const EmptyMessage = styled.span`
  font-size: 20px;
  margin: 15px auto;
`;

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <Dropdown>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </Dropdown>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

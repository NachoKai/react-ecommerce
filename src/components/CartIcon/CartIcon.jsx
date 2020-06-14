import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import Bag from '../../assets/bag.png';

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  bottom: 6px;
  left: 12px;
`;

const Icon = styled.div`
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    image-rendering: pixelated;
  }
`;

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <IconContainer onClick={toggleCartHidden}>
      <Icon>
        <img className='icon' alt='bag icon' src={Bag} />
      </Icon>
      <ItemCount>{itemCount}</ItemCount>
    </IconContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../redux/Cart';
import Bag from '../assets/bag.png';
import { selectCartItemsCount } from '../redux/Cart';

const Container = styled.div`
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
  left: 14px;
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
    <Container onClick={toggleCartHidden}>
      <Icon>
        <img className='icon' alt='bag icon' src={Bag} />
      </Icon>
      <ItemCount>{itemCount}</ItemCount>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

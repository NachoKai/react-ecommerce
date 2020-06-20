import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../redux/Cart';
import CheckoutItem from '../components/CheckoutItem';
import StripeButton from '../components/StripeButton';

const Container = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const Blocks = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

const Checkout = ({ cartItems, total }) => {
  return (
    <Container>
      <Header>
        <Blocks>
          <span>Product</span>
        </Blocks>
        <Blocks>
          <span>Description</span>
        </Blocks>
        <Blocks>
          <span>Quantity</span>
        </Blocks>
        <Blocks>
          <span>Price</span>
        </Blocks>
        <Blocks>
          <span>Remove</span>
        </Blocks>
      </Header>

      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        <span>TOTAL: ${total} </span>
      </Total>
      <StripeButton price={total} />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);

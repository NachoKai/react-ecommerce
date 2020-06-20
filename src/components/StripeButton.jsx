import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import swal from 'sweetalert';

import { ReactComponent as Logo } from '../assets/knight.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 3rem;
  justify-content: center;
  background-color: #381460;
`;

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51GvxHII1DKqVlSsg11bFTulNLGhdrPwPCSFFbWe9xGlHSMWUvR589YmL1jd4poyhtQh5ldeFslJzCqYb7Xgr6q4q00WdsnsGN7';

  const onToken = token => {
    return swal('Thank you!', 'Payment Successful!', 'success');
  };

  return (
    <Container>
      <StripeCheckout
        label='Pay Now'
        name='Helmet Store Ltd.'
        billingAdress
        shippingAdress
        image={Logo}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
      <Test>
        <span>Testing Card:</span>
        <span>NUMBER: 4242 4242 4242 4242</span>
        <span>BRAND: Visa</span>
        <span>CVC: Any 3 digits</span>
        <span>Date: Any future date</span>
      </Test>
    </Container>
  );
};

export default StripeButton;

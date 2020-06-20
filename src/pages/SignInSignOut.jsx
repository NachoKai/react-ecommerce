import React from 'react';
import styled from 'styled-components';

import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto;
`;

const SignInSignOut = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};

export default SignInSignOut;

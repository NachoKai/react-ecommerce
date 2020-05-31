import React from 'react';
import styled from 'styled-components';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SingUp/SignUp';

const SignInSignOutContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto;
`;

const SignInSignOut = () => {
  return (
    <SignInSignOutContainer>
      <SignIn />
      <SignUp />
    </SignInSignOutContainer>
  );
};

export default SignInSignOut;

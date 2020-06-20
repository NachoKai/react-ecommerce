import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth, signInWithGoogle } from '../firebase/utils';

const Flex = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
`;

const Subtitle = styled.div`
  margin: 0 0 40px 0;
`;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeEmail = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <Container>
      <Title>I already have an account</Title>
      <Subtitle>Sign in with your email and password</Subtitle>

      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <FormInput
          onChange={handleChangeEmail}
          name='email'
          type='email'
          value={email}
          placeholder='Insert email...'
          required
        />

        <FormInput
          onChange={handleChangePassword}
          name='password'
          type='password'
          value={password}
          placeholder='Insert password...'
          required
        />
        <Flex>
          <CustomButton onClick={handleSubmit} type='button'>
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </Flex>
      </form>
    </Container>
  );
};

export default SignIn;

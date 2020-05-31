import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/utils';

const Flex = styled.div`
  display: flex;
`;

const SignInContainer = styled.div`
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
      console.log(error);
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
    <SignInContainer>
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
          <CustomButton type='button'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </Flex>
      </form>
    </SignInContainer>
  );
};

export default SignIn;

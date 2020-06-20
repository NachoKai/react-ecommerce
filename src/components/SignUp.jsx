import React, { useState } from 'react';
import styled from 'styled-components';

import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { auth, createUserProfileDocument } from '../firebase/utils';

const SignUpContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
`;

const Subtitle = styled.div`
  margin: 0 0 40px 0;
`;

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmail = e => {
    const { value } = e.target;
    setEmail(value);
  };

  const handlePassword = e => {
    const { value } = e.target;
    setPassword(value);
  };
  const handleConfirmPassword = e => {
    const { value } = e.target;
    setConfirmPassword(value);
  };

  const handleDisplayName = e => {
    const { value } = e.target;
    setDisplayName(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords dont match.');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <Subtitle>Sign up with your email and password</Subtitle>
      <form onSubmit={handleSubmit}>
        <label htmlFor='displayName'>Name</label>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleDisplayName}
          placeholder='Insert Name...'
          required
        ></FormInput>
        <label htmlFor='email'>Email</label>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleEmail}
          placeholder='Insert Email...'
          required
        ></FormInput>
        <label htmlFor='password'>Password</label>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handlePassword}
          placeholder='Insert Password...'
          required
        ></FormInput>
        <label htmlFor='password'>Confirm Password</label>
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleConfirmPassword}
          placeholder='Confirm Password...'
          required
        ></FormInput>
        <CustomButton type='submit'> SIGN UP </CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;

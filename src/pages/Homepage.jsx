import React from 'react';
import styled from 'styled-components';

import Directory from '../components/Directory';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
`;

const Homepage = () => {
  return (
    <Container>
      <Directory />
    </Container>
  );
};

export default Homepage;

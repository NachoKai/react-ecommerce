import React from 'react';
import Directory from '../../components/Directory/Directory';
import styled from 'styled-components';

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Homepage = () => {
  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;

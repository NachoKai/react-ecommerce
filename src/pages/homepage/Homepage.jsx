import React from 'react';
import Directory from '../../components/Directory/Directory';
import styled from 'styled-components';

const Homepage = () => {
  const HomepageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
  `;

  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  );
};

export default Homepage;

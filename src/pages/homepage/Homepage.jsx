import React from 'react';
import styled from 'styled-components';

import Directory from '../../components/Directory/Directory';

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

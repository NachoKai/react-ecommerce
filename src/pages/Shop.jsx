import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../components/CollectionsOverview';
import Collection from './Collection';

const Container = styled.div``;

const Shop = ({ match }) => {
  return (
    <Container>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </Container>
  );
};

export default Shop;

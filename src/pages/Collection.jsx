import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CollectionItem from '../components/CollectionItem';
import { selectCollection } from '../redux/Shop.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <Container>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);

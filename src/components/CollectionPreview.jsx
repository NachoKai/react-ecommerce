import React from 'react';
import styled from 'styled-components';

import CollectionItem from './CollectionItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
  }

  .preview {
    display: flex;
    justify-content: space-between;
  }
`;

const CollectionPreview = ({ title, items }) => {
  return (
    <Container>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </Container>
  );
};

export default CollectionPreview;

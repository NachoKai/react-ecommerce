import React from 'react';
import './CollectionItem.scss';
import styled from 'styled-components';

const CollectionItem = ({ id, name, imageUrl, price }) => {
  const CollectionItemContainer = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
  `;

  const CollectionItemImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background: ${({ imageUrl }) => `url(${imageUrl}) center`};
  `;

  const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  `;

  return (
    <CollectionItemContainer className='collection-item'>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionFooter>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </CollectionFooter>
    </CollectionItemContainer>
  );
};

export default CollectionItem;

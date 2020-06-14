import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const CollectionItemContainer = styled.div`
    width: 22%;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
      .inverted {
        display: flex;
      }
    }

    .inverted {
      background-color: white;
      color: black;
      width: 80%;
      height: 50px;
      opacity: 0.7;
      line-height: 30px;
      font-weight: bold;
      position: absolute;
      top: 255px;
      border: 2px solid black;
      display: none;

      &:hover {
        opacity: 0.9;
        background-color: black;
        color: white;
        border: 2px solid white;
      }
    }
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

  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer className='collection-item'>
      <CollectionItemImage imageUrl={imageUrl} />
      <CollectionFooter>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </CollectionFooter>
      <CustomButton onClick={() => addItem(item)} className='inverted'>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

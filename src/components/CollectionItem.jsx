import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CustomButton from './CustomButton';
import { addItem } from '../redux/Cart';

const Container = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  &:hover {
    .inverted {
      display: flex;
    }
  }

  .inverted {
    background-color: white;
    color: black;
    width: 70%;
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

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background: ${({ imageUrl }) => `url(${imageUrl}) center`};
`;

const Footer = styled.div`
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

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <Container>
      <Image imageUrl={imageUrl} />
      <Footer>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </Footer>
      <CustomButton onClick={() => addItem(item)} className='inverted'>
        Add to cart
      </CustomButton>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

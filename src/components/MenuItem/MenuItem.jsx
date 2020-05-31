import React from 'react';
import './MenuItem.scss';
import styled from 'styled-components';

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
  const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    border-radius: 0.5rem;
    overflow: hidden;

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }
  `;

  const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: contain;
    background: ${({ imageUrl }) => `url(${imageUrl}) center`};

    &:hover {
      transform: scale(1.1);
      transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  `;

  return (
    <MenuItemContainer className={`${size} menu-item`}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </MenuItemContainer>
  );
};

export default MenuItem;

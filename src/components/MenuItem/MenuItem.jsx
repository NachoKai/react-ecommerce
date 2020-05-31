import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
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

    &.large {
      height: 380px;
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
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

  const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #381460;
    opacity: 0.7;
    border-radius: 0.5rem;
    position: absolute;

    .title {
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #eee;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  `;

  return (
    <MenuItemContainer
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Content>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{subtitle}</span>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);

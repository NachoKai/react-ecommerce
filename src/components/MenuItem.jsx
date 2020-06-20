import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
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
  background: ${({ imageUrl }) => `url(${imageUrl}) center`};
  background-size: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 15s cubic-bezier(0.25, 0.45, 0.45, 0.95);
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

  &:hover {
    opacity: 0.9;
    transition: opacity 0.5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

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

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => {
  return (
    <Container
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Content>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>{subtitle}</span>
      </Content>
    </Container>
  );
};

export default withRouter(MenuItem);

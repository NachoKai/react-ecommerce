import React from 'react';
import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';
import styled from 'styled-components';

const Directory = () => {
  const DirectoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const sections = [
    {
      title: 'Swords',
      imageUrl:
        'https://cdnb.artstation.com/p/assets/images/images/003/355/989/large/jongmo-nam-4.jpg?1515177802',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'Bows',
      imageUrl:
        'https://cdnb.artstation.com/p/assets/images/images/013/322/151/large/antonio-bifulco-windrunner-doodle-05-10-2018-04.jpg?1539084057',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'Staffs',
      imageUrl:
        'https://cdnb.artstation.com/p/assets/images/images/003/355/991/large/jongmo-nam-2.jpg?1472781341',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'Armors',
      imageUrl:
        'https://preview.redd.it/kpejg9d387r31.png?width=960&crop=smart&auto=webp&s=8b689ad9e126d5e0a6c5d12e24e479488acc341f',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'Shields',
      imageUrl:
        'https://cdna.artstation.com/p/assets/images/images/003/355/990/large/jongmo-nam-3.jpg?1472781335',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ];

  return (
    <DirectoryContainer>
      {sections.map(({ title, imageUrl, size, id, linkUrl }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;

import React, { useState } from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const Shop = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;

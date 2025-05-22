import ProductCards from '@/features/products/products/ui/ProductSection';
import React from 'react';
import { Bestseller } from '../lib/data';

const MyFavorite = () => {
  return (
    <div>
      <ProductCards data={Bestseller} />
    </div>
  );
};

export default MyFavorite;

'use client';

import CarouselSection from '@/features/home/carousel/ui/CarouselSection';
import ProductSection from '@/features/home/products/ui/ProductSection';
import React from 'react';
import { Bestseller } from '../lib/data';

const Welcome = () => {
  return (
    <div className="custom-container w-full h-full relative">
      <CarouselSection />
      <ProductSection data={Bestseller} label="Eng ko'p sotilgan" />
      <ProductSection data={Bestseller} label="Ommabop" />
      <ProductSection data={Bestseller} label="Chegirmagan tushganlar" />
      <ProductSection data={Bestseller} label="Reytingi baland" />
    </div>
  );
};

export default Welcome;

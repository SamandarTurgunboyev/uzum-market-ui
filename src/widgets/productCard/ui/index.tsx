'use client';

import Filter from '@/features/products/filter/ui/Filter';
import ProductCards from '@/features/products/products/ui/ProductSection';
import React, { useMemo } from 'react';
import { Bestseller } from '../lib/data';
import { usePathname } from 'next/navigation';

const ProductCard = () => {
  const pathname = usePathname();

  const lastSegment = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean);
    const raw = parts[parts.length - 1];
    return decodeURIComponent(raw); // `%20` → space
  }, [pathname]);

  return (
    <div className="flex gap-10 relative w-full h-full">
      <Filter />
      <ProductCards data={Bestseller} label={lastSegment} />
    </div>
  );
};

export default ProductCard;

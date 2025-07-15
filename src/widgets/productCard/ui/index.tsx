'use client';

import Filter from '@/features/products/filter/ui/Filter';
import ProductCards from '@/features/products/products/ui/ProductSection';
import { ResWithPagination } from '@/shared/config/api/types';
import { BigDiscountProductResModel } from '@/shared/types/productApi';

interface Props {
  title: string;
  data: ResWithPagination<BigDiscountProductResModel> | undefined;
  isLoading: boolean;
  isError: boolean;
}

const ProductCard = ({ title, data, isLoading, isError }: Props) => {
  return (
    <div className="flex gap-10 relative w-full h-full">
      <Filter />
      <ProductCards
        data={data}
        label={title}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default ProductCard;

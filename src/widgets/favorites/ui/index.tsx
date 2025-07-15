'use client';

import ProductCards from '@/features/products/products/ui/ProductSection';
import { saveProduct } from '@/shared/config/api/productApi';
import { useQuery } from '@tanstack/react-query';

const MyFavorite = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['saved'],
    queryFn: () => saveProduct({}),
  });

  return (
    <div>
      <ProductCards
        data={data?.data.data}
        isError={isError}
        isLoading={isLoading}
        label="Yoqtirgan mahsulotlar"
      />
    </div>
  );
};

export default MyFavorite;

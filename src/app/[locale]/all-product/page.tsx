'use client';

import { allProduct } from '@/shared/config/api/productApi';
import ProductCard from '@/widgets/productCard/ui';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const AllProduct = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page') || '1');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    setMin(searchParams.get('min_price') || '');
    setMax(searchParams.get('max_price') || '');
    setBrands(searchParams.get('brand')?.split(',') || []);
  }, [searchParams]);

  const {
    data: dis,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['get-all', page, max, min, brands],
    queryFn: () =>
      allProduct({
        page,
        page_size: 15,
        max_price: max,
        min_price: min,
        brand: brands.join(','),
      }),
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="custom-container">
      <ProductCard
        title={'Barcha mahsulotlar'}
        data={dis?.data.data}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default AllProduct;

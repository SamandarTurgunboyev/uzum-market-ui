'use client';

import { bigDiscount } from '@/shared/config/api/productApi';
import ProductCard from '@/widgets/productCard/ui';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const BigDiscont = () => {
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
    data: bigDis,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['bigDis', page, max, min, brands],
    queryFn: () =>
      bigDiscount({
        page,
        page_size: 15,
        max_price: max,
        min_price: min,
        brand: brands.join(','),
      }),
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  return (
    <div className="custom-container">
      <ProductCard
        title={'Katta chegirmalar'}
        data={bigDis?.data.data}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default BigDiscont;

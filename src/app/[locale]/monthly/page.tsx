'use client';

import { monthlyProduct } from '@/shared/config/api/productApi';
import ProductCard from '@/widgets/productCard/ui';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

export default function MonthlyPage() {
  return (
    <Suspense fallback={<div>Yuklanmoqda...</div>}>
      <Monthly />
    </Suspense>
  );
}

const Monthly = () => {
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
    queryKey: ['monthly', page, max, min, brands],
    queryFn: () =>
      monthlyProduct({
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
        title={'Shu oydagi mahsulotlar'}
        data={dis?.data.data}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

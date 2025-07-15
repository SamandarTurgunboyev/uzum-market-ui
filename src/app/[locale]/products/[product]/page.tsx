'use client';

import { getOneChildCategory } from '@/shared/config/api/categoryApi';
import { allProduct } from '@/shared/config/api/productApi';
import ProductCard from '@/widgets/productCard/ui';
import { useQuery } from '@tanstack/react-query';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const BestSelling = () => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [brands, setBrands] = useState<string[]>([]);
  const page = Number(searchParams.get('page') || '1');

  useEffect(() => {
    setMin(searchParams.get('min_price') || '');
    setMax(searchParams.get('max_price') || '');
    setBrands(searchParams.get('brand')?.split(',') || []);
  }, [searchParams]);

  const slug = useMemo(() => {
    const segments = path?.split('/');
    const last = segments?.filter(Boolean).pop();
    return last || '';
  }, [path]);

  const { data: cat, refetch } = useQuery({
    queryKey: ['one-cate', slug],
    queryFn: () => getOneChildCategory({ slug }),
    enabled: !!slug,
    select: (res) => res.data,
  });

  useEffect(() => {
    refetch();
  }, [slug]);

  const selectedCategory = cat?.[0];

  const {
    data,
    isLoading: allLoad,
    isError: allError,
  } = useQuery({
    queryKey: ['get-all', page, selectedCategory?.id, min, max, brands],
    queryFn: () =>
      allProduct({
        page,
        page_size: 15,
        category: selectedCategory?.id,
        max_price: max,
        min_price: min,
        brand: brands.join(','),
      }),
    enabled: !!selectedCategory?.id,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="custom-container">
      <ProductCard
        data={data?.data?.data}
        isError={allError}
        isLoading={allLoad}
        title={selectedCategory?.name || ''}
      />
    </div>
  );
};

export default BestSelling;

'use client';

import CarouselSection from '@/features/home/carousel/ui/CarouselSection';
import ProductSection from '@/features/home/products/ui/ProductSection';
import { allProduct, bigDiscount } from '@/shared/config/api/productApi';
import { useQuery } from '@tanstack/react-query';

const Welcome = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['allProduct'],
    queryFn: allProduct,
    select: (pro) => pro.data,
  });

  const { data: carousel } = useQuery({
    queryKey: ['banner'],
    queryFn: bigDiscount,
  });

  return (
    <div className="custom-container w-full h-full relative">
      <CarouselSection data={carousel?.data} />
      <ProductSection
        data={data}
        label="Eng ko'p sotilgan"
        loading={isLoading}
      />
      <ProductSection data={data} label="Ommabop" />
      <ProductSection data={data} label="Chegirmagan tushganlar" />
      <ProductSection data={data} label="Reytingi baland" />
    </div>
  );
};

export default Welcome;

'use client';

import CarouselSection from '@/features/home/carousel/ui/CarouselSection';
import ProductSection from '@/features/home/products/ui/ProductSection';
import {
  allProduct,
  bigDiscount,
  disCountProducts,
  monthlyProduct,
} from '@/shared/config/api/productApi';
import { useQuery } from '@tanstack/react-query';

const Welcome = () => {
  const {
    data,
    isLoading: allLoad,
    isError: allError,
  } = useQuery({
    queryKey: ['get-all'],
    queryFn: () => allProduct({}),
  });

  const {
    data: bigDis,
    isLoading: bigLoad,
    isError: bigError,
  } = useQuery({
    queryKey: ['bigDis'],
    queryFn: () => bigDiscount({}),
  });

  const {
    data: dis,
    isLoading: disLoad,
    isError: disError,
  } = useQuery({
    queryKey: ['dis'],
    queryFn: () => disCountProducts({}),
  });

  const {
    data: monthly,
    isLoading: monLoad,
    isError: monError,
  } = useQuery({
    queryKey: ['monthly'],
    queryFn: () => monthlyProduct({}),
  });

  return (
    <div className="custom-container w-full h-full relative">
      <CarouselSection data={bigDis?.data.data} />
      <ProductSection
        data={bigDis?.data.data}
        label="Katta chegirmalar"
        url={'big-discount'}
        loading={bigLoad}
        isError={bigError}
      />
      <ProductSection
        data={dis?.data.data}
        label="Chegirmaga tushganlar"
        url={'discount'}
        loading={disLoad}
        isError={disError}
      />
      <ProductSection
        data={monthly?.data.data}
        label="Shu oydagi mahsulotlar"
        url={'monthly'}
        loading={monLoad}
        isError={monError}
      />
      <ProductSection
        data={data?.data.data}
        label="Barcha Mahsulotlar"
        url={'all-product'}
        loading={allLoad}
        isError={allError}
      />
    </div>
  );
};

export default Welcome;

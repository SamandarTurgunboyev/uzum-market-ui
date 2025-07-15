import ProductCards from '@/features/products/products/ui/ProductSection';
import { myProduct } from '@/shared/config/api/productApi';
import { Card, CardContent } from '@/shared/ui/card';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

const MyProduct = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page') || '1');

  const { data, isError, isLoading } = useQuery({
    queryKey: ['my-product', page],
    queryFn: () => myProduct({ page, page_size: 16 }),
  });
  return (
    <Card className="w-full">
      <CardContent>
        <ProductCards
          data={data?.data.data}
          isError={isError}
          isLoading={isLoading}
        />
      </CardContent>
    </Card>
  );
};

export default MyProduct;

import { savedProduct } from '@/shared/config/api/productApi';
import { ResWithPagination } from '@/shared/config/api/types';
import { IMAGE_URL } from '@/shared/config/api/URLs';
import { cn } from '@/shared/lib/utils';
import { BigDiscountProductResModel } from '@/shared/types/productApi';
import { Button } from '@/shared/ui/button';
import IsError from '@/widgets/isError/IsError';
import Loading from '@/widgets/loading/Loading';
import RealPagination from '@/widgets/realPagination/RealPagination';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChevronRight, Heart, ShoppingCart, Star } from 'lucide-react';
import { ApiError } from 'next/dist/server/api-utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { toast } from 'sonner';
import FilterMobile from '../../filter/ui/FilterMobile';

interface Props {
  data: ResWithPagination<BigDiscountProductResModel> | undefined;
  label?: string;
  isLoading: boolean;
  isError: boolean;
}

const ProductCards: FC<Props> = ({ data, label, isLoading, isError }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: number | string) => {
      return savedProduct({ id: id });
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
      const keysToInvalidate = [
        ['get-all'],
        ['bigDis'],
        ['dis'],
        ['monthly'],
        ['saved'],
        ['my-product'],
      ];
      keysToInvalidate.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });
    },
    onError: (err: ApiError) => {
      toast.error(err.message || 'Xatolik yzu berdi');
    },
  });

  return (
    <div className="mt-10 w-full">
      {label && (
        <Link href={'#'}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-semibold">{label}</h1>
              <ChevronRight size={30} />
            </div>
            <div className="min-lg:hidden">
              <FilterMobile />
            </div>
          </div>
        </Link>
      )}
      {isError ? (
        <IsError title="Xatolik yuz ber" />
      ) : (
        <div className="w-full mt-10 h-full">
          <div
            className={cn(
              isError || (data?.data && data.data.length <= 0)
                ? 'grid grid-cols-1'
                : 'grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1',
            )}
          >
            {isLoading ? (
              <>
                {Array.from({ length: 15 }).map((_, e) => (
                  <Loading key={e} />
                ))}
              </>
            ) : (
              <>
                {data?.data && data.data.length > 0 ? (
                  <>
                    {data?.data.map((e, index) => (
                      <article className="relative h-full" key={index}>
                        <Link href={`/product/${e.id}`}>
                          <Image
                            src={
                              e.media.length > 0
                                ? IMAGE_URL + '/' + e.media[0]
                                : 'https://placehold.co/600x400'
                            }
                            width={300}
                            height={400}
                            alt={e.name || 'Product image'}
                            className="w-full h-[300px] object-cover"
                          />
                          <h3 className="px-2 truncate">{e.name}</h3>
                          <p className="flex items-center px-2 text-muted-foreground gap-1">
                            <Star size={16} fill="gold" color="gold" />
                            {e.rating}
                          </p>
                        </Link>
                        <div className="flex justify-between items-center px-2 mt-2">
                          <span className="font-bold">
                            {e.disCount ? <>{e.disPrice}</> : <>{e.price}</>}
                            {e.disCount && (
                              <span className="text-muted-foreground px-2 line-through">
                                {e.price}
                              </span>
                            )}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            aria-label="add to cart"
                          >
                            <ShoppingCart size={18} />
                          </Button>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-1 right-1"
                          aria-label="like"
                          onClick={() => mutate(e.slug)}
                        >
                          <Heart
                            color={e.isFavorite ? 'red' : 'black'}
                            fill={e.isFavorite ? 'red' : 'white'}
                            size={18}
                          />
                        </Button>
                      </article>
                    ))}
                  </>
                ) : (
                  <IsError title="Xech narsa topilmadi" />
                )}
              </>
            )}
          </div>
          <RealPagination
            totalPages={data?.total_pages || 1}
            currentPage={data?.page || 1}
          />
        </div>
      )}
    </div>
  );
};

export default ProductCards;

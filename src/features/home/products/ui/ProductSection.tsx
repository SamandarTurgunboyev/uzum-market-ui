import { savedProduct } from '@/shared/config/api/productApi';
import { ResWithPagination } from '@/shared/config/api/types';
import { IMAGE_URL } from '@/shared/config/api/URLs';
import { BigDiscountProductResModel } from '@/shared/types/productApi';
import { Button } from '@/shared/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import IsError from '@/widgets/isError/IsError';
import Loading from '@/widgets/loading/Loading';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChevronRight, Heart, ShoppingCart, Star } from 'lucide-react';
import { ApiError } from 'next/dist/server/api-utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { toast } from 'sonner';

interface Props {
  data: ResWithPagination<BigDiscountProductResModel> | undefined;
  label: string;
  loading: boolean;
  isError: boolean;
  url: string;
}

const ProductSection: FC<Props> = ({ data, label, url, loading, isError }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: number | string) => {
      return savedProduct({ id: id });
    },
    onSuccess: (res) => {
      toast.success(res.data.message);
      const keysToInvalidate = [['get-all'], ['bigDis'], ['dis'], ['monthly']];
      keysToInvalidate.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key });
      });
    },
    onError: (err: ApiError) => {
      toast.error(err.message || 'Xatolik yzu berdi');
    },
  });
  return (
    <section className="mt-10">
      <Link href={url} className="flex items-center">
        <h2 className="text-2xl font-semibold">{label}</h2>
        <ChevronRight size={30} />
      </Link>
      <Carousel className="w-full relative mt-10 h-[400px]">
        <CarouselContent>
          {isError ? (
            <IsError title="Xatolik yuz ber" />
          ) : (
            <>
              {loading ? (
                <div className="w-full h-96">
                  <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {Array.from({ length: 8 }).map((_, e) => (
                      <Loading key={e} />
                    ))}
                  </div>
                </div>
              ) : data?.data && data.data.length > 0 ? (
                <>
                  {data?.data.map((e, index) => {
                    console.log();

                    return (
                      <CarouselItem
                        key={index}
                        className="basis-1/5 max-2xl:basis-1/5 max-xl:basis-1/4 max-lg:basis-1/3 max-md:basis-1/2 max-sm:basis-1/1 relative cursor-pointer h-[400px]"
                      >
                        <article className="relative h-full">
                          <Link href={`/product/${e.slug}`}>
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
                      </CarouselItem>
                    );
                  })}
                </>
              ) : (
                <IsError title="Xech narsa topilmadi" />
              )}
            </>
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 !bg-gray-500 text-white" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 !bg-gray-500 text-white" />
      </Carousel>
    </section>
  );
};

export default ProductSection;

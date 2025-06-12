import LoadingCard from '@/features/loadingCard/loadingCard';
import { IMAGE_URL } from '@/shared/config/api/URLs';
import { Button } from '@/shared/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { ChevronRight, Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  data: Data[];
  label: string;
  loading?: boolean;
}

interface Data {
  image: string;
  media?: string[];
  name: string;
  like: boolean;
  price: string;
  discount?: string;
  rating: string;
  _id: number;
}

const ProductSection: FC<Props> = ({ data, label, loading = false }) => {
  return (
    <section className="mt-10">
      <Link href={`/products/${label}`} className="flex items-center">
        <h2 className="text-2xl font-semibold">{label}</h2>
        <ChevronRight size={30} />
      </Link>
      <Carousel className="w-full relative mt-10 h-[400px]">
        <CarouselContent>
          {loading ? (
            <LoadingCard />
          ) : (
            <>
              {data?.map((e, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/5 max-2xl:basis-1/5 max-xl:basis-1/4 max-lg:basis-1/3 max-md:basis-1/2 max-sm:basis-1/1 relative cursor-pointer h-[400px]"
                >
                  <article className="relative h-full">
                    <Link href={`/product/${e._id}`}>
                      <Image
                        src={
                          !e.media || e.media.length === 0
                            ? 'https://placehold.co/600x400'
                            : IMAGE_URL + e.media[0]
                        }
                        width={300}
                        height={400}
                        alt={e.name}
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
                        {e.price}
                        {e.discount && (
                          <span className="text-muted-foreground px-2 line-through">
                            {e.discount}
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
                    >
                      <Heart
                        color={e.like ? 'red' : 'black'}
                        fill={e.like ? 'red' : 'white'}
                        size={18}
                      />
                    </Button>
                  </article>
                </CarouselItem>
              ))}
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

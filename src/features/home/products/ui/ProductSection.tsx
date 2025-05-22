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
import React, { FC } from 'react';

interface Props {
  data: Data[];
  label: string;
}

interface Data {
  image: string;
  name: string;
  like: boolean;
  price: string;
  discount?: string;
  rating: string;
}

const ProductSection: FC<Props> = ({ data, label }) => {
  return (
    <div className="mt-10">
      <Link href={`/products/${label}`}>
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">{label}</h1>
          <ChevronRight size={30} />
        </div>
      </Link>
      <Carousel className="w-full relative mt-10">
        <CarouselContent>
          {data.map((e, index) => (
            <CarouselItem
              key={index}
              className="basis-1/5 max-2xl:basis-1/5 max-xl:basis-1/4 max-lg:basis-1/3  max-md:basis-1/2 max-sm:basis-1/1 relative"
            >
              <Image
                src="https://placehold.co/300x400.jpg"
                width={1280}
                height={700}
                alt="Product1"
              />
              <h1 className="px-2">
                {e.name.length > 60 ? e.name.slice(0, 60) : e.name}...
              </h1>
              <div className="flex px-2 text-muted-foreground items-center gap-2">
                <Star size={16} fill="gold" color="gold" />
                <p>{e.rating}</p>
              </div>
              <div className="mt-5 flex justify-between px-2">
                <p className="font-bold">
                  {e.price}
                  <span className="text-muted-foreground px-2 line-through">
                    {e.discount}
                  </span>
                </p>
                <Button className="rounded-md" variant={'outline'}>
                  <ShoppingCart />
                </Button>
              </div>
              <div className="absolute top-1 right-1">
                <Button variant={'outline'}>
                  <Heart
                    color={e.like ? 'red' : 'black'}
                    fill={e.like ? 'red' : 'white'}
                  />
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute flex justify-between items-center w-full top-1/2">
          <CarouselPrevious className="!bg-gray-500 text-white ml-4" />
          <CarouselNext className="!bg-gray-500 text-white ml-4" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSection;

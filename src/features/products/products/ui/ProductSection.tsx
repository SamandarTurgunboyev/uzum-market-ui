import { Button } from '@/shared/ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';
import { ChevronRight, Heart, ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import FilterMobile from '../../filter/ui/FilterMobile';

interface Props {
  data: Data[];
  label?: string;
}

interface Data {
  image: string;
  name: string;
  like: boolean;
  price: string;
  discount?: string;
  rating: string;
}

const ProductCards: FC<Props> = ({ data, label }) => {
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
      <div className="w-full mt-10 h-full">
        <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {data.slice(0, 12).map((e, index) => (
            <div key={index} className="relative">
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
            </div>
          ))}
        </div>
        <Pagination className="w-full flex justify-end mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductCards;

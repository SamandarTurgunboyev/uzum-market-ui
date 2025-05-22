'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import Image from 'next/image';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

const CarouselSection = () => {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            src="https://placehold.co/1280x500.jpg"
            width={1280}
            height={700}
            className="w-full h-full object-cover"
            alt="Product1"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://placehold.co/1280x500.jpg"
            width={1280}
            height={700}
            className="w-full h-full object-cover"
            alt="Product2"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src="https://placehold.co/1280x500.jpg"
            width={1280}
            height={700}
            className="w-full h-full object-cover"
            alt="Product3"
          />
        </CarouselItem>
      </CarouselContent>

      <div className="flex gap-1 absolute right-5 bottom-0">
        <CarouselPrevious className="!bg-gray-500 text-white" />
        <CarouselNext className="!bg-gray-500 text-white" />
      </div>
    </Carousel>
  );
};

export default CarouselSection;

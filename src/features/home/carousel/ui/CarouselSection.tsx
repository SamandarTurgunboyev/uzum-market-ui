'use client';

import { BigDiscountProductResModel } from '@/shared/config/api/types';
import { BASE_URL } from '@/shared/config/api/URLs';
import formatText from '@/shared/lib/formarText';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface Props {
  data: BigDiscountProductResModel[] | undefined;
}

const CarouselSection = ({ data }: Props) => {
  return (
    <Carousel
      className="w-full aspect-2/1"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="w-full aspect-2/1 shadow-md">
        {data?.map((e) => (
          <CarouselItem
            key={e.id}
            className="flex justify-between items-center relative"
          >
            <div className="w-auto max-sm:px-2 flex px-5 flex-col justify-center gap-2 left-4 top-0 bg-secondary/30 shadow-xl h-full absolute overflow-hidden">
              <div className="absolute flex justify-end items-start py-6 px-5 top-0 left-0 w-full h-[150px] bg-lime-600 [clip-path:polygon(0_0,100%_0,100%_100%)] shadow-lg z-10">
                <p className="text-5xl rotate-[24deg] text-red-700">
                  {e.discountPercent}
                </p>
              </div>
              <div className="mt-20 z-20">
                <p className="text-black text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-sm">
                  {e.name}
                </p>
                <p className="text-black text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm">
                  {formatText(e.description, 40)}
                </p>
                <p className="text-3xl flex gap-2 items-end max-lg:text-2xl max-md:text-xl max-sm:text-md">
                  <span className="text-lime-500">{e.disPrice}</span>
                  <span className="text-lg line-through text-red-600 max-lg:text-md max-md:text-xs">
                    {e.price}
                  </span>
                </p>
              </div>
            </div>
            <Image
              src={BASE_URL + '/uploads/' + e.banner[0]}
              width={200}
              height={200}
              className="w-full h-full object-fit"
              alt="Product1"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-1 absolute right-5 bottom-0">
        <CarouselPrevious className="!bg-gray-500 text-white" />
        <CarouselNext className="!bg-gray-500 text-white" />
      </div>
    </Carousel>
  );
};

export default CarouselSection;
